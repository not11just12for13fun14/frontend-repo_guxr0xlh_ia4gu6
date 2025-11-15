import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Obsessed with the details</h2>
                <p className="mt-4 text-gray-600">We combine cutting-edge products with meticulous craftsmanship. Every panel, every stitch, every surface—perfected.</p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>• Insured and certified technicians</li>
                  <li>• Mobile service available</li>
                  <li>• Satisfaction guaranteed</li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-blue-500/20 blur-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
