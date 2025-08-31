import { Building, Globe, Users } from "lucide-react"

const TeamHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-corporate-blue via-corporate-blue-light to-corporate-blue-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/TeamWork.jpg')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-12 h-12" />
              <h1 className="text-4xl md:text-6xl font-bold">Our Team</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Meet the dedicated professionals behind our global logistics network
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Building className="w-8 h-8 mx-auto mb-3 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">Multiple Offices</h3>
                <p className="text-white/80">Strategic locations across Africa and beyond</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-3 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="text-white/80">International representatives and partnerships</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-white/80" />
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-white/80">Experienced professionals in logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TeamHero