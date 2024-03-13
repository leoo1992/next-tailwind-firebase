import BotaoProps from "@/types/interfaces/BotaoProps";
import React from "react";

const Botao = (props: BotaoProps) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center bg-violet-800 p-2 font-extrabold
    rounded-full opacity-80 hover:opacity-100 transition-all duration-1000 ease-in-out"
    >
      {props.ehTabela ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={` text-white w-6 h-6 rounded-full `}
        >
          <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM12.5 3.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={` text-white w-6 h-6 rounded-full `}
        >
          <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h11a2.5 2.5 0 0 1 0 5h-11A2.5 2.5 0 0 1 2 4.5ZM2.75 9.083a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2.75 12.663a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2.75 16.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 1 0 0-1.5H2.75Z" />
        </svg>
      )}

      <div className="text-white mx-2 xxs:hidden font-medium">
        {props.children}
      </div>
    </button>
  );
};

export default Botao;
