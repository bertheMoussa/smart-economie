import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { COLORS, COLOR_CLASSES } from '../constants/colors';

export default function DashboardParticulier() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    navigate('/login');
    return null;
  }

  const sidebarItems = [
    { label: 'Tableau de bord', icon: 'fa-chart-line', active: true },
    { label: 'Mes véhicules', icon: 'fa-car', badge: '2' },
    { label: 'Mes contrats', icon: 'fa-file-contract' },
    { label: 'Sinistres', icon: 'fa-car-burst' },
    { label: 'Paiements', icon: 'fa-credit-card' },
    { label: 'Documents', icon: 'fa-folder-open' },
    { label: 'Assistance 24/7', icon: 'fa-headset' },
    { label: 'Messages', icon: 'fa-envelope', badge: '3' },
    { label: 'Profil & paramètres', icon: 'fa-user-gear' },
  ];

  const quickActions = [
    { label: 'Déclarer\nun sinistre', icon: 'fa-car-burst', bgColor: 'bg-red-50', textColor: 'text-red-600' },
    { label: 'Télécharger\nattestation', icon: 'fa-file-pdf', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { label: 'Payer une\néchéance', icon: 'fa-money-bill', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { label: 'Ajouter un\nconducteur', icon: 'fa-user-plus', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
    { label: 'Modifier mes\ninformations', icon: 'fa-pen', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
    { label: 'Contacter\nl\'assistance', icon: 'fa-headset', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600' },
  ];

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: COLORS.background.light }}>
      {/* Sidebar */}
      <aside className="w-[220px] shadow-xl text-white" style={{ backgroundColor: COLORS.text.primary }}>
        <div className="px-6 py-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white">
              <i className={`fa-solid fa-shield-halved text-lg ${COLOR_CLASSES.primaryIcon}`}></i>
            </div>
            <div>
              <p className="text-xs font-bold leading-3">AssurAuto</p>
              <p className="text-xs text-white/70">Votre confiance, notre engagement</p>
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                  item.active
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-3">
                  <i className={`fa-solid ${item.icon} w-5 text-center`} />
                  <span className="font-medium">{item.label}</span>
                </span>
                {item.badge && (
                  <span className="min-w-[24px] flex items-center justify-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <div className="rounded-lg bg-white/10 p-4 text-center mb-4">
            <p className="text-sm text-white/90 font-semibold mb-2">Parrainez un proche</p>
            <p className="text-xs text-white/70 mb-3">et recevez jusqu'à 100€</p>
            <button className={`w-full rounded-lg px-3 py-2 text-xs font-bold transition ${COLOR_CLASSES.primaryButton}`}>
              Parrainer maintenant
            </button>
          </div>
          <button
            onClick={logout}
            className="w-full text-center text-sm text-white/70 hover:text-white transition py-2"
          >
            <i className="fa-solid fa-sign-out-alt mr-2"></i>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="px-8 py-5 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: COLORS.text.primary }}>Bonjour, {user.firstName}! 👋</h1>
              <p className="text-sm text-slate-600">Bienvenue dans votre espace client</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition">
                <i className="fa-solid fa-bell text-lg"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">{user.firstName} Benali</p>
                  <p className="text-xs text-slate-500">Client assuré</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white font-bold text-sm">
                  {user.firstName?.slice(0, 1) || 'U'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-8">
          <div className="grid gap-8">
            {/* Contrat Actif + Actions Rapides */}
            <div className="grid grid-cols-3 gap-8">
              {/* Votre Contrat Actif */}
              <div className="col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <p className="text-xs font-bold tracking-widest" style={{ color: COLORS.text.primary }}>VOTRE CONTRAT ACTIF</p>
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Peugeot 3008 GT</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
                        <i className="fa-solid fa-car"></i>
                        <span>AB-123-CD</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-6">Contrat n° ASS-2024-15678</p>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <i className="fa-solid fa-check text-green-600"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600">Statut</p>
                            <p className="text-sm font-bold text-green-600">Actif</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <i className="fa-solid fa-calendar text-blue-600"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600">Échéance prochaine</p>
                            <p className="text-sm font-bold text-slate-900">15 juin 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                            <i className="fa-solid fa-shield text-orange-600"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600">Formule</p>
                            <p className="text-sm font-bold text-slate-900">Tous Risques</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-32">
                        <svg viewBox="0 0 200 120" className="w-full h-full">
                          <rect x="20" y="40" width="160" height="70" rx="8" fill="#3B82F6" opacity="0.1" stroke="#3B82F6" strokeWidth="2"/>
                          <circle cx="50" cy="100" r="12" fill="#3B82F6"/>
                          <circle cx="150" cy="100" r="12" fill="#3B82F6"/>
                          <rect x="35" y="35" width="130" height="35" rx="4" fill="#3B82F6" opacity="0.2"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Rapides */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                <p className="text-xs font-bold tracking-widest mb-4" style={{ color: COLORS.text.primary }}>ACTIONS RAPIDES</p>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      className={`rounded-xl p-3 text-center transition hover:shadow-md ${action.bgColor} ${action.textColor} font-semibold text-xs leading-tight`}
                    >
                      <i className={`fa-solid ${action.icon} text-2xl mb-2 block`}></i>
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Résumé de Contrat */}
            <div>
              <p className="text-xs font-bold tracking-widest mb-4" style={{ color: COLORS.text.primary }}>RÉSUMÉ DE VOTRE CONTRAT</p>
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-slate-600 font-semibold">Cotisation mensuelle</p>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <i className="fa-solid fa-euro-sign"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-2">78,50 €</p>
                  <p className="text-xs text-slate-600">Prochaine échéance le 15/06/2025</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-slate-600 font-semibold">Bonus - Malus</p>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">0,80</p>
                  <p className="text-xs text-slate-600">Bonus 20%</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-slate-600 font-semibold">Sinistres</p>
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <i className="fa-solid fa-car-burst"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-2">1</p>
                  <p className="text-xs text-slate-600">Sur les 36 derniers mois</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-slate-600 font-semibold">Assistance</p>
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <i className="fa-solid fa-headset"></i>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-2">Incluse</p>
                  <p className="text-xs text-slate-600">24h/24 et 7j/7</p>
                </div>
              </div>
            </div>

            {/* Mes Véhicules et Mes Sinistres */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold tracking-widest" style={{ color: COLORS.text.primary }}>MES VÉHICULES</p>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">2 véhicules assurés</h3>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Voir tous</button>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border border-slate-200 p-4 flex items-center gap-4">
                    <div className="w-16 h-12 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-car text-white text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">Principal</span>
                      <p className="font-bold text-slate-900">Peugeot 3008 GT</p>
                      <p className="text-xs text-slate-600">AB-123-CD</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Assuré</span>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-4 flex items-center gap-4">
                    <div className="w-16 h-12 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-car text-white text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-2">Secondaire</span>
                      <p className="font-bold text-slate-900">Renault Clio V</p>
                      <p className="text-xs text-slate-600">EF-456-GH</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Assuré</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold tracking-widest" style={{ color: COLORS.text.primary }}>MES SINISTRES</p>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">Gestion des sinistres</h3>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Voir tout</button>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border border-slate-200 p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-check text-green-600"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900">12 mars 2024</p>
                      <p className="text-sm text-slate-600">Accroachage parking</p>
                      <p className="text-xs text-slate-500">Dossier n° SIN-2024-00125</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded whitespace-nowrap">Clôturé</span>
                  </div>
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fa-solid fa-hourglass-half text-blue-600"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-900">5 mai 2024</p>
                      <p className="text-sm text-slate-600">Couvert le 02 mai 2024</p>
                      <p className="text-xs text-slate-500">Accident sur autoroute</p>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded whitespace-nowrap">En cours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Promo App Mobile */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 grid grid-cols-2 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">L'application AssurAuto</h3>
                  <p className="text-white/90 mb-4">Gérez votre assurance partout, tout le temps !</p>
                  <ul className="space-y-2 text-white/90 text-sm mb-6">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-green-400"></i>
                      Déclaration de sinistre
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-green-400"></i>
                      Suivi en temps réel
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-green-400"></i>
                      Documents à portée de main
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-100 transition">
                      <i className="fa-brands fa-apple"></i>
                      App Store
                    </button>
                    <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-100 transition">
                      <i className="fa-brands fa-google-play"></i>
                      Google Play
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4">
                  <div className="w-32 h-40 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="fa-solid fa-mobile text-white text-6xl opacity-50"></i>
                  </div>
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2">
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-500 rounded flex items-center justify-center text-slate-600 text-xs">
                      QR Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
