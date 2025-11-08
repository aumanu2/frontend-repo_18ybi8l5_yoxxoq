import { Home, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-zinc-900 text-white">
              <Home size={20} />
            </div>
            <span className="font-semibold text-zinc-900">EstateFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <a className="hover:text-zinc-900 transition" href="#">Buy</a>
            <a className="hover:text-zinc-900 transition" href="#">Rent</a>
            <a className="hover:text-zinc-900 transition" href="#">Sell</a>
            <a className="hover:text-zinc-900 transition" href="#">Agents</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-zinc-100">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
