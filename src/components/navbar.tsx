export default function Navbar() {
  return (
    <div className="fixed top-4 inset-x-0 mx-auto">
      <nav className="mx-auto max-w-sm lg:max-w-2xl border border-white/[0.1] rounded-md px-4 py-2 backdrop-blur-xl">
        <div className="flex justify-evenly">
          <a 
          href="#"
          className="flex text-zinc-100 font-semibold cursor-pointer hover:bg-muted p-1 px-2 rounded-md">
            Iron Stream
          </a>
          <a
            className="text-zinc-200 font-semibold cursor-pointer hover:bg-muted p-1 px-2 rounded-md"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-zinc-200 font-semibold cursor-pointer hover:bg-muted p-1 px-2 rounded-md"
            href="#about"
          >
            About
          </a>
          <a
            className="text-zinc-200 font-semibold cursor-pointer hover:bg-muted p-1 px-2 rounded-md"
            href="#pricing"
          >
            Pricing
          </a>
        </div>
      </nav>
    </div>
  );
}
