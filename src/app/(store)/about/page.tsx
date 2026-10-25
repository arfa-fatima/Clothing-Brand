import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pb-28">



      <section className="pt-16 pb-12 text-center px-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3 block">Our Story </span>
        <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-neutral-900"> Crafted for Timeless Living</h1>
        <p className="mt-4 text-base text-neutral-600 font-light">
          Faah was founded with a singular purpose: to create understated, luxurious essentials combining artisanal craftsmanship with clean modern silhouettes.</p>    
      </section>




      <section className="w-[94%] max-w-7xl mx-auto my-12 bg-[#faf8f5] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative h-[420px] lg:h-[540px] w-full">
            <img src="/hero-image.png" alt=" Faaaaaah image" className="w-full h-full object-cover object-center" />
          </div>

          <div className="p-8 sm:p-14 lg:p-16 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">The Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-4 leading-snug">Every Stitch, A Considered Choice </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
              We reject transient fast-fashion cycles. Each piece in our collections is cut from premium raw silks, fine linens, and rich hand-feel textiles, designed to transition effortlessly across seasons.</p>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              From our studio to your wardrobe, our focus remains on drape, longevity, and enduring modern silhouettes.
            </p>
          </div>
        </div>
      </section>

   




      <section className="w-[94%] max-w-7xl mx-auto my-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif tracking-tight text-neutral-900"> What Defines Faah</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-xl border border-neutral-100 bg-[#fbf9f5]">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Artisanal Craft</h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              Collaborating with skilled master artisans to celebrate refined hand-embroidery and textile heritage.</p>
          </div>

          <div className="p-8 rounded-xl border border-neutral-100 bg-[#fbf9f5]">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Conscious Materials</h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              Carefully curated raw silks, unadulterated cotton lawns, and pure fibers tailored for breathability and wear.</p>
          </div>

          <div className="p-8 rounded-xl border border-neutral-100 bg-[#fbf9f5]">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Modern Tailoring</h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              Relaxed, contemporary proportions designed to empower and complement personal everyday style.</p>
          </div>
        </div>
      </section>





      <section className="text-center mt-16 px-4">
        <h3 className="text-2xl font-serif text-neutral-900 mb-4">Experience the Collection </h3>
        <Link href="/shop"
          className="inline-block px-8 py-3.5 bg-black text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-sm">Explore Shop
        </Link>
      </section>
    </main>
  );
}