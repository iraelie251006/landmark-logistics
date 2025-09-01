import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { LinkPreview } from './ui/link-preview';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#00b09b] to-[#0061ff] p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Landmark Logistics Ltd</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in global logistics solutions. We deliver excellence in every shipment.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#00b09b] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#00b09b] cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#00b09b] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-[#00b09b] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#00b09b] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[#00b09b] transition-colors">Services</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-[#00b09b] transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Ocean Freight</span></li>
              <li><span className="text-gray-400">Air Freight</span></li>
              <li><span className="text-gray-400">Road Transport</span></li>
              <li><span className="text-gray-400">Warehousing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='w-[350px]'>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#00b09b]" />
                {/* add mail to link */}
                <Link href="mailto:landmarklogisticsrwanda@gmail.com" className="text-gray-400">landmarklogisticsrwanda@gmail.com</Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#00b09b]" />
                <span className="text-gray-400">+(250) 788-465-059</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#00b09b]" />
                <span className="text-gray-400">Kigali-Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#00b09b]" />
                <span className="text-gray-400">P.O. Box 1507</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center flex justify-between max-sm:flex-col text-slate-400"> 
          <div className='mt-5'>
            <p className='text-sm'>© 2025 Landmark Logistics Ltd. All rights reserved.</p>
          </div>
          <div className="mt-2 pt-2 text-sm text-slate-400 flex gap-1 items-center justify-center">
           Developed by{" "}
            <LinkPreview
              url={
                "https://www.linkedin.com/in/niyubwayo-irakoze-elie-14b003284/"
              }
              imageSrc="/LinkedInElie.jpeg"
              isStatic
              className="font-bold text-white tracking-wider"
            >
              Irakoze Elie
            </LinkPreview>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}