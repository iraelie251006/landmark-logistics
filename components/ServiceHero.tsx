
const ServiceHero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
      {/* Overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          From air and ocean freight to warehousing and logistics, we provide seamless solutions that move your business forward.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#services"
            className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-blue-800 transition shadow-lg font-medium"
          >
            Explore Services
          </a> 
          {/* bg-green-500 hover:bg-green-600 */}
          {/* <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-blue-800 transition font-medium"
          >
            Get a Quote
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default ServiceHero