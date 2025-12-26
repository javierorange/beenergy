import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

/**
 * About Page Component
 * Includes Company Mission and Contact Form
 */
export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <MainLayout>
      {/* About Header */}
      <section className="bg-[#3a568f] text-white py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-[#FFEA00] font-bold uppercase tracking-widest text-xs mb-4 block">Chi Siamo</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Partner strategici per la <span className="text-[#FFEA00]">transizione energetica</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              BeEnergy nasce con una missione chiara: rendere l'efficienza energetica accessibile, misurabile e vantaggiosa per ogni impresa. Uniamo competenza tecnica e visione strategica.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FFEA00] transform -rotate-2 opacity-20 rounded-lg"></div>
              <img 
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8d9c4685-3c02-4de0-a3c4-61c027279f7c/1766661293699-620aae61/shaking_hands.png" 
                alt="Business professionals shaking hands" 
                className="relative rounded-lg shadow-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#3a568f]">Il nostro approccio</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Non vendiamo semplici contratti, costruiamo strategie. Il mercato dell'energia è complesso e volatile: per questo le aziende hanno bisogno di una guida affidabile, non di un call center.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Il nostro team è composto da ingegneri energetici, analisti finanziari e consulenti legali. Questo mix di competenze ci permette di affrontare ogni sfida energetica a 360 gradi.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-[#FFEA00] pl-4">
                  <span className="block text-3xl font-bold text-[#3a568f] mb-1">500+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Clienti Aziendali</span>
                </div>
                <div className="border-l-4 border-[#3a568f] pl-4">
                  <span className="block text-3xl font-bold text-[#3a568f] mb-1">-25%</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">Costi Medi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="bg-[#f6f7f5] py-20 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            {/* Contact Info Side */}
            <div className="bg-[#3a568f] p-12 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Pattern overlay */}
               <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Send size={200} />
               </div>
               
               <div>
                 <h2 className="text-3xl font-bold mb-6">Parliamo del tuo progetto</h2>
                 <p className="text-gray-400 mb-12">
                   Compila il form per richiedere un'analisi preliminare gratuita. Ti risponderemo entro 24 ore lavorative.
                 </p>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <div className="bg-[#FFEA00] p-3 rounded-full text-[#3a568f]">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">Sede Operativa</h4>
                       <p className="text-gray-400">Via dell'Energia 10<br/>20100 Milano, IT</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="bg-[#FFEA00] p-3 rounded-full text-[#3a568f]">
                       <Mail size={20} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">Email</h4>
                       <p className="text-gray-400">info@beenergy.it</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="bg-[#FFEA00] p-3 rounded-full text-[#3a568f]">
                       <Phone size={20} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">Telefono</h4>
                       <p className="text-gray-400">+39 02 123 4567</p>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="mt-12 pt-8 border-t border-white/10">
                 <p className="text-sm text-gray-500">
                   Orari: Lun - Ven, 09:00 - 18:00
                 </p>
               </div>
            </div>
            
            {/* Form Side */}
            <div className="p-12 bg-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Nome *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#FFEA00] focus:ring-1 focus:ring-[#FFEA00] transition-all"
                      placeholder="Mario"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Cognome *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#FFEA00] focus:ring-1 focus:ring-[#FFEA00] transition-all"
                      placeholder="Rossi"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#FFEA00] focus:ring-1 focus:ring-[#FFEA00] transition-all"
                      placeholder="mario@azienda.it"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Telefono *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#FFEA00] focus:ring-1 focus:ring-[#FFEA00] transition-all"
                      placeholder="+39 333 1234567"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Messaggio</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[#FFEA00] focus:ring-1 focus:ring-[#FFEA00] transition-all resize-none"
                    placeholder="Descrivi la tua richiesta..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-[#3a568f] text-white font-bold uppercase tracking-widest py-5 hover:bg-gray-800 transition-colors shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Invia Richiesta <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Cliccando invia accetti la nostra politica sulla privacy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
