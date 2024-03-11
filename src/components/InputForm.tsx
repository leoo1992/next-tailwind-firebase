
interface InputProps {
  text?: string;
  tipo?: "text" | "number";
  valor?: any;
  readonly?: boolean;
}

export default function InputForm(props: InputProps) {

  return (
    <div className="flex flex-col my-3">
      <label className="mb-2 ml-2">{props.text}</label>
      <input
        className={`
        ${props.tipo === "number" ? "w-1/4 text-center" : "w-auto"} 
        mx-3 mb-4 border-2 border-purple-600 rounded-full px-3 py-2
        focus:outline-none bg-gray-800 opacity-50 hover:opacity-100
        `}
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.readonly}
      />
    </div>
  );
}
