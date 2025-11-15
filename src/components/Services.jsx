import React from 'react'
import { motion } from 'framer-motion'
import { SprayCan, Droplets, Sparkles, Shield, Gauge, Wand2 } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Exterior Wash',
    desc: 'Hand wash, foam bath, and premium wax for a deep, lasting shine.',
    price: '$49',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    desc: 'Long-lasting protection with hydrophobic finish and UV resistance.',
    price: '$599',
  },
  {
    icon: Wand2,
    title: 'Paint Correction',
    desc: 'Multi-stage correction to remove swirls, scratches, and oxidation.',
    price: 'From $299',
  },
  {
    icon: Droplets,
    title: 'Interior Deep Clean',
    desc: 'Steam clean, leather conditioning, and odor neutralization.',
    price: '$149',
  },
  {
    icon: Gauge,
    title: 'Engine Bay Detail',
    desc: 'Degrease, shine, and protect vital components with care.',
    price: '$99',
  },
  {
    icon: SprayCan,
    title: 'Wheel & Tire Package',
    desc: 'Decontamination, dressing, and brake dust protection for wheels.',
    price: '$79',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Signature Services</h2>
          <p className="mt-3 text-gray-600">Premium packages tailored for every car and every lifestyle.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between">
                <s.icon className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-semibold text-gray-500">{s.price}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
