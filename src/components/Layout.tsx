import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`flex flex-col w-2/3 rounded-xl p-4
       text-indigo-300 font-mono text-lg  bg-black opacity-85 
       shadow-indigo-500 shadow-xl transition-all duration-1000 ease-in-out hover:shadow-md
      hover:opacity-100 cursor-pointer
       `} 
    >
      <Titulo>{props.titulo}</Titulo>
      <div className="p-4">{props.children}</div>
    </div>
  );
}
