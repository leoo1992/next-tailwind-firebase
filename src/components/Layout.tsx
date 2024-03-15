import LayoutProps from "@/types/interfaces/LayoutProps";
import TitleCard from "./TitleCard";

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`flex flex-col ${props.w} rounded-xl p-4
       text-indigo-200 font-mono text-lg  bg-black opacity-85 
       shadow-indigo-500 shadow-xl transition-all duration-1000 ease-in-out hover:shadow-md
      hover:opacity-100 ${props.className}
       `} 
       style={props.style}
    >
      <TitleCard>{props.titulo}</TitleCard>
      <div>{props.children}</div>
    </div>
  );
}
