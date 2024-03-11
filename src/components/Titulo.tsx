export default function Layout(props: any) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <h1 className="mb-3 p-2 sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
          {props.children}
        </h1>
      </div>
      <hr className="border-1 border-indigo-500 pb-4" />
    </div>
  );
}
