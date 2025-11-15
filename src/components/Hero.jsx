import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Sparkles, Car, Rocket, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-sm mb-6 ring-1 ring-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="tracking-wide">Premium Auto Detailing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your Ride with Showroom-Quality Shine
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Ceramic coatings, paint correction, interior deep-cleaning, and more. Crafted for enthusiasts, trusted by professionals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="group inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 font-medium shadow-lg shadow-black/20 hover:shadow-xl transition">
                <Car className="w-5 h-5" />
                Explore Services
              </a>
              <a href="#booking" className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
                <Rocket className="w-5 h-5" />
                Book Now
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300" />
                4.9/5 rating
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Trusted by 2,000+ drivers
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
