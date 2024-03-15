"use client";
import "../styles/globals.css";
import Cliente from "@/types/Cliente";
import InputForm from "./InputForm";
import { useState } from "react";
import FormProps from "@/types/interfaces/FormProps";

export default function Formulario(props: FormProps) {
  const id = props.cliente?.id;
  const ID = id && typeof id === "string" ? id.substring(0, 4) : "";
  const numericID = parseInt(
    ID
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(""),
    10
  );
  const firstFiveDigits = parseInt(numericID.toString().substring(0, 4));

  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] : any = useState(props.cliente?.idade ?? "0");
  const [idadeValida, setIdadeValida] = useState(true);

  const validarIdade = (value: any) => {
    const stringValue = value.toString().toLowerCase();

    if (!value) {
      setIdade("0");
      return idade;
    }

    if (value == "0") {
      setIdade("0");
      return idade;
    }

    if (stringValue.includes("e") || isNaN(Number(value))) {
      setIdade("0");
      setIdadeValida(false);
      return idade;
    } else {
      let intValue = parseInt(value, 10);
      if (intValue > 120) {
        intValue = 120;
        setIdadeValida(true);
        return intValue;
      }
      if (intValue >= 0 && intValue <= 120) {
        setIdadeValida(true);
        return intValue;
      } else {
        setIdade("0");
        setIdadeValida(false);
        return idade;
      }
    }
  };

  return (
    <div className="transition-all duration-1000 ease-in-out">
      {id ? (
        <InputForm
          className=" text-start m-0 py-0 pl-2 pr-0 bg-transparent border-0 opacity-100 
          hover:opacity-100 focus:opacity-100 hover:border-0 focus:border-0
          transition-all duration-1 ease-in-out focus:outline-0 text-white"
          divClass="flex flex-row mx-0 mt-0 mb-2 p-0 bg-transparent border-0 opacity-100"
          text="Id:"
          tipo="number"
          valor={firstFiveDigits}
          readonly
        />
      ) : (
        false
      )}
      <InputForm
        text="Nome"
        tipo="text"
        valor={nome}
        onChange={setNome}
        placeholder="Digite o nome"
        className="border-2 border-purple-600 focus:outline-none opacity-50 
        hover:opacity-100 transition-all duration-1000 ease-in-out"
      />
      <InputForm
        text="Idade"
        tipo="number"
        valor={idade}
        onChange={(value: any) => setIdade(validarIdade(value))}
        placeholder="Digite a idade"
        className="border-2 border-purple-600 focus:outline-none opacity-50 
        hover:opacity-100 transition-all duration-1000 ease-in-out"
      />
      {!idadeValida && (
        <h6
          className="text-red-500 mb-5 p-0 w-full"
          style={{ fontSize: "14px" }}
        >
          * Idade inválida. Insira um número inteiro positivo diferente de zero.
        </h6>
      )}

      <div className="flex justify-end mx-1 mb-1 mt-10 gap-2 transition-all duration-1000 ease-in-out">
        <button
          className="flex align-middle justify-center content-center items-center bg-green-950 p-2 font-extrabold
           rounded-full opacity-80 hover:opacity-100 hover:bg-green-700 hover:scale-105 transition-all duration-1000 ease-in-out"
        onClick={() =>{ props.clienteChanged?.(new Cliente(id, nome, idade)); props.onClick()}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={` text-white w-6 h-6 rounded-lg transition-all duration-1000 ease-in-out`}
          >
            <path
              fillRule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="text-white mx-2 xxs:hidden font-medium hover:{{font-size: 14px}}">
            {id ? "Alterar" : "Salvar"}
          </div>
        </button>
        <button
          className="flex align-middle justify-center content-center items-center bg-red-950 p-2 font-extrabold
        rounded-full opacity-80 hover:opacity-100  hover:bg-red-700 hover:scale-105 transition-all duration-1000 ease-in-out"
          onClick={props.onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={` text-white w-6 h-6 rounded-lg transition-all duration-1000 ease-in-out`}
          >
            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
          </svg>

          <div className="text-white mx-2 xxs:hidden font-medium">Cancelar</div>
        </button>
      </div>
    </div>
  );
}
