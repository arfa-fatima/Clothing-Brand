import Link from "next/link";

export default function FeaturedCollection() {
  return (
    <section className="w-[97%] mx-auto my-20 bg-white rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        
        
        <div className="relative h-[480px] lg:h-[600px] w-full overflow-hidden">
          <img
            src="feature-selection.png"
            alt="Signature Collection"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"/>
        </div>

      
        <div className="p-8 sm:p-14 lg:p-20 flex flex-col justify-center items-start text-left">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">Limited Edition</span>
          <h2 className="text-3xl sm:text-4xl text-neutral-900 tracking-tight leading-tight mb-4">The Raw Silk Edit</h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-8 max-w-md">
            Handcrafted silhouettes cut from premium fabrics, designed to bring effortless elegance and modern sophistication to your everyday wardrobe.
          </p>

          <Link
            href="/collection"
            className="inline-block px-8 py-3.5 bg-black text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-sm">Discover Collection
          </Link>
        </div>

      </div>
    </section>
  );
}