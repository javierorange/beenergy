import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { ArrowRight, Zap, BarChart3, ShieldCheck, Eye, FileText, Settings, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home Page Component
 * Features Hero section with mockup, Value props, and Intro to services
 */
export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#3a568f] overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #FFEA00 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}></div>
        
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-[#FFEA00]/10 border border-[#FFEA00]/20 rounded-full px-4 py-1.5">
                <span className="text-[#FFEA00] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFEA00] animate-pulse"></span>
                  Energy Consulting Partner
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                L'energia che muove <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFEA00] to-yellow-200">
                  il tuo business.
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Consulenza energetica su misura per aziende e privati. Ottimizziamo i consumi, riduciamo i costi e garantiamo la conformità normativa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/about#contact-form" 
                  className="bg-[#FFEA00] text-[#3a568f] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors text-center"
                >
                  Richiedi Consulenza
                </Link>
                <Link 
                  to="/services" 
                  className="border border-white/20 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-2 group"
                >
                  Scopri i Servizi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#FFEA00] opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#FFEA00] opacity-50"></div>
              
              <div className="relative bg-[#2a2d33] p-2 rounded-lg shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[#FFEA00]/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img 
                  src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8d9c4685-3c02-4de0-a3c4-61c027279f7c/1766660181821-32ecb29c/beenergy-hero.png" 
                  alt="BeEnergy Dashboard Mockup" 
                  className="w-full h-auto rounded shadow-inner transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Stats Section */}
      <section className="bg-[#f6f7f5] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border-l-4 border-[#FFEA00] shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#3a568f] w-12 h-12 flex items-center justify-center mb-6">
                <Eye className="text-[#FFEA00] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#3a568f] mb-2">Esperienza e visione</h3>
              <p className="text-gray-600 text-sm">
                Conosciamo il settore utility e ne monitoriamo costantemente l’evoluzione, anticipando i cambiamenti e guidando le decisioni.
              </p>
            </div>
            
            <div className="bg-white p-8 border-l-4 border-[#3a568f] shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#3a568f] w-12 h-12 flex items-center justify-center mb-6">
                <FileText className="text-[#FFEA00] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#3a568f] mb-2">Trasparenza</h3>
              <p className="text-gray-600 text-sm">
                Report chiari e dati verificabili. Crediamo che la fiducia nasca dalla chiarezza.
              </p>
            </div>
            
            <div className="bg-white p-8 border-l-4 border-[#FFEA00] shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#3a568f] w-12 h-12 flex items-center justify-center mb-6">
                <Settings className="text-[#FFEA00] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#3a568f] mb-2">Soluzioni su misura</h3>
              <p className="text-gray-600 text-sm">
                Ogni azienda è diversa; costruiamo soluzioni personalizzate, adatte sia a grandi realtà che alle PMI.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#3a568f] shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#3a568f] w-12 h-12 flex items-center justify-center mb-6">
                <RefreshCw className="text-[#FFEA00] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#3a568f] mb-2">Aggiornamento continuo</h3>
              <p className="text-gray-600 text-sm">
                Il mercato cambia. Noi anche. Investiamo costantemente in analisi e formazione per offrire soluzioni sempre attuali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#3a568f] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFEA00] opacity-[0.03] skew-x-12 transform origin-top"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluzioni Energetiche</h2>
              <p className="text-gray-400 max-w-xl">
                Dalla gestione utenze all'efficientamento completo. Scopri come possiamo trasformare la tua gestione energetica.
              </p>
            </div>
            <Link 
              to="/services" 
              className="text-[#FFEA00] font-bold uppercase tracking-wider flex items-center gap-2 hover:text-white transition-colors"
            >
              Tutti i servizi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Service Cards Preview - Styling matches Services Page but simplified */}
             {['Gestione Utenze', 'Monitoraggio Consumi', 'Efficientamento'].map((service, index) => (
               <Link to="/services" key={index} className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all hover:border-[#FFEA00]/50 block">
                 <div className="text-[#FFEA00] text-4xl font-bold mb-4 opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                 <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFEA00] transition-colors">{service}</h3>
                 <p className="text-gray-400 text-sm mb-6">Soluzioni avanzate per la tua azienda con reportistica dedicata.</p>
                 <span className="text-xs text-white uppercase tracking-widest border-b border-[#FFEA00] pb-1">Scopri di più</span>
               </Link>
             ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
