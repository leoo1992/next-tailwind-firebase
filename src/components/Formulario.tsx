import Cliente from "@/core/Cliente";
import InputForm from "./InputForm";


interface formProps {
  cliente?: Cliente;
}

export default function Formulario(props: formProps) {
  const id = props.cliente?.id;

  return (
    <div>
      {id ? <InputForm text="Id" tipo="number" valor={id}/> : false}  
      <InputForm text="Nome" tipo="text" />
      <InputForm text="Idade" tipo="number" />
      
    </div>
  );
}
