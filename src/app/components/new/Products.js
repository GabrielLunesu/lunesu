'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Products() {
  const headingRef = useRef(null);
  const productsRef = useRef(null);

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

    // Store refs in variables to use in cleanup
    const headingElement = headingRef.current;
    const productsElement = productsRef.current;

    if (headingElement) observer.observe(headingElement);
    if (productsElement) observer.observe(productsElement);

    return () => {
      if (headingElement) observer.unobserve(headingElement);
      if (productsElement) observer.unobserve(productsElement);
    };
  }, []);

  const products = [
    {
      name: 'Wandmodel Airco',
      description: 'Ideaal voor kleinere ruimtes zoals slaapkamers en woonkamers. Eenvoudig te installeren en energiezuinig. Zie bijvoorbeeld de Ururu Sarara van Daikin met een SCOP van 6,9.',
      image: '/units/wandmodel.png'
    },
    {
      name: 'Vloermodel Airco',
      description: 'Perfect voor ruimtes met weinig wandruimte. Zorgt voor een gelijkmatige luchtstroom en optimaal comfort vanwege de warme luchtstroom over de vloer.',
      image: '/units/vloermodel.png'
    },
    {
      name: 'Plafondmodel Airco',
      description: 'Geschikt voor grotere ruimtes zoals kantoren en winkels. Onopvallend geïntegreerd in het plafond.',
      image: '/units/plafondunit.png'
    },
    {
      name: 'Buitenunit Warmtepomp',
      description: 'Krachtige en efficiënte warmtepompen voor verwarming en koeling van uw woning of bedrijfspand. Zie bijvoorbeeld de Technea ACP312P met een SCOP van 6,02.',
      image: '/units/warmtepomp.webp'
    }
  ];

  return (
    <section id="products" className="section bg-white">
      <div className="container-narrow">
        <div ref={headingRef} className="text-center mb-12 md:mb-16 opacity-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Onze Producten</h2>
          <div className="divider mx-auto"></div>
          <p className="text-black max-w-2xl mx-auto">
            Wij werken met hoogwaardige airconditioning units en warmtepompen van topmerken voor optimale prestaties en betrouwbaarheid.
          </p>
        </div>

        <div 
          ref={productsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0"
        >
          {products.map((product, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                <p className="text-black">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 