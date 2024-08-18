"use client";
import Navbar from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#4CC9F0]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
          {/* Content and Image */}
          <div className="flex-1 flex flex-col gap-8 max-w-2xl">
            <h1 className="text-[#4361EE] font-bold text-xl">REAL ESTATE</h1>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Find a perfect home you love..!</p>
            <p className="text-lg text-gray-600">Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
            <div className="relative w-full aspect-w-16 aspect-h-10 mt-8">
              <Image
                src="/modern-bedroom.svg"
                
                objectFit="cover"
                alt="Modern Bedroom"
                className="rounded-lg shadow-lg"
                width={540} height={340}
              />
            </div>
          </div>
          
          {/* Form for searching */}
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-xl p-8 mt-12 lg:mt-0">
            <div className="flex flex-wrap items-center justify-center gap-4 w-full pb-6 border-b-2">
              <span className="text-white bg-[#3A0CA3] rounded-full px-8 py-2 text-sm">For sale</span>
              <span className="text-gray-600 hover:bg-gray-100 rounded-full px-8 py-2 text-sm cursor-pointer">For Rent</span>
            </div>
            <div className="space-y-4 mt-6">
              <input type="text" placeholder="Dubai, Abu Dhabi, etc" className="w-full border rounded-full p-3 bg-[#F3F4F6]"/>
              <input type="text" placeholder="Select property type" className="w-full border rounded-full p-3 bg-[#F3F4F6]"/>
              <input type="text" placeholder="Number of rooms" className="w-full border rounded-full p-3 bg-[#F3F4F6]"/>
              <button className="w-full border rounded-full p-3 bg-[#3A0CA3] text-white mt-6 hover:bg-[#2A0B73] transition-colors duration-300">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}