
interface InputProps {
  text: string;
  tipo: "text" | "number";
  tipe?:"text"
  valor: any;
  readonly?: boolean;
  onChange?: (valor: any) => void;
  placeholder?: string;
}

export default function InputForm(props: InputProps) {

  return (
    <div className="flex flex-col my-3">
      <label className="mb-2 ml-2">{props.text}</label>
      <input
        className={`
        ${props.tipo === "number" ? "text-center" : ""} 
        mx-3 mb-4 border-2 border-purple-600 rounded-full px-3 py-2
        focus:outline-none bg-gray-800 opacity-50 hover:opacity-100 transition-all duration-1000 ease-in-out
        `}
        style={props.tipo === "number" ? {width: props.valor || props.valor === 0 ? "100px" : "200px"} : {}}
        type={props.tipe ?? "text"}
        value={props.valor}
        readOnly={props.readonly}
        onChange={e=> props.onChange?.(e.target.value)}
        placeholder={props.placeholder}
        maxLength={props.tipo === "number" ? 3 : 150}
      />
    </div>
  );
}
