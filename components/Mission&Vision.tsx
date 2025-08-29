import { Eye, Target } from 'lucide-react'
import React from 'react'

const MissionVision = () => {
  return (
    <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="p-3 rounded-lg inline-block mb-6 bg-primary/10 mr-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, reliable, and cost-effective logistics solutions that enable our clients 
                to focus on their core business while we handle the complexities of global supply chain management. 
                We strive to build lasting partnerships based on trust, transparency, and exceptional service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="p-3 rounded-lg inline-block mb-6 bg-primary/10 mr-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world&apos;s most trusted logistics partner, recognized for our innovation, sustainability, 
                and commitment to connecting businesses across the globe. We envision a future where efficient 
                logistics enables seamless global trade and economic growth for all.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MissionVision