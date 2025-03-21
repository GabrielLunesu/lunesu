'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 md:pt-12 pb-6">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="Donato Lunesu Logo" 
                width={36} 
                height={36} 
                className="mr-3"
              />
              <span className="font-bold text-lg md:text-xl text-black">Donato Lunesu</span>
            </div>
            <p className="text-black text-sm md:text-base mb-4">
              Uw erkende installateur voor warmtepompen en airconditioning in Parkstad. Met meer dan 30 jaar ervaring.
            </p>
            <div className="text-black text-sm md:text-base mb-4">
              <p>DAA Lunesu</p>
              <p>IBAN: NL29 INGB 0650962230</p>
              <p>BTW ID: NL001816013B68</p>
              <p>KVK: 14090765</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-black">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-black hover:text-primary transition-colors text-sm md:text-base">
                  Airco Installatie
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-black hover:text-primary transition-colors text-sm md:text-base">
                  Warmtepomp Installatie
                </Link>
              </li>
             
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-black">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <Link href="tel:+31618162515" className="text-black hover:text-primary transition-colors text-sm md:text-base">
                  06 18 16 25 15
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <Link href="mailto:contact@lunesu.nl" className="text-black hover:text-primary transition-colors text-sm md:text-base">
                  contact@lunesu.nl
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-black text-sm md:text-base">Grasbroekerweg 141, Heerlen</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Donato Lunesu. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <button 
              onClick={() => setShowPrivacyModal(true)} 
              className="text-black hover:text-primary text-xs md:text-sm transition-colors"
            >
              Privacybeleid
            </button>
            <a 
              href="/algemene-voorwaarden.pdf" 
              download="Algemene Voorwaarden Donato Lunesu Warmtepomptechniek.pdf"
              className="text-black hover:text-primary text-xs md:text-sm transition-colors cursor-pointer"
            >
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-black">Privacybeleid</h2>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="text-black text-sm md:text-base space-y-4">
                <p>
                  <strong>Laatst bijgewerkt: {currentYear}</strong>
                </p>
                <p>
                  Donato Lunesu respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.
                </p>
                <h3 className="text-lg font-semibold mt-4">Verzameling van persoonsgegevens</h3>
                <p>
                  Wanneer u contact met ons opneemt via het contactformulier, vragen wij u om persoonsgegevens te verstrekken. Deze gegevens worden gebruikt om aan uw verzoek te kunnen voldoen. De gegevens worden opgeslagen op beveiligde servers van Donato Lunesu of die van een derde partij.
                </p>
                <h3 className="text-lg font-semibold mt-4">Gebruik van persoonsgegevens</h3>
                <p>
                  Wij gebruiken uw persoonsgegevens voor:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Het afhandelen van uw aanvraag of opdracht</li>
                  <li>Het beantwoorden van uw vragen</li>
                  <li>Het verbeteren van onze dienstverlening</li>
                </ul>
                <h3 className="text-lg font-semibold mt-4">Bewaartermijn</h3>
                <p>
                  Wij bewaren uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld.
                </p>
                <h3 className="text-lg font-semibold mt-4">Delen met derden</h3>
                <p>
                  Donato Lunesu verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
                </p>
                <h3 className="text-lg font-semibold mt-4">Cookies</h3>
                <p>
                  Onze website maakt gebruik van &quot;cookies&quot; om het bezoek aan de website te analyseren en het gebruiksgemak te verbeteren.
                </p>
                <h3 className="text-lg font-semibold mt-4">Rechten</h3>
                <p>
                  U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. U kunt een verzoek tot inzage, correctie of verwijdering sturen naar contact@lunesu.nl.
                </p>
                <h3 className="text-lg font-semibold mt-4">Wijzigingen</h3>
                <p>
                  Deze privacyverklaring kan worden gewijzigd. Eventuele wijzigingen worden op deze pagina gepubliceerd.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}