import "../styles/globals.css";
import Layout from "./Layout";
import Tabela from "./Tabela";
import Cliente from "@/types/Cliente";
import Botao from "./Botao";
import Formulario from "./Formulario";
import { useEffect, useState } from "react";
import TituloPagina from "./TituloPagina";
import Cliente_Firebase_Repository from "@/repository/Cliente_Firebase_Repository";
import ClienteColection from "@/database/ClienteColection";

export default function MainContent() {
  const [tabelaAtiva, setTabelaAtiva] = useState(true);
  const [tamanho, setTamanho] = useState(tabelaAtiva ? "w-11/12" : "w-5/6");
  const [textoBotao, setTextoBotao] = useState(tabelaAtiva ? "Novo" : "Listar");
  const [client, setClient] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const repository : Cliente_Firebase_Repository = new ClienteColection();

useEffect(() => {
  repository.list().then(setClientes)
}, [])

  const toggleTabela = () => {
    setTabelaAtiva(!tabelaAtiva);
    setTextoBotao(tabelaAtiva ? "Listar" : "Novo");
    setTamanho(tabelaAtiva ? "5/6" : "w-11/12");
  };

  function selecaoCliente(cliente: Cliente) {
    setClient(cliente);
    toggleTabela();
  }

  function excluirCliente(cliente: Cliente) {
    console.log(cliente.nome);
  }
  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
  }

  function novoCliente() {
    if (textoBotao === "Novo") {
      setClient(Cliente.vazio());
    }
    toggleTabela();
  }

  return (
    <>
      <TituloPagina />
      <Layout
        titulo={
          tabelaAtiva
            ? "Lista"
            : client.id !== '0' && client.id
            ? "Alterar"
            : "Cadastro"
        }
        w={tamanho}
        style={tabelaAtiva ? {} : { width: "310px" }}
      >
        <div className="flex justify-end mr-1">
          <Botao ehTabela={tabelaAtiva} onClick={novoCliente}>
            {textoBotao}
          </Botao>
        </div>

        {tabelaAtiva ? (
          <Tabela
            cliente={clientes}
            selecaoCliente={selecaoCliente}
            excluirCliente={excluirCliente}
          ></Tabela>
        ) : (
          <Formulario
            clienteChanged={salvarCliente}
            onClick={novoCliente}
            cliente={client}
          ></Formulario>
        )}
      </Layout>
    </>
  );
}
