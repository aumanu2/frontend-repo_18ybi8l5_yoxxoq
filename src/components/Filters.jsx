import { useState } from "react";

export default function Filters({ onChange }) {
  const [filters, setFilters] = useState({
    price: "",
    beds: "",
    baths: "",
    type: "Any",
  });

  function update(name, value) {
    const next = { ...filters, [name]: value };
    setFilters(next);
    onChange?.(next);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 bg-white p-4 rounded-2xl shadow-sm ring-1 ring-zinc-200 -mt-8 relative z-10">
        <select
          value={filters.type}
          onChange={(e) => update("type", e.target.value)}
          className="rounded-xl border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
        >
          <option>Any</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Condo</option>
          <option>Townhome</option>
        </select>
        <input
          value={filters.price}
          onChange={(e) => update("price", e.target.value)}
          type="text"
          placeholder="Max price"
          className="rounded-xl border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <input
          value={filters.beds}
          onChange={(e) => update("beds", e.target.value)}
          type="number"
          placeholder="Beds"
          className="rounded-xl border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <input
          value={filters.baths}
          onChange={(e) => update("baths", e.target.value)}
          type="number"
          placeholder="Baths"
          className="rounded-xl border border-zinc-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <button
          onClick={() => onChange?.(filters)}
          className="col-span-2 lg:col-span-1 rounded-xl bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800"
        >
          Apply
        </button>
        <button
          onClick={() => {
            const reset = { price: "", beds: "", baths: "", type: "Any" };
            setFilters(reset);
            onChange?.(reset);
          }}
          className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
