import React from 'react'
import { Menu, Car, Phone, Info, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-full bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40 ring-1 ring-white/10">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#" className="inline-flex items-center gap-2 text-white font-semibold">
            <Car className="w-6 h-6 text-blue-400" />
            VeloDetail
          </a>

          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#booking" className="hover:text-white">Booking</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#booking" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 font-medium shadow hover:shadow-md">
              <Phone className="w-4 h-4" /> Get a Quote
            </a>
            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white ring-1 ring-white/20">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
