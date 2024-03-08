export default function Layout(props: any) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">{props.children}</h1>
      <hr className="border-1 border-indigo-500" />
    </div>
  );
}
