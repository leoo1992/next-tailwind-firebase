import "../styles/globals.css";
import Layout from "./Layout";
import Tabela from "./Tabela";
import Botao from "./Botao";
import Formulario from "./Formulario";
import TituloPagina from "./TituloPagina";
import useClientes from "@/hooks/useClientes";

export default function MainContent() {
  const clientes = useClientes();

  return (
    <>
      <TituloPagina />
      <Layout
        titulo={
          clientes.tabelaAtiva
            ? "Lista"
            : clientes.client.id !== "0" && clientes.client.id
            ? "Alterar"
            : "Cadastro"
        }
        w={clientes.tamanho}
        style={clientes.tabelaAtiva ? {width: '90%'} : { width: "310px" }}
      >
        <div className="flex justify-end mr-1 transition-all duration-1000 ease-in-out">
          <Botao ehTabela={clientes.tabelaAtiva} onClick={clientes.novoCliente}>
            <span className="hover:w-10">{clientes.textoBotao}</span>
          </Botao>
        </div>

        {clientes.tabelaAtiva ? (
          <Tabela
            cliente={clientes.clientes}
            selecaoCliente={clientes.selecaoCliente}
            excluirCliente={clientes.excluirCliente}
          ></Tabela>
        ) : (
          <Formulario
            clienteChanged={clientes.salvarCliente}
            onClick={clientes.novoCliente}
            cliente={clientes.client}
          ></Formulario>
        )}
      </Layout>
    </>
  );
}
