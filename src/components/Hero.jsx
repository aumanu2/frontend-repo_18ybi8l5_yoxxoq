import { Search } from "lucide-react";

export default function Hero({ onSearch }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
              Find your next home with confidence
            </h1>
            <p className="mt-4 text-zinc-600 text-lg">
              Browse hand‑picked properties across top neighborhoods. Clean design, powerful filters, and real photos to help you decide faster.
            </p>
            <div className="mt-8 bg-white p-2 rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="City, neighborhood, or address"
                  className="flex-1 rounded-xl border border-zinc-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
                <select className="rounded-xl border border-zinc-200 px-4 py-3 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900">
                  <option>Buy</option>
                  <option>Rent</option>
                </select>
                <button
                  onClick={onSearch}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 text-white px-5 py-3 hover:bg-zinc-800 transition"
                >
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-600">
              <span>Verified listings</span>
              <span>HD photos</span>
              <span>No hidden fees</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-zinc-200 bg-zinc-100 aspect-[4/3]"></div>
        </div>
      </div>
    </section>
  );
}
