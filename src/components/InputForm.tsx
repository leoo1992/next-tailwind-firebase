"use client";
import "../styles/globals.css";
import InputProps from "@/types/interfaces/InputProps";
export default function InputForm(props: InputProps) {
  return (
    <div className={`${props.divClass || 'flex flex-col mb-3'}`} >
      <label className="mb-1 ml-2">{props.text}</label>
      <input
        className={`
        ${props.tipo === "number" ? "text-center" : "w-full"} 
        mb-1  rounded-lg p-2 bg-gray-800
        ${props.className}`}
        style={props.tipo === "number" ? {width: props.valor || props.valor === 0 ? "60px" : "200px"} : {}}
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
