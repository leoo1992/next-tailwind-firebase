import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`flex flex-col w-11/12 rounded-xl p-4
       text-indigo-200 font-mono text-lg  bg-black opacity-85 
       shadow-indigo-500 shadow-xl transition-all duration-1000 ease-in-out hover:shadow-md
      hover:opacity-100
       `} 
    >
      <Titulo>{props.titulo}</Titulo>
      <div className="w-full">{props.children}</div>
    </div>
  );
}
