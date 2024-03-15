export default function TitleCard(props: any) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <h1 className="p-2 text-2xl">
          {props.children}
        </h1>
      </div>
      <hr className="border-1 border-indigo-500 pb-4" />
    </div>
  );
}
