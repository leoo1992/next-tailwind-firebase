import "../styles/globals.css";
import Layout from "./Layout";
import Table from "./Table";
import ButtonListOrTable from "./ButtonListOrTable";
import FormClient from "./FormClient";
import TitlePage from "./TitlePage";
import useClientes from "@/hooks/useClientes";

export default function MainContent() {
  const clientes = useClientes();
  return (
    <>
      <TitlePage />
      <Layout
        titulo={
          clientes.tabelaAtiva
            ? "Lista"
            : clientes.client.id !== "0" && clientes.client.id
            ? "Alterar"
            : "Cadastro"
        }
        w={clientes.tamanho}
        style={clientes.tabelaAtiva ? { width: "90%" } : { width: "310px" }}
      >
        <ButtonListOrTable ehTabela={clientes.tabelaAtiva} onClick={clientes.novoCliente}>
          <span className="hover:w-10">{clientes.textoBotao}</span>
        </ButtonListOrTable>
        {clientes.tabelaAtiva ? (
          <Table
            cliente={clientes.clientes}
            selecaoCliente={clientes.selecaoCliente}
            excluirCliente={clientes.excluirCliente}
            loading={clientes.carregandoLista}
          />
        ) : (
          <FormClient
            clienteChanged={clientes.salvarCliente}
            onClick={clientes.novoCliente}
            cliente={clientes.client}
          />
        )}
      </Layout>
    </>
  );
}
