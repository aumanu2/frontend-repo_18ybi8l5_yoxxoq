import PropertyCard from "./PropertyCard";

const demoProperties = [
  {
    id: 1,
    title: "Modern Family House",
    price: 650000,
    beds: 4,
    baths: 3,
    size: 2400,
    location: "Brooklyn, NY",
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1975&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Downtown Apartment",
    price: 420000,
    beds: 2,
    baths: 2,
    size: 980,
    location: "Seattle, WA",
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cozy Suburban Condo",
    price: 320000,
    beds: 2,
    baths: 1,
    size: 860,
    location: "Austin, TX",
    type: "Condo",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Townhome",
    price: 780000,
    beds: 3,
    baths: 3,
    size: 2100,
    location: "San Diego, CA",
    type: "Townhome",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function PropertyGrid({ filters }) {
  const filtered = demoProperties.filter((p) => {
    const byType = filters?.type && filters.type !== "Any" ? p.type === filters.type : true;
    const byBeds = filters?.beds ? p.beds >= Number(filters.beds) : true;
    const byBaths = filters?.baths ? p.baths >= Number(filters.baths) : true;
    const byPrice = filters?.price ? p.price <= Number(filters.price.replace(/[^0-9]/g, "")) : true;
    return byType && byBeds && byBaths && byPrice;
  });

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">Featured properties</h2>
            <p className="text-sm text-zinc-600">Curated homes you will love</p>
          </div>
          <div className="text-sm text-zinc-600">
            {filtered.length} of {demoProperties.length} results
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
