import Link from "next/link";

export default function Footer(){
    return (
        <footer className="w-full bg-white text-black py-7">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-4 gap-10">
            {/* -----column 1---- */}
            <div>
                <h2 className="font-bold ">Faah</h2>
                <p className=" max-w-[180px] leading-relaxed mt-2" >Created for everyday elegance and timeless modern living</p>

            </div>

         {/* -----column 2---- */}
            <div className="flex flex-col gap-2" >
                <h2 className="font-bold">Quick Links</h2>
            
                <Link href="/shop">Shop</Link>
                <Link href="/new-arrivals">New Arrivals</Link>
                <Link href="/about">About us</Link>
                <Link href="/contact">Contact us</Link>
                

            </div>

         {/* -----column 3---- */}
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">Customer Care</h2>

                <span>Shipping and Delivery</span>
                <span>Return and Exchanges</span>
                <span>Order Tracking</span>
                <span>FAQs</span>
            </div>


        {/* -----column 4---- */}
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">Follow Us</h2>
                <span>Instagram</span>
                <span>Facebook </span>
                <span>Pinterest</span>
                <span>Tiktok</span>
            </div>
        </div>



        {/* -----last line---- */}
        <div className="flex flex-row mx-auto  justify-between mt-10 gap-10 pl-10 pr-10">
            <div>
                <span>2026 Faah Clothing. All right Served</span>
            </div>
            <div>
                <span>Privacy Policy | Terms</span>
            </div>
        </div>
        </footer>
    );
}