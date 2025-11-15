import React from 'react'
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold">VeloDetail</h3>
            <p className="mt-2 text-white/70">Showroom finish. Every time.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#booking" className="hover:text-white">Booking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li>hello@velodetail.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon–Sat, 9am–6pm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow</h4>
            <div className="mt-3 flex items-center gap-3 text-white/70">
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="w-5 h-5" /></a>
              <a href="#" aria-label="Email" className="hover:text-white"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} VeloDetail. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
