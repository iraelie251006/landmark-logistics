import Image from 'next/image'

const CompanyStory = () => {
  return (
    <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p>
                  Founded in 2014, Landmark Logistics Ltd began as a vision to revolutionize the 
                  logistics industry through innovative solutions and unwavering commitment to excellence.
                </p>
                <p>
                Over the years, we have grown from a local operation to a global logistics provider, serving clients across 50+ countries. Our success is built on trust, innovation, and an unwavering commitment to delivering results that exceed expectations.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a logistics company – we&apos;re your 
                  strategic partner in success, offering comprehensive solutions that drive efficiency 
                  and growth for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="card-elegant overflow-hidden">
              <Image
                src="/images/road-cargo.jpg"
                width={600}
                height={300}
                alt="Professional team meeting at Landmark Logistics"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default CompanyStory