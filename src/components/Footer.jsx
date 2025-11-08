export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} EstateFlow. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-900">Privacy</a>
          <a href="#" className="hover:text-zinc-900">Terms</a>
          <a href="#" className="hover:text-zinc-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
