import Link from "next/link"

const CTA = () => {
  return (
    <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for a customized solution that fits your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/team" className="btn-outline">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CTA