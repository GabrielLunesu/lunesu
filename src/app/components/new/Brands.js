'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Brands() {
  const headingRef = useRef(null);
  const brandsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (brandsRef.current) observer.observe(brandsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (brandsRef.current) observer.unobserve(brandsRef.current);
    };
  }, []);

  const brands = [
    {
      name: 'Daikin',
      logo: '/logo/daiking-logo.png'
    },
    {
      name: 'Mitsubishi Electric',
      logo: '/logo/mitshubishi-logo.png'
    },
    {
      name: 'Mitsubishi Heavy',
      logo: '/logo/mitshubishi-heavy-logo.png'
    },
    {
      name: 'Toshiba',
      logo: '/logo/toshiba-logo.png'
    }
  ];

  return (
    <section className="section bg-white py-12 md:py-16">
      <div className="container-narrow">
        <div ref={headingRef} className="text-center mb-8 md:mb-12 opacity-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Wij werken met topmerken</h2>
          <div className="divider mx-auto"></div>
        </div>

        <div 
          ref={brandsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center opacity-0"
        >
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center p-3 md:p-4">
              <Image 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                width={150}
                height={75}
                className="object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 