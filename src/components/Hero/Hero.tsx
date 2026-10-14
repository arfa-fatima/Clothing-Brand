import Link from "next/link";

export default function hero_page(){
    return(
       <div className="flex flex-col h-[400px] w-[97%] mx-auto rounded-lg mt-5 bg-[url('/hero-image.png')]  bg-cover bg-center bg-no-repeat text-black justify-center pl-5">
            <div>
                <h1 className="text-4xl tracking-tight font-bold ">New Season Drop</h1>
                <p className="text-sm lg:text-base text-gray-600 max-w-sm leading-relaxed mt-2">Explore the new collection crafted for everyday elegance and modern living.</p>
                <Link className="flex justify-center border-2 rounded-lg p-2 w-[30%] mt-10 hover:text-gray-600 transition-colors " href="/shop">Shop Collection</Link>
            </div>
            
        </div>
    );
}

// 5:10