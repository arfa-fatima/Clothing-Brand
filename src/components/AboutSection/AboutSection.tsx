import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="bg-white text-black flex flex-col items-center justify-center text-center p-5 w-[97%] mx-auto rounded-lg">
      <h1 className="font-bold text-3xl p-7">About Faah</h1>
      <p className="font-semibold text-2xl">Designed for the modern woman.</p>
      <p className="p-4 text-xl">
        Faah is about effortless style, timeless pieces, and everyday confidence.
      </p>

      <div className="w-full flex justify-center mt-2">
        <Link
          href="/about"
          className="mb-10 w-[50%] max-w-xs text-center bg-white text-black border border-black rounded-md p-2 cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white">
          Discover Our Story
        </Link>
      </div>
    </div>
  );
}