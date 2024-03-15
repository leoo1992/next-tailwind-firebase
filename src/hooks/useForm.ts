import { useState } from "react";

export default function useForm(props: any) {
  const id = props.cliente?.id;
  const ID = id && typeof id === "string" ? id.substring(0, 4) : "";
  const numericID = parseInt(
    ID.split("")
      .map((char) => char.charCodeAt(0))
      .join(""),
    10
  );
  const firstFiveDigits = parseInt(numericID.toString().substring(0, 4));

  const [idade, setIdade]: any = useState(props.cliente?.idade ?? "");
  const [idadeValida, setIdadeValida] = useState(true);

  const validarIdade = (value: any) => {
    const stringValue = value.toString().toLowerCase();

    if (!value) {
      setIdade("");
      setIdadeValida(false);
      return idade;
    }

    if (value == "0") {
      setIdade("");
      setIdadeValida(false);
      return idade;
    }

    if (stringValue.includes("e") || isNaN(Number(value))) {
      setIdade("");
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
        setIdade("");
        setIdadeValida(false);
        return idade;
      }
    }
  };
  return {
    id,
    ID,
    numericID,
    firstFiveDigits,
    idadeValida,
    validarIdade,
    setIdade,
    idade
  };
}
