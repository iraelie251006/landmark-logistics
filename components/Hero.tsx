'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';

const images = [
  '/images/shipping-cargo.jpg',
  '/images/air-cargo.avif',
  '/images/road-cargo.jpg',
  '/images/warehousing.jpg'
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt="Hero image"
            fill
            className="object-cover"
          />
        </div>
      ))}


<div className="absolute top-0 left-0 w-full h-full bg-black/70 z-20"></div>

      <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center text-center text-white px-4 z-30">
        <Badge className='bg-gradient-to-r from-green-500 to-blue-600 font-poppins font-semibold tracking-wider'>
            Your Trusted Logistic Partner.
        </Badge>
        <h1 className="text-[30px] tracking-wide md:text-6xl font-poppins font-black my-4">
          Landmark Logistics Ltd
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-semibold">
          Point to Point, on time & cost effective.
        </p>
        
      </div>
    </section>
  );
}
