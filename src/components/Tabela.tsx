"use client";
import Cliente from "@/types/Cliente";
import { iconeEditar, iconeDeletar } from "./ActionsIconsGroup";
import TabelaProps from "@/types/interfaces/TabelaProps";


export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.selecaoCliente || props.excluirCliente;

  function renderizarCabecalho() {
    return (
      <tr className="w-full">
        <th className="cursor-pointer w-1/4 sm:w-1/6 lg:w-1/12 pt-1 p-1 transition-all duration-1000 ease-in-out opacity-50 hover:bg-violet-900 hover:opacity-100">
          Id
        </th>
        <th className="text-start cursor-pointer w-1/2 sm:w-1/3 lg:w-1/4 pt-1 p-1 transition-all duration-1000 ease-in-out opacity-50 hover:bg-violet-900 hover:opacity-100">
          <span className="ml-5">Nome</span>
        </th>
        <th className="cursor-pointer w-1/4 sm:w-1/6 lg:w-1/12 pt-1 p-1 transition-all duration-1000 ease-in-out opacity-50 hover:bg-violet-900 hover:opacity-100">
          Idade
        </th>
        {exibirAcoes ? (
          <th className=" w-1/4 sm:w-1/6 lg:w-1/12 pt-1 p-1"></th>
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
          className={`w-full transition-all duration-1000 ease-in-out ${
            i % 2 === 0
              ? "bg-indigo-950 shadow hover:bg-indigo-500"
              : "bg-violet-950 hover:bg-violet-500"
          }`}
        >
          <td className="w-1/4 sm:w-1/6 lg:w-1/12 text-center pt-1 pb-1">
            {cliente.id}
          </td>
          <td className="w-1/2 sm:w-1/3 lg:w-1/4 pt-1 pb-1">{cliente.nome}</td>
          <td className="w-1/4 sm:w-1/6 lg:w-1/12 text-center pt-1 pb-1">
            {cliente.idade}
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
          <button onClick={() => props?.selecaoCliente?.(cliente)}>
            {iconeEditar()}
          </button>
        ) : (
          false
        )}
        {props.excluirCliente ? (
          <button onClick={() => props?.excluirCliente?.(cliente)}>
            {iconeDeletar()}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <div className="overflow-x-auto overflow-y-auto transition-all duration-1000 ease-in-out">
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
