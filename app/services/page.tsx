import Benefits from '@/components/Benefits'
import CTA from '@/components/CTA'
import ServiceHero from '@/components/ServiceHero'
import WhatWeOffer from '@/components/WhatWeOffer'
import React from 'react'

const page = () => {
  return (
    <section>
        <ServiceHero />
        <WhatWeOffer />
        <Benefits />
        <CTA />
    </section>
  )
}

export default page