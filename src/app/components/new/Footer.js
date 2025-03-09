'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 md:pt-12 pb-6">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/favicon.svg" 
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
              <li>
                <Link href="#services" className="text-black hover:text-primary transition-colors text-sm md:text-base">
                  Airco Service
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-black hover:text-primary transition-colors text-sm md:text-base">
                  Warmtepomp Service
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
            <button 
              onClick={() => setShowTermsModal(true)} 
              className="text-black hover:text-primary text-xs md:text-sm transition-colors"
            >
              Algemene voorwaarden
            </button>
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

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-black">Algemene Voorwaarden</h2>
                <button 
                  onClick={() => setShowTermsModal(false)}
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
                <h3 className="text-lg font-semibold mt-4">1. Algemeen</h3>
                <p>
                  Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, werkzaamheden, offertes en overeenkomsten tussen Donato Lunesu en opdrachtgevers, respectievelijk hun rechtsopvolgers.
                </p>
                <h3 className="text-lg font-semibold mt-4">2. Offertes en aanbiedingen</h3>
                <p>
                  Alle offertes en aanbiedingen van Donato Lunesu zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Een offerte of aanbieding vervalt indien het product waarop de offerte of de aanbieding betrekking heeft in de tussentijd niet meer beschikbaar is.
                </p>
                <h3 className="text-lg font-semibold mt-4">3. Uitvoering van de overeenkomst</h3>
                <p>
                  Donato Lunesu zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. Alle werkzaamheden worden uitgevoerd op basis van een inspanningsverbintenis.
                </p>
                <h3 className="text-lg font-semibold mt-4">4. Betaling</h3>
                <p>
                  Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door Donato Lunesu aan te geven wijze in de valuta waarin is gefactureerd, tenzij schriftelijk anders door Donato Lunesu aangegeven.
                </p>
                <h3 className="text-lg font-semibold mt-4">5. Garantie</h3>
                <p>
                  Donato Lunesu staat in voor de deugdelijkheid van de door hem geleverde diensten en producten conform de daaraan gestelde eisen in de overeenkomst. Voor alle producten geldt de fabrieksgarantie zoals verleend door de producent van het product.
                </p>
                <h3 className="text-lg font-semibold mt-4">6. Aansprakelijkheid</h3>
                <p>
                  De aansprakelijkheid van Donato Lunesu is beperkt tot het bedrag dat in het desbetreffende geval onder de aansprakelijkheidsverzekering wordt uitbetaald, vermeerderd met het bedrag van het eigen risico.
                </p>
                <h3 className="text-lg font-semibold mt-4">7. Overmacht</h3>
                <p>
                  Donato Lunesu is niet gehouden tot het nakomen van enige verplichting jegens de opdrachtgever indien hij daartoe gehinderd wordt als gevolg van een omstandigheid die niet is te wijten aan schuld.
                </p>
                <h3 className="text-lg font-semibold mt-4">8. Toepasselijk recht</h3>
                <p>
                  Op alle rechtsbetrekkingen waarbij Donato Lunesu partij is, is uitsluitend het Nederlands recht van toepassing.
                </p>
                <h3 className="text-lg font-semibold mt-4">9. Wijziging voorwaarden</h3>
                <p>
                  Donato Lunesu is bevoegd wijzigingen in deze voorwaarden aan te brengen. De wijzigingen treden in werking op het aangekondigde tijdstip.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
} 