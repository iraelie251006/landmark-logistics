import { ArrowRight } from "lucide-react"
import { AllServices } from "./Content"

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From local deliveries to global supply chains, we&apos;ve got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AllServices.map((service, index) => (
              <div key={index} className="card-elegant p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhatWeOffer