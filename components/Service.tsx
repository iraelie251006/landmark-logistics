import React from 'react'
import { services } from './Content'
import Link from 'next/link'

const Service = () => {
  return (
    <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-hero">
              View All Services
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Service