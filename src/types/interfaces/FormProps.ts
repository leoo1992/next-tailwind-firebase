import Cliente from "@/types/Cliente";
export default interface formProps {
    cliente: Cliente;
    onClick: () => any | void;
    clienteChanged?: (cliente: Cliente) => any | void;
  }
  