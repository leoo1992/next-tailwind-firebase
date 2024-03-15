"use client";
import Cliente from "@/types/Cliente";
import { iconeEditar, iconeDeletar } from "./ActionsIconsGroup";
import TabelaProps from "@/types/interfaces/TabelaProps";


export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.selecaoCliente || props.excluirCliente;

  function extrairNumeros(id: string): string {
    const ID = id && typeof id === "string" ? id.substring(0, 4) : "";
    const numericID = 
      ID
        .split("")
        .map((char) => char.charCodeAt(0))
        .join("");
  
    return numericID.substring(0, 4); 
  }

  function renderizarCabecalho() {
    return (
      <tr className="w-full">
        <th className="cursor-pointer w-1/4 sm:w-1/6 lg:w-1/12 pt-1 p-1 transition-all duration-1000 ease-in-out opacity-50 hover:bg-violet-900 hover:opacity-100">
        <span className="m-2">Id</span>
        </th>
        <th className="cursor-pointer w-1/2 sm:w-1/3 lg:w-1/4 pt-1 p-1 transition-all duration-1000 ease-in-out opacity-50 hover:bg-violet-900 hover:opacity-100">
          <span className="m-2">Nome</span>
        </th>
        <th className="cursor-pointer w-1/4 sm:w-1/6 lg:w-1/12 pt-1 p-1 transition-all duration-1000 ease-in-out opacity-50 hover:bg-violet-900 hover:opacity-100">
        <span className="m-2">Idade</span>
        </th>
        {exibirAcoes ? (
          <th className="m-0 p-0"></th>
        ) : (
          false
        )}
      </tr>
    );
  }

  function renderizarDados() {
    return props.cliente?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`w-full  transition-all duration-1000 ease-in-out ${
            i % 2 === 0
              ? "bg-indigo-950 shadow hover:bg-indigo-500"
              : "bg-violet-950 hover:bg-violet-500"
          }`}
        >
          <td className="w-1/4 sm:w-1/6 lg:w-1/12 text-center pt-1 pb-1">
            <span className="p-2">{extrairNumeros(cliente.id)}</span>
          </td>
          <td className="w-1/2 sm:w-1/3 lg:w-1/4 pt-1 pb-1">{cliente.nome}</td>
          <td className="w-1/4 sm:w-1/6 lg:w-1/12 text-center pt-1 pb-1">
            <span className="p-2">{cliente.idade}</span>
          </td>
{exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="text-center flex justify-end items-center align-middle content-end self-center">
        {props.selecaoCliente ? (
          <button className='p-0 m-0' onClick={() => props?.selecaoCliente?.(cliente)}>
            {iconeEditar()}
          </button>
        ) : (
          false
        )}
        {props.excluirCliente ? (
          <button className='p-0 m-0' onClick={() => props?.excluirCliente?.(cliente)}>
            {iconeDeletar()}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <div className="table-auto w-full overflow-x-auto overflow-y-auto transition-all duration-1000 ease-in-out">
      <table
        className={`mt-2 table-auto w-full rounded-lg overflow-hidden text-indigo-100 transition-all duration-1000 ease-in-out`}
      >
        <thead
          className={`w-full bg-gradient-to-r from-indigo-950 to-purple-950`}
        >
          {renderizarCabecalho()}
        </thead>
        <tbody className="w-full">{renderizarDados()}</tbody>
      </table>
    </div>
  );
}
