export default interface InputProps {
    text: string;
    tipo: "text" | "number";
    tipe?:"text"
    valor: any;
    readonly?: boolean;
    onChange?: (valor: any) => void;
    placeholder?: string;
    className?: string;
    divClass?: string;
  }