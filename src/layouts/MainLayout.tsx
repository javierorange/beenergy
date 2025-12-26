import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ArrowRight, Phone, Mail, MapPin, BarChart3, ShieldCheck, Factory } from 'lucide-react';

/**
 * Main Layout Component containing Header and Footer
 */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Servizi' },
    { path: '/about', label: 'Chi Siamo' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8d9c4685-3c02-4de0-a3c4-61c027279f7c/1766658799496-6044fc4a/beenergy1.jpeg" 
              alt="BeEnergy Logo" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#3a568f] ${
                  location.pathname === link.path ? 'text-[#3a568f] font-bold' : 'text-gray-600'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link 
              to="/about#contact-form" 
              className="bg-[#FFEA00] text-[#3a568f] px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors"
            >
              Richiedi Consulenza
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3a568f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#3a568f] text-lg font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/about#contact-form" 
              className="bg-[#FFEA00] text-[#3a568f] px-5 py-3 text-center text-sm font-bold uppercase tracking-wider mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Richiedi Consulenza
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#3a568f] text-white pt-16 pb-8 border-t border-[#FFEA00]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <p className="text-gray-400 text-sm leading-relaxed">
                Consulenza energetica avanzata per aziende che guardano al futuro. Ottimizzazione, sostenibilità e risparmio.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#FFEA00] font-bold uppercase tracking-wider mb-6">Link Rapidi</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Servizi</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Chi Siamo</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFEA00] font-bold uppercase tracking-wider mb-6">Servizi</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Audit Energetici</li>
                <li>Gestione Utenze</li>
                <li>Monitoraggio Consumi</li>
                <li>Energie Rinnovabili</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFEA00] font-bold uppercase tracking-wider mb-6">Contatti</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFEA00] shrink-0" />
                  <span>Via dell'Energia 10, Milano, IT</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFEA00] shrink-0" />
                  <span>+39 02 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FFEA00] shrink-0" />
                  <span>info@beenergy.it</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} BeEnergy Consulting. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;