'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Store refs in variables to use in animations and cleanup
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const ctaElement = ctaRef.current;
    const imageElement = imageRef.current;

    if (titleElement) {
      titleElement.classList.add('animate-fade-in');
    }
    if (subtitleElement) {
      subtitleElement.classList.add('animate-fade-in', 'stagger-1');
    }
    if (ctaElement) {
      ctaElement.classList.add('animate-fade-in', 'stagger-2');
    }
    if (imageElement) {
      imageElement.classList.add('animate-slide-in-right', 'stagger-1');
    }
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 
              ref={titleRef} 
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 text-black"
            >
              Specialist in <span className="text-gradient">warmtepompen</span> & <span className="text-gradient">airconditioning</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-base md:text-lg text-black mb-8 opacity-0"
            >
              Met meer dan 30 jaar ervaring biedt Donato Lunesu professionele installatie en onderhoud van klimaatsystemen voor optimaal comfort in uw woning of bedrijf in Parkstad en omgeving.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <Link href="#contact" className="btn btn-primary text-center">
                Offerte aanvragen
              </Link>
              <Link href="#services" className="btn btn-outline text-center">
                Onze diensten
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 rounded-full blur-3xl"></div>
            <div 
              ref={imageRef}
              className="relative opacity-0"
            >
              <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border-2 border-blue-500 p-2 bg-white">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image 
                    src="/donato.jpg" 
                    alt="Donato Lunesu - Warmtepomp & Airco Specialist" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-center -mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white bg-blue-500 inline-block px-4 py-2">
                  Donato <span className="text-blue-900">Lunesu</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-20 md:mt-24 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">30+</div>
            <p className="text-sm md:text-base text-black">Jaren ervaring</p>
          </div>
          
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">3000+</div>
            <p className="text-sm md:text-base text-black">Tevreden klanten</p>
          </div>
          
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">100%</div>
            <p className="text-sm md:text-base text-black">Gecertificeerd</p>
          </div>
        </div>
      </div>
    </section>
  );
} 