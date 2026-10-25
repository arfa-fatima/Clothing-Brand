// import Link from "next/link";

// export default function NewArrivals(){
//     return(
//         <div className="bg-white text-black w-[97%] mx-auto mt-10 pb-10 rounded-lg">
//             <div className="flex text-center flex-col ">
//                 <h1 className=" font-bold text-2xl mt-10 ">New Arrivals</h1>
//                  <p className="text-xl mt-2">Latest pieces, freshly added to our collection.</p>
//             </div>


//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center max-w-6xl mx-auto px-4 mt-8">

//              {/* ----category 1---- */}
//             <div className="border border-gray-100 bg-transparent rounded-lg hover:bg-gray-100  transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
               
//                 <Link href="/dresses">
//                 <img  className="w-full h-96 object-cover rounded-xl overflow-hidden" src="newarrival1.jpeg" alt="" />
//                  <h1 className="font-semibold text-neutral-900 p-2">Turquoise Maple Silk Tunic</h1>
//                  <h1> Rs.45,000</h1>
//                  <button className="bg-black text-white hover:bg-neutral-800 cursor-pointer border p-1 w-50 rounded-lg m-4">Add To Cart</button>
//                 </Link>

//             </div>


//                 {/* ----category 2---- */}
//              <div className="border border-gray-100 bg-transparent rounded-lg hover:bg-gray-100  transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
               
//                 <Link href="/dresses">
//                 <img  className="w-full h-96 object-cover rounded-xl overflow-hidden" src="newarrival2.jpeg" alt="" />
//                  <h1 className="font-semibold text-neutral-900 p-2">Silver Gray Raw Silk</h1>
//                  <h1>Rs.80,000</h1>
//                  <button className="bg-black text-white hover:bg-neutral-800 cursor-pointer border p-1 w-50 rounded-lg m-4">Add To Cart</button>
//                 </Link>

//             </div>

//             {/* ----category 3---- */}
//               <div className="border border-gray-100 bg-transparent rounded-lg hover:bg-gray-100  transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
               
//                 <Link href="/dresses">
//                 <img  className="w-full h-96 object-cover rounded-xl overflow-hidden" src="newarrival3.jpeg" alt="" />
//                  <h1 className="font-semibold text-neutral-900 p-2">Stitched Embroided Raw Silk</h1>
//                  <h1>Rs.50,000</h1>
//                  <button className="bg-black text-white hover:bg-neutral-800 cursor-pointer border p-1 w-50 rounded-lg m-4">Add To Cart</button>
//                 </Link>

//             </div>
//          {/* ----category 4---- */}
//             <div className="border border-gray-100 bg-transparent rounded-lg hover:bg-gray-100  transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
               
//                 <Link href="/dresses">
//                 <img  className="w-full h-96 object-cover rounded-xl overflow-hidden" src="newarrival4.jpeg" alt="" />
//                  <h1 className="font-semibold text-neutral-900 p-2">Neptune Green Block</h1>
//                  <h1> Rs.30,000</h1>
//                  <button className="bg-black text-white hover:bg-neutral-800 cursor-pointer border p-1 w-50 rounded-lg m-4">Add To Cart</button>
//                 </Link>

//             </div>
           
//             </div>
//            <div className="flex justify-center mx-auto my-8">
//   <Link href="/new-arrivals" className="px-8 py-3 bg-black w-[20%] text-white hover:bg-neutral-800 transition-colors text-xs uppercase tracking-widest font-medium rounded-sm inline-block text-center" > View All</Link>
// </div>
//         </div>
//     );
// }



import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function NewArrivals() {
  const latestProducts = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block border border-gray-200 rounded-lg p-3 hover:shadow transition">
              <div className="relative aspect-square w-full rounded-md overflow-hidden bg-gray-100 mb-3">
                <Image
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"/>
              </div>
              <h3 className="font-medium text-sm text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="font-semibold text-sm text-gray-900 mt-1">
                Rs. {product.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}