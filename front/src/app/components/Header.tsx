import { Button } from "./ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { DevisModal } from "./DevisModal";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDevisOpen, setIsDevisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b transition-all duration-300">
      <DevisModal 
        isOpen={isDevisOpen}
        onClose={() => setIsDevisOpen(false)}
        onSubscribe={() => {
          window.location.href = '/login';
        }}
      />

      {/* Logo + Connexion row — se cache au scroll */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-20 opacity-100 py-2'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Shield className="size-8 text-[#C9A227]" />
            <span className="text-2xl font-semibold text-gray-900">
              Smart-<span className="text-[#C9A227]">Economie</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setIsDevisOpen(true)}
            >
              Devis gratuit
            </Button>
            <Button
              className="bg-[#0a2342] hover:bg-[#1a3a6b] text-white"
              onClick={() => window.location.href = '/login'}
            >
              Connexion
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation row — toujours visible */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo compact visible seulement quand scrolled */}
          <div className={`flex items-center gap-2 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Shield className="size-5 text-[#C9A227]" />
            <span className="text-base font-semibold text-gray-900">
              Smart-<span className="text-[#C9A227]">Economie</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Onglets Profil */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => navigate('/')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  location.pathname === '/' 
                    ? 'bg-white text-[#228B22] shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Particuliers
              </button>
              <button
                onClick={() => navigate('/entreprise')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  location.pathname === '/entreprise' 
                    ? 'bg-white text-[#228B22] shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Entreprises
              </button>
            </div>
            
            <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Bouton connexion compact visible seulement quand scrolled */}
          <div className={`hidden md:flex items-center gap-4 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Button
              size="sm"
              className="bg-[#0a2342] hover:bg-[#1a3a6b] text-white"
              onClick={() => window.location.href = '/login'}
            >
              Mon espace
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {/* Onglets Profil Mobile */}
            <div className="flex flex-col gap-2 pb-2 border-b border-gray-200">
              <button
                onClick={() => {
                  navigate('/');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/' 
                    ? 'bg-[#228B22] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Particuliers
              </button>
              <button
                onClick={() => {
                  navigate('/entreprise');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/entreprise' 
                    ? 'bg-[#228B22] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Entreprises
              </button>
            </div>
            
            <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button 
                variant="ghost"
                onClick={() => {
                  setIsDevisOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Devis gratuit
              </Button>
              <Button
                className="bg-[#0a2342] hover:bg-[#1a3a6b] text-white"
                onClick={() => {
                  window.location.href = '/login';
                  setMobileMenuOpen(false);
                }}
              >
                Connexion
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
  