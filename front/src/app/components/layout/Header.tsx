import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

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
    <header className="bg-white py-2 shadow-sm relative z-10 w-full sticky top-0">
      <div className="container mx-auto px-1 max-w-6xl">
        {/* Top Header: Logo & Actions */}
        <div className="flex justify-between items-center mb-6">
          {/* Spacer for centering logo */}
          <div className="w-1/3"></div>

          {/* Logo */}
          <Link to="/" className="w-1/3 flex flex-col items-center hover:opacity-80 transition">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-900 overflow-hidden mb-1">
              <span className="text-blue-900 text-3xl font-bold italic mr-1">S</span>
              <span className="text-green-500 text-xl font-bold absolute bottom-2 right-2">+</span>
              <i className="fa-solid fa-leaf text-green-500 absolute top-2 right-1 text-xs"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Smart-Économie</h1>
            <p className="text-[0.6rem] text-green-600 font-semibold tracking-widest uppercase">
              L'ASSURANCE ÉCONOMIQUE
            </p>
          </Link>

          {/* Lang & Login */}
          <div className="w-1/3 flex flex-col items-end gap-3">
            <div className="text-xs font-bold text-blue-900 tracking-wider">
              <span className="text-red-600">FR</span> | <span className="text-gray-500">EN</span> |{' '}
              <span className="text-gray-500">AR</span>
            </div>
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to={getDashboardLink()}
                  className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition shadow-md"
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

        {/* Navigation */}
        <nav className="flex justify-center space-x-10 text-[15px] font-bold text-gray-700">
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
