import Link from "next/link";

export default function CategoriesSection(){
    return(
        <div className="bg-white text-black mt-10 w-[97%] mx-auto rounded-lg pb-10">
            <div className="flex flex-col text-center p-3 ">
                <h1 className="font-bold text-2xl">Shop by Category</h1>
                <p className="text-xl mt-2">Discover timeless pieces designed to complement your everyday style.</p>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center max-w-6xl mx-auto px-4 mt-8 ">

             {/* ----category 1---- */}
            <div className="border border-gray-100 bg-transparent rounded-lg hover:bg-gray-100  transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
               
                <Link href="/dresses">
                <img  className="w-full h-96 object-cover" src="dress-img.png" alt="" />
                 <h1 className="text-lg p-2">Dresses</h1>
                </Link>

            </div>


                {/* ----category 2---- */}
            <div className="border border-gray-100 bg-transparent bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                
                <Link href="/tops">
                <img  className="w-full h-96 object-cover" src="top-img.webp" alt="" />
                <h1 className="text-lg p-2">Tops</h1>
                </Link>
            </div>

            {/* ----category 3---- */}
            <div className="border border-gray-100 bg-transparent bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
               
                <Link href="/dresses">
                <img  className="w-full h-96 object-cover" src="bottom-img.webp" alt="" />
                 <h1 className="text-lg p-2">Bottoms</h1>
                </Link>
            </div>
         {/* ----category 4---- */}
            <div className="border border-gray-100 bg-transparent bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                
                <Link href="/dresses">
                <img  className="w-full h-96 object-cover" src="co-ords-img.png" alt="" />
                <h1 className="text-lg p-2">Co-ords</h1>
                </Link>
            </div>
            </div>
        </div>

    );
}