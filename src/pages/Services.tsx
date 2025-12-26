import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { ArrowRight, Settings, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Services Page Component
 * Displays the 3 main services with industrial styling
 */
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Gestione utenze aziendali per attività e imprese",
      description: "Ottimizzazione completa dei contratti di fornitura. Analizziamo le tue fatture per identificare costi occulti e negoziamo le migliori tariffe sul mercato per la tua specifica tipologia di consumo.",
      icon: <Settings className="w-8 h-8" />,
      features: ["Analisi delle fatture", "Benchmarking tariffe", "Gestione fornitori", "Rinegoziazione contratti"]
    },
    {
      id: 2,
      title: "Monitoraggio consumi energetici aziendali",
      description: "Sistemi avanzati di telemetria e reportistica per avere il controllo totale sui tuoi consumi in tempo reale. Trasformiamo i dati grezzi in informazioni strategiche per il tuo business.",
      icon: <Activity className="w-8 h-8" />,
      features: ["Installazione sensori", "Dashboard in tempo reale", "Alert anomalie", "Reportistica mensile"]
    },
    {
      id: 3,
      title: "Efficientamento energetico e conformità normativa",
      description: "Interventi strutturali e tecnologici per ridurre il fabbisogno energetico. Ti guidiamo attraverso le normative vigenti e ti aiutiamo ad accedere a incentivi e detrazioni fiscali.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      features: ["Diagnosi energetica", "Piano di efficientamento", "Certificazioni ISO", "Accesso incentivi"]
    }
  ];

  return (
    <MainLayout>
      {/* Page Header */}
      <section className="bg-[#3a568f] text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #FFEA00 0, #FFEA00 1px, transparent 0, transparent 50%)', 
          backgroundSize: '20px 20px' 
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Le Nostre Soluzioni Energetiche</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Approccio tecnico, risultati misurabili. Ecco come portiamo valore alla tua azienda.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#f6f7f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white group hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
                  {/* Number/Icon Column */}
                  <div className="lg:col-span-3 bg-[#3a568f] text-white p-8 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      {service.icon}
                    </div>
                    <div className="text-[#FFEA00] text-6xl font-bold opacity-50 font-mono">0{service.id}</div>
                    <div className="mt-4 w-12 h-1 bg-[#FFEA00]"></div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="lg:col-span-9 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#3a568f] mb-6 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#FFEA00]"></div>
                          <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#FFEA00] py-16 text-[#3a568f]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a ottimizzare i tuoi consumi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Prenota una consulenza gratuita. Analizzeremo la tua situazione attuale senza impegno.
          </p>
          <Link 
            to="/about#contact-form" 
            className="inline-block bg-[#3a568f] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg"
          >
            Parla con un esperto
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
