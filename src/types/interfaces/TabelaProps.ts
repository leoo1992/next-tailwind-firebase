import Cliente from "../Cliente";

export default interface TabelaProps {
    cliente: Cliente[];
    selecaoCliente?: (cliente: Cliente) => void;
    excluirCliente?: (cliente: Cliente) => void;
  }