import Cliente from "@/core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-2">Id</th>
        <th className="p-2">Nome</th>
        <th className="p-2">Idade</th>
        <th className="p-2">Actions</th>
        <th></th>
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id}>
          <td className="text-center p-1">{cliente.id}</td>
          <td className="p-1">{cliente.nome}</td>
          <td className="text-center p-1">{cliente.idade}</td>
        </tr>
      );
    });
  }

  return (
    <table
      className={`w-full rounded-lg overflow-hidden 
      shadow-sm shadow-purple-500 border-none`}
    >
      <thead
        className={`bg-gradient-to-r from-indigo-950 to-purple-950
        shadow-sm shadow-purple-500 border-none
        `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
