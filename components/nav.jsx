"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/logo.svg" width={124} height={50} alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#" className="font-semibold hover:text-gray-600">Home</Link>
              <Link href="#" className="font-semibold hover:text-gray-600">About</Link>
              <Link href="#" className="font-semibold hover:text-gray-600">Listings</Link>
              <Link href="#" className="font-semibold hover:text-gray-600">Services</Link>
              <Link href="#" className="font-semibold hover:text-gray-600">Blog</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm" href="#">
                <Image src="/user-blanck.svg" width={18} height={18} alt="User" />
                Register/Login
              </Link>
              <Link href="#" className="ml-3">
                <Image src="/add-listing.svg" width={170} height={50} alt="Add Listing" />
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Home</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">About</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Listings</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Services</Link>
            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Blog</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <Link href="#" className="flex-shrink-0 w-full">
                <Image src="/user-blanck.svg" width={18} height={18} alt="User" className="inline mr-2" />
                <span>Register/Login</span>
              </Link>
            </div>
            <div className="mt-3 px-2">
              <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Add Listing</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;