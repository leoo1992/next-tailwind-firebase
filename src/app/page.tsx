import Layout from "@/components/Layout";
import "./globals.css";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";

export default function Home() {
  const clientes: Cliente[] = [
    new Cliente("1", "Ana", 22),
    new Cliente("2", "João", 27),
    new Cliente("3", "Maria", 32),
    new Cliente("4", "Pedro", 47),
    new Cliente("5", "Lucas", 52),
    new Cliente("6", "Carla", 57),
    new Cliente("7", "Bruna", 62),
    new Cliente("8", "Bruno", 67),
    new Cliente("9", "Luana", 72),
  ];

  function selecaoCliente(cliente: Cliente) {
    console.log(cliente.nome);
  }
  function excluirCliente(cliente: Cliente) {
    console.log(cliente.nome);
  }

  return (
    <main
      className={`animated-background flex h-screen flex-col items-center justify-center 
      bg-gradient-to-tr from-purple-300 to-sky-300 opacity-90 overflow-x-auto overflow-y-auto`}
    >
      <span
        className={`text-transparent bg-clip-text font-extrabold
        bg-gradient-to-tr from-indigo-950 to-purple-950
        text-4xl mb-4 `}
        style={{
          filter: "drop-shadow(0 0 1px white)",
          WebkitFilter: "drop-shadow(0 0 1px white)",
        }}
      >
        Clientes
      </span>
      <Layout titulo="Lista de Clientes">
        <div className="flex justify-end">
          <Botao>Novo</Botao>
        </div>
        {/* <Formulario /> */}
        <Tabela cliente={clientes} ></Tabela>
        {/* selecaoCliente={selecaoCliente} excluirCliente={excluirCliente} */}
      </Layout>
    </main>
  );
}
