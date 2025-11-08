import { BedDouble, Bath, MapPin } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white ring-1 ring-zinc-200 hover:ring-zinc-300 transition">
      <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-zinc-900">{property.title}</h3>
          <span className="text-zinc-900 font-semibold">${property.price.toLocaleString()}</span>
        </div>
        <div className="mt-1 flex items-center text-sm text-zinc-600">
          <MapPin size={16} className="mr-1" /> {property.location}
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm text-zinc-700">
          <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {property.beds} beds</span>
          <span className="inline-flex items-center gap-1"><Bath size={16} /> {property.baths} baths</span>
          <span className="inline-flex items-center gap-1">{property.size} sqft</span>
        </div>
      </div>
    </article>
  );
}
