import Cliente from "@/types/Cliente";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";

export default function useClientes() {
  const [tabelaAtiva, setTabelaAtiva] = useState(true);
  const [tamanho, setTamanho] = useState(tabelaAtiva ? "w-11/12" : "w-5/6");
  const [textoBotao, setTextoBotao] = useState(tabelaAtiva ? "Novo" : "Listar");
  const [client, setClient] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [carregandoLista, setCarregandoLista] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        listar();
        setCarregandoLista(!carregandoLista);
      }, 4000);
    };
    fetchData();
  }, []);

  const toggleTabela = () => {
    setTabelaAtiva(!tabelaAtiva);
    setTextoBotao(tabelaAtiva ? "Listar" : "Novo");
    setTamanho(tabelaAtiva ? "5/6" : "w-11/12");
  };

  async function listar() {
    const snapshot = await db.collection("clientes").get();
    const fetchedClients = snapshot.docs.map((doc) => {
      const data = doc.data();
      return new Cliente(doc.id, data.nome, data.idade);
    });
    setClientes(fetchedClients);
  }

  async function selecaoCliente(cliente: Cliente) {
    setClient(cliente);
    toggleTabela();
  }

  async function excluirCliente(cliente: Cliente) {
    db.collection("clientes")
      .doc(cliente.id)
      .delete()
      .then(() => {
        setClientes(clientes.filter((c) => c.id !== cliente.id));
      })
      .catch((error) => {
        console.error("Erro ao excluir cliente: ", error);
      });
  }
  async function salvarCliente(cliente: Cliente) {
    const clienteData = cliente.toObject();

    if (cliente.id) {
      await db.collection("clientes").doc(cliente.id).update(clienteData);
    } else {
      await db.collection("clientes").add(clienteData);
    }

    listar();
  }

  function novoCliente() {
    if (textoBotao === "Novo") {
      setClient(Cliente.vazio());
    }
    toggleTabela();
  }

  return {
    tabelaAtiva,
    tamanho,
    textoBotao,
    client,
    clientes,
    toggleTabela,
    novoCliente,
    selecaoCliente,
    excluirCliente,
    salvarCliente,
    carregandoLista,
  };
}
