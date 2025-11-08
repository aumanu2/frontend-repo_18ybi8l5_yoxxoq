import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import PropertyGrid from "./components/PropertyGrid";
import Footer from "./components/Footer";

export default function App() {
  const [filters, setFilters] = useState(null);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero onSearch={() => window.scrollTo({ top: 520, behavior: "smooth" })} />
        <Filters onChange={setFilters} />
        <PropertyGrid filters={filters || {}} />
      </main>
      <Footer />
    </div>
  );
}
