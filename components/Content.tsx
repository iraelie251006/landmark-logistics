import { Award, CheckCircle, Clock, Globe, Globe2, Package, Plane, Shield, Ship, Truck, Users, Warehouse, Zap } from "lucide-react";

export const whyUsFeatures = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'On-Time Delivery',
      description: '99.8% delivery success rate with real-time tracking and proactive communication.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Secure & Insured',
      description: 'Full insurance coverage and advanced security protocols protect your valuable cargo.'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Global Network',
      description: 'Worldwide presence with local expertise in over 50 countries and territories.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Fast & Efficient',
      description: 'Optimized routes and cutting-edge technology ensure maximum speed and efficiency.'
    }
  ];

export const services = [
    {
      title: 'Road Transportation',
      description: 'Our cross-Border services are efficient and ensure that shipments reach their destinations in a timely',
      icon: <Truck className="h-6 w-6" />
    },
    {
      title: 'Ocean Freight',
      description: 'We work with reputable shipping lines and agencies for us to provide our clients with premium services guaranteeing quality and reliable sailing schedules.',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Air Freight',
      description: 'Our airline capabilities are based on our excellent relationships in partnership with our associates and with the most reliable airlines in the industry. The air freight services that we handle are global from Europe, Asia, Africa and America.',
      icon: <Zap className="h-6 w-6" />
    }
  ];

export const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'Landmark Logistics transformed our supply chain efficiency. Outstanding service!'
    },
    {
      name: 'Maria Garcia',
      company: 'Global Manufacturing',
      rating: 5,
      text: 'Reliable, professional, and always delivers on time. Highly recommended.'
    },
    {
      name: 'David Chen',
      company: 'E-commerce Solutions',
      rating: 5,
      text: 'Their technology platform and customer service are simply unmatched.'
    }
  ];

export const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: 'Reliability',
      description: 'We consistently deliver on our promises with unwavering dependability.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in every aspect of our service.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Customer Focus',
      description: 'Your success is our priority. We tailor solutions to meet your specific needs.'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Global Reach',
      description: 'Comprehensive logistics solutions spanning across continents and industries.'
    }
  ];

export const AllServices = [
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: 'Road Transportation',
      description: 'Comprehensive road transport solutions with real-time tracking and flexible delivery options.',
      features: ['24/7 Tracking', 'Same-Day Delivery', 'Flexible Scheduling', 'Temperature Control']
    },
    {
      icon: <Ship className="h-12 w-12 text-primary" />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight services for large shipments with full cargo management.',
      features: ['Full Container Load', 'Less Container Load', 'Port-to-Port', 'Door-to-Door']
    },
    {
      icon: <Plane className="h-12 w-12 text-primary" />,
      title: 'Air Cargo',
      description: 'Fast and secure air transport for time-sensitive and high-value shipments.',
      features: ['Express Delivery', 'Secure Handling', 'Global Network', 'Priority Processing']
    },
    {
      icon: <Warehouse className="h-12 w-12 text-primary" />,
      title: 'Warehousing',
      description: 'State-of-the-art storage facilities with inventory management and distribution services.',
      features: ['Climate Control', 'Security Systems', 'Inventory Management', 'Pick & Pack']
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization to streamline your operations.',
      features: ['Demand Planning', 'Vendor Management', 'Cost Optimization', 'Risk Mitigation']
    },
    {
      icon: <Globe2 className="h-12 w-12 text-primary" />,
      title: 'International Trade',
      description: 'Complete international shipping solutions with customs clearance and documentation.',
      features: ['Customs Clearance', 'Documentation', 'Compliance', 'Multi-Modal Transport']
    }
  ];

export const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: 'Time Efficiency',
      description: 'Optimized routes and processes to ensure your shipments arrive on time, every time.'
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: 'Secure Handling',
      description: 'Advanced security protocols and insurance coverage to protect your valuable cargo.'
    },
    {
      icon: <Globe2 className="h-8 w-8 text-secondary" />,
      title: 'Global Network',
      description: 'Extensive partner network enabling seamless logistics operations worldwide.'
    }
  ];