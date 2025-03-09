'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Services() {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add('animate-fade-in');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const services = [
    {
      title: 'Airco Installatie',
      description: 'Professionele installatie van airconditioningsystemen voor woningen en bedrijven.',
      icon: '/icons/ac-install.svg',
    },
    {
      title: 'Warmtepomp Installatie',
      description: 'Vakkundige installatie van warmtepompen voor duurzame verwarming en koeling.',
      icon: '/icons/heat-pump.svg',
    },
    {
      title: 'Airco Service',
      description: 'Regelmatig onderhoud van uw airconditioningsysteem voor optimale prestaties.',
      icon: '/icons/ac-service.svg',
    },
    {
      title: 'Warmtepomp Service',
      description: 'Professioneel onderhoud van uw warmtepomp voor optimale werking en energiebesparing.',
      icon: '/icons/heat-service.svg',
    },
    {
      title: 'Airco Reparatie',
      description: 'Snelle en effectieve reparatie van airconditioningsystemen bij storingen.',
      icon: '/icons/ac-repair.svg',
    },
    {
      title: 'Warmtepomp Reparatie',
      description: 'Deskundige reparatie van alle soorten warmtepompen bij storingen.',
      icon: '/icons/heat-repair.svg',
    },
  ];

  return (
    <section id="services" className="section bg-gray-100">
      <div className="container-narrow">
        <div ref={headingRef} className="text-center mb-12 md:mb-16 opacity-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black">Onze Diensten</h2>
          <div className="divider mx-auto"></div>
          <p className="text-black max-w-2xl mx-auto">
            Wij bieden een compleet pakket aan diensten voor warmtepompen en airconditioning. 
            Van installatie tot onderhoud en reparatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card p-4 md:p-6 opacity-0"
            >
              <div className="flex items-start mb-3 md:mb-4">
                <div className="bg-primary/10 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-black">{service.title}</h3>
              </div>
              <p className="text-black text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 