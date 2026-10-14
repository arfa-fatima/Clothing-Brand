export default function Newsletter() {
    return (
        <section className="bg-neutral-950 text-white py-16 px-6 text-center border-1 w-[97%] mx-auto rounded m-10">
            <h2 className="text-2xl md:text-3xl tracking-wide uppercase">
                Stay in the Faah Circle
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-md mx-auto">
                Be the first to discover new arrivals, private edits, and seasonal offers.</p>

            <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
                <input
                    type="email" placeholder="Enter your email" className="w-full sm:w-72 px-4 py-2.5 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 rounded-md text-sm focus:outline-none focus:border-white transition-colors"  required/>
                <button type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-white text-black text-sm font-medium rounded-md hover:bg-neutral-200 transition-colors cursor-pointer">
                    Subscribe
                </button>
            </form>

            <p className="text-neutral-500 text-xs mt-4 ">
                By subscribing, you agree to receive updates from Faah.</p>
        </section>
    );
}