'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              entry.target.classList.add('animate-fade-in');
            } else if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-slide-in-left');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-slide-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Store refs in variables to use in cleanup
    const headingElement = headingRef.current;
    const contentElement = contentRef.current;
    const imageElement = imageRef.current;

    if (headingElement) observer.observe(headingElement);
    if (contentElement) observer.observe(contentElement);
    if (imageElement) observer.observe(imageElement);

    return () => {
      if (headingElement) observer.unobserve(headingElement);
      if (contentElement) observer.unobserve(contentElement);
      if (imageElement) observer.unobserve(imageElement);
    };
  }, []);

  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <div ref={headingRef} className="text-center mb-12 md:mb-16 opacity-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Over Ons</h2>
          <div className="divider mx-auto"></div>
          <p className="text-black max-w-2xl mx-auto">
            Maak kennis met <b>Donato Lunesu</b>, uw specialist in klimaatbeheersing met meer dan 30 jaar ervaring in Parkstad.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div ref={imageRef} className="w-full md:w-1/2 opacity-0">
            <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/donato.jpg"
                alt="Donato Lunesu"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div ref={contentRef} className="w-full md:w-1/2 opacity-0">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">Vakmanschap & Ervaring</h3>
            <div className="divider"></div>
            <p className="text-black text-sm md:text-base mb-4">
              Al meer dan 30 jaar ben ik, Donato Lunesu, actief in de wereld van klimaatbeheersing. Wat begon als een passie voor techniek en comfort, is uitgegroeid tot een bedrijf dat staat voor kwaliteit, betrouwbaarheid en vakmanschap in Parkstad en omgeving.
            </p>
            <p className="text-black text-sm md:text-base mb-6">
              Mijn expertise ligt in het installeren van warmtepompen en airconditioningsystemen voor zowel particuliere als zakelijke klanten. Door de jaren heen heb ik bijna 3000 tevreden klanten mogen helpen met hun klimaatbehoeften.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-black text-sm md:text-base">Vakkundig</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-black text-sm md:text-base">Betrouwbaar</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-black text-sm md:text-base">Flexibel</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span className="text-black text-sm md:text-base">Klantvriendelijk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 