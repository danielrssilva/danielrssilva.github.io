export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="w-[25rem] h-[25rem] flex items-center justify-center rotate-45 relative">
        <h1 className="uppercase text-[3.875rem] text-white font-thin -rotate-45 absolute">
          Loading
        </h1>
        <div className="w-full h-full">
          <span className="absolute left-0 top-0 h-px w-full bg-white" />
          <span className="absolute right-0 bottom-0 h-px w-full bg-white" />
          <span className="absolute right-0 top-0 w-px h-full bg-white" />
          <span className="absolute left-0 bottom-0 w-px h-full bg-white" />
        </div>
        <span className="h-px absolute bg-white top-[110%]  w-full"></span>
        <span className="h-px w-full absolute bg-white bottom-[110%]"></span>
      </div>
    </div>
  );
}
