import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Handshake, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AlgemeneVoorwaardenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Algemene Voorwaarden
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Deze voorwaarden zijn van toepassing op alle services en projecten van Apexers.
            </p>
            
            <div className="bg-white/10 px-4 py-2 rounded-full inline-block">
              <span className="text-white font-medium">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Definities */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">1. Definities</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Apexers:</strong> De onderneming Apexers, gevestigd te Schipholweg 103, 2316 XC Leiden</li>
                <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die een opdracht verstrekt aan Apexers</li>
                <li><strong>Overeenkomst:</strong> Elke afspraak tussen Apexers en Opdrachtgever</li>
                <li><strong>Services:</strong> Alle diensten die Apexers levert, inclusief maar niet beperkt tot software development, AI solutions, educational technology en industrial solutions</li>
              </ul>
            </div>

            {/* Toepasselijkheid */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">2. Toepasselijkheid</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Apexers en Opdrachtgever.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Afwijkingen van deze voorwaarden zijn alleen geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.
              </p>
            </div>

            {/* Aanbiedingen en Offertes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Aanbiedingen en Offertes</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Alle aanbiedingen en offertes zijn vrijblijvend, tenzij anders vermeld</li>
                <li>Offertes zijn geldig voor 30 dagen, tenzij anders aangegeven</li>
                <li>Prijzen zijn exclusief BTW en andere heffingen, tenzij anders vermeld</li>
                <li>Apexers behoudt zich het recht voor om offertes in te trekken</li>
              </ul>
            </div>

            {/* Totstandkoming Overeenkomst */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">4. Totstandkoming Overeenkomst</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Een overeenkomst komt tot stand door:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Schriftelijke acceptatie van een offerte door Opdrachtgever</li>
                <li>Ondertekening van een project agreement</li>
                <li>Aanvang van werkzaamheden na mondelinge opdracht (bevestigd per email)</li>
              </ul>
            </div>

            {/* Uitvoering */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Uitvoering van de Opdracht</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Algemeen</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Apexers voert de opdracht uit naar beste kunnen en volgens de state of the art</li>
                <li>Apexers bepaalt de wijze waarop de opdracht wordt uitgevoerd</li>
                <li>Apexers heeft het recht om derden in te schakelen</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Medewerking Opdrachtgever</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Opdrachtgever verschaft alle benodigde informatie en medewerking</li>
                <li>Opdrachtgever zorgt voor tijdige feedback en besluitvorming</li>
                <li>Vertraging door gebrek aan medewerking is voor rekening van Opdrachtgever</li>
              </ul>
            </div>

            {/* Levertijden */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Levertijden</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Opgegeven levertijden zijn indicatief en niet bindend</li>
                <li>Overschrijding van levertijden geeft geen recht op schadevergoeding</li>
                <li>Apexers informeert Opdrachtgever bij voorzienbare vertragingen</li>
              </ul>
            </div>

            {/* Prijzen en Betaling */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Prijzen en Betaling</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1 Prijzen</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Alle prijzen zijn exclusief BTW en andere heffingen</li>
                <li>Bij meerwerk gelden de gebruikelijke tarieven van Apexers</li>
                <li>Prijswijzigingen zijn mogelijk bij wijziging van scope</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">7.2 Betaling</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Betaling binnen 30 dagen na factuurdatum</li>
                <li>Bij niet-tijdige betaling is rente verschuldigd</li>
                <li>Apexers kan werkzaamheden opschorten bij wanbetaling</li>
              </ul>
            </div>

            {/* Intellectueel Eigendom */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Intellectueel Eigendom</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Alle intellectuele eigendomsrechten berusten bij Apexers, tenzij anders overeengekomen</li>
                <li>Opdrachtgever krijgt een gebruiksrecht voor het overeengekomen doel</li>
                <li>Apexers mag ontwikkelde kennis en ervaring voor andere projecten gebruiken</li>
                <li>Opdrachtgever garandeert dat verstrekte materialen geen rechten van derden schenden</li>
              </ul>
            </div>

            {/* Aansprakelijkheid */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">9. Aansprakelijkheid</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.1 Beperking</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht</li>
                <li>Geen aansprakelijkheid voor indirecte schade of gevolgschade</li>
                <li>Geen aansprakelijkheid voor schade door derden of force majeure</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">9.2 Uitsluiting</h3>
              <p className="text-gray-600 leading-relaxed">
                Aansprakelijkheid is uitgesloten voor schade ontstaan door onjuiste of onvolledige informatie van Opdrachtgever.
              </p>
            </div>

            {/* Geheimhouding */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Geheimhouding</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die in het kader van de opdracht wordt verstrekt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Deze verplichting geldt ook na beëindiging van de overeenkomst.
              </p>
            </div>

            {/* Beëindiging */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Beëindiging</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Overeenkomsten kunnen door beide partijen worden beëindigd met inachtneming van een opzegtermijn van 30 dagen</li>
                <li>Bij wanprestatie kan de overeenkomst onmiddellijk worden beëindigd</li>
                <li>Reeds verrichte werkzaamheden worden naar rato gefactureerd</li>
              </ul>
            </div>

            {/* Toepasselijk Recht */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Toepasselijk Recht en Geschillen</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Op alle overeenkomsten is Nederlands recht van toepassing</li>
                <li>Geschillen worden voorgelegd aan de bevoegde rechter in Den Haag</li>
                <li>Partijen zullen eerst proberen geschillen in onderling overleg op te lossen</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor vragen over deze algemene voorwaarden kun je contact met ons opnemen:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@apexers.nl</p>
                <p className="text-gray-700 mb-2"><strong>Telefoon:</strong> +31 (0) 172 748 618</p>
                <p className="text-gray-700"><strong>Adres:</strong> Schipholweg 103, 2316 XC Leiden</p>
                <p className="text-gray-700"><strong>KvK:</strong> [KvK nummer]</p>
                <p className="text-gray-700"><strong>BTW:</strong> [BTW nummer]</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlgemeneVoorwaardenPage;