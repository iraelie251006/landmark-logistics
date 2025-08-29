import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react'

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24">
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
          <div className="relative container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
            
            {/* Small Label */}
            <Badge className="text-sm uppercase tracking-widest text-slate-800 mb-4 bg-white font-bold">
              About Us
            </Badge>
    
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
              Delivering Beyond Borders
            </h1>
    
            {/* Subheading */}
            <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
              At Landmark Logistics, we simplify global trade by providing 
              reliable shipping, air freight, and warehousing solutions tailored 
              to businesses worldwide.
            </p>
    
            {/* Call to Action */}
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-white font-semibold rounded-2xl hover:bg-white hover:text-blue-700 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
        
      );
}

export default AboutHero