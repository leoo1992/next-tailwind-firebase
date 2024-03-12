import Cliente from "@/core/Cliente";
import InputForm from "./InputForm";
import { useState } from "react";

interface formProps {
  cliente?: Cliente;
}

export default function Formulario(props: formProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 1);
  const [idadeValida, setIdadeValida] = useState(true);

  const validarIdade = (value: any) => {
    const stringValue = value.toString().toLowerCase();

    if (!value) {
      setIdade(1);
      return idade;
    }
  
    if (stringValue.includes("e") || isNaN(Number(value))) {
      setIdade(1);
      setIdadeValida(false);
      return idade;
    } else {
      let intValue = parseInt(value, 10);
      if (intValue > 120) {
        intValue = 120;
        setIdadeValida(true);
        return intValue;
      }
      if (intValue > 0 && intValue <= 120) {
        setIdadeValida(true);
        return intValue;
      } else {
        setIdade(1);
        setIdadeValida(false);
        return idade;
      }
    }
  };
  

  return (
    <div className="transition-all duration-1000 ease-in-out">
      {id ? <InputForm text="Id" tipo="number" valor={id} readonly /> : false}
      <InputForm
        text="Nome"
        tipo="text"
        valor={nome}
        onChange={setNome}
        placeholder="Digite o nome"
      />
      <InputForm
        text="Idade"
        tipo="number"
        valor={idade}
        onChange={(value) => setIdade(validarIdade(value))}
        placeholder="Digite a idade"
      />
      {!idadeValida && (
        <span className="text-red-500">
          Idade inválida. Insira um número inteiro positivo diferente de zero.
        </span>
      )}
    </div>
  );
}
