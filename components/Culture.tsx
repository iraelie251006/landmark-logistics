import { Award } from "lucide-react"

const Culture = () => {
  return (
    <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an environment of collaboration, innovation, and continuous learning where every team member can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence First</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from customer service to operational efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600">
                Success comes from working together, sharing knowledge, and supporting each other&apos;s growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full inline-block mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and ideas to improve our services and stay ahead of industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Culture