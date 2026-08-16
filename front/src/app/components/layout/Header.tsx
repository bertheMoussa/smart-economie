import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useState, useEffect, useRef } from 'react';

// Seuils avec hystérésis : on passe en compact au-delà de ENTER, et on ne
// revient en complet qu'en dessous de EXIT. L'écart (60px) est plus grand que
// la hauteur de la ligne repliée, donc le décalage de scroll provoqué par le
// changement de hauteur ne peut jamais refranchir le seuil → aucun clignotement.
const COMPACT_ENTER = 120;
const COMPACT_EXIT = 60;

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [isCompact, setIsCompact] = useState(false);
  const [showEmergencyMenu, setShowEmergencyMenu] = useState(false);
  // Miroir de l'état lu dans le handler pour éviter les closures périmées et
  // ne re-render que lorsqu'un vrai seuil est franchi.
  const isCompactRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const evaluate = () => {
      const y = window.scrollY;
      const current = isCompactRef.current;
      let next = current;

      if (!current && y > COMPACT_ENTER) next = true;
      else if (current && y < COMPACT_EXIT) next = false;

      if (next !== current) {
        isCompactRef.current = next;
        setIsCompact(next);
      }
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(evaluate);
    };

    // État initial (cas d'un rechargement déjà scrollé).
    evaluate();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showEmergencyMenu && !target.closest('.emergency-menu-container')) {
        setShowEmergencyMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showEmergencyMenu]);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À-propos', path: '/about' },
    { label: 'Souscription', path: '/subscription' },
    { label: 'Sinistres', path: '/claims' },
    { label: 'Contact', path: '/contact' },
    { label: 'Histoire', path: '/history' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getDashboardLink = () => {
    if (user?.type === 'particulier') {
      return '/dashboard/particulier';
    } else if (user?.type === 'entreprise') {
      return '/dashboard/entreprise';
    }
    return '/login';
  };

  return (
    <header className="bg-white shadow-sm relative z-50 w-full sticky top-0 transition-all duration-300">
      <div className="container mx-auto px-1 max-w-6xl">
        {/* Top Header: Logo & Actions — se cache au scroll */}
        <div
          className={`transition-all duration-300 ${
            isCompact ? 'max-h-0 opacity-0 py-0 mb-0 overflow-hidden' : 'max-h-32 opacity-100 py-2 mb-6'
          } ${showEmergencyMenu ? 'overflow-visible' : 'overflow-hidden'}`}
        >
          <div className="flex justify-between items-center">
            {/* Bouton Urgence à gauche */}
            <div className="w-1/3 flex flex-col items-start gap-3">
              <div className="relative emergency-menu-container">
                <button
                  onClick={() => setShowEmergencyMenu(!showEmergencyMenu)}
                  className="bg-[#F0B13B] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e6a534] transition shadow-lg flex items-center gap-2 animate-pulse"
                >
                  <i className="fa-solid fa-phone-volume"></i>
                  URGENCE
                </button>
                
                {/* Menu déroulant */}
                {showEmergencyMenu && (
                  <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-64 z-[9999]">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-bold text-gray-600 uppercase">Contactez-nous</p>
                    </div>
                    
                    <a
                      href="tel:+212600000000"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#228B22] flex items-center justify-center">
                        <i className="fa-solid fa-phone text-white"></i>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">Appeler</p>
                        <p className="text-xs text-gray-500">+212 6 00 00 00 00</p>
                      </div>
                    </a>
                    
                    <a
                      href="mailto:urgence@smart-economie.ma"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#0a2342] flex items-center justify-center">
                        <i className="fa-solid fa-envelope text-white"></i>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">Email</p>
                        <p className="text-xs text-gray-500">urgence@smart-economie.ma</p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>

          {/* Logo */}
          <Link to="/" className="w-1/3 flex flex-col items-center hover:opacity-80 transition">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-900 overflow-hidden mb-1">
              <span className="text-blue-900 text-3xl font-bold italic mr-1">S</span>
              <span className="text-[#228B22] text-xl font-bold absolute bottom-2 right-2">+</span>
              <i className="fa-solid fa-leaf text-[#228B22] absolute top-2 right-1 text-xs"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Smart-Économie</h1>
            <p className="text-[0.6rem] text-[#228B22] font-semibold tracking-widest uppercase">
              L'ASSURANCE ÉCONOMIQUE
            </p>
          </Link>

          {/* Lang & Login */}
          <div className="w-1/3 flex flex-col items-end gap-3">
            <div className="text-xs font-bold text-blue-900 tracking-wider">
              <span className="text-red-600">FR</span> | <span className="text-gray-500">EN</span> |{' '}
              <span className="text-gray-500">AR</span>
            </div>
            
            {/* Bouton Espace personnel / Connexion */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to={getDashboardLink()}
                  className="bg-[#228B22] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#1a6b1a] transition shadow-md"
                >
                  <i className="fa-solid fa-user mr-1"></i>
                  Mon Espace
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition"
                >
                  <i className="fa-solid fa-sign-out"></i>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-[#0a2342] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition shadow-md"
              >
                Espace personnel
              </Link>
            )}
          </div>
        </div>
        </div>

        {/* Onglets Particuliers / Entreprises */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full p-1.5">
            <button
              onClick={() => navigate('/')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                location.pathname === '/' 
                  ? 'bg-white text-[#228B22] shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="fa-solid fa-user mr-2"></i>
              Particuliers
            </button>
            <button
              onClick={() => navigate('/entreprise')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                location.pathname === '/entreprise' 
                  ? 'bg-white text-[#228B22] shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="fa-solid fa-building mr-2"></i>
              Entreprises
            </button>
          </div>
        </div>

        {/* Navigation — toujours visible */}
        <nav className="flex justify-center space-x-10 text-[15px] font-bold text-gray-700 py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`pb-1 transition ${
                isActive(item.path)
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
