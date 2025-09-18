import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyBeleidPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug naar Home
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Privacy Beleid
              </h1>
            </div>
            
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Jouw privacy is belangrijk voor ons. Dit beleid legt uit hoe wij omgaan met jouw persoonlijke data.
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
            
            {/* Inleiding */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">1. Inleiding</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Apexers ("wij", "ons", "onze") respecteert jouw privacy en is committed aan het beschermen van jouw persoonlijke data. 
                Dit privacy beleid informeert je over hoe wij jouw persoonlijke data verzamelen, gebruiken en beschermen wanneer je 
                onze website bezoekt of gebruik maakt van onze services.
              </p>
            </div>

            {/* Data Verzameling */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">2. Welke Data Verzamelen Wij</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Persoonlijke Informatie</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij kunnen de volgende persoonlijke informatie verzamelen:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Naam en contactgegevens (email, telefoon)</li>
                <li>Bedrijfsinformatie</li>
                <li>Project requirements en communicatie</li>
                <li>Feedback en reviews</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Technische Data</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP-adres en browser informatie</li>
                <li>Website usage analytics</li>
                <li>Cookies en tracking data</li>
                <li>Device en operating system informatie</li>
              </ul>
            </div>

            {/* Gebruik van Data */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">3. Hoe Gebruiken Wij Jouw Data</h2>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij gebruiken jouw persoonlijke data voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Het leveren van onze development services</li>
                <li>Communicatie over projecten en updates</li>
                <li>Verbetering van onze website en services</li>
                <li>Marketing en business development (met jouw toestemming)</li>
                <li>Compliance met wettelijke verplichtingen</li>
              </ul>
            </div>

            {/* Data Delen */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Delen</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wij delen jouw persoonlijke data niet met derden, behalve:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Met jouw expliciete toestemming</li>
                <li>Voor het leveren van gevraagde services</li>
                <li>Wanneer wettelijk verplicht</li>
                <li>Met trusted service providers (onder strikte confidentialiteit)</li>
              </ul>
            </div>

            {/* Data Beveiliging */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Beveiliging</h2>
              <p className="text-gray-600 leading-relaxed">
                Wij implementeren appropriate technische en organisatorische maatregelen om jouw persoonlijke data te beschermen tegen 
                unauthorized access, alteration, disclosure of destruction. Dit omvat encryption, secure servers, en regular security audits.
              </p>
            </div>

            {/* Jouw Rechten */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Jouw Rechten</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Onder de AVG heb je de volgende rechten:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Recht op toegang tot jouw persoonlijke data</li>
                <li>Recht op rectificatie van incorrecte data</li>
                <li>Recht op verwijdering ("recht om vergeten te worden")</li>
                <li>Recht op beperking van verwerking</li>
                <li>Recht op data portabiliteit</li>
                <li>Recht om bezwaar te maken tegen verwerking</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Onze website gebruikt cookies om de user experience te verbeteren en analytics te verzamelen. 
                Je kunt cookies uitschakelen in je browser settings, maar dit kan de functionaliteit van de website beïnvloeden.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor vragen over dit privacy beleid of jouw persoonlijke data, neem contact met ons op:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@apexers.nl</p>
                <p className="text-gray-700 mb-2"><strong>Telefoon:</strong> +31 (0) 172 748 618</p>
                <p className="text-gray-700"><strong>Adres:</strong> Schipholweg 103, 2316 XC Leiden</p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Updates van dit Beleid</h2>
              <p className="text-gray-600 leading-relaxed">
                Wij kunnen dit privacy beleid van tijd tot tijd updaten. Wijzigingen worden gepubliceerd op deze pagina 
                met een nieuwe "laatst bijgewerkt" datum. Wij adviseren om dit beleid regelmatig te reviewen.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyBeleidPage;