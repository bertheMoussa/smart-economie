import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

type Section =
  | 'dashboard' | 'flotte' | 'contrats' | 'sinistres'
  | 'conducteurs' | 'paiements' | 'documents' | 'rapports'
  | 'assistance' | 'parametres';

type DrawerState = { type: string; data?: Record<string, unknown> } | null;

/* ── Drawer (panneau latéral droit) ─────────────────────────────── */
function Drawer({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 ml-auto w-[520px] h-full bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
          <h2 className="text-lg font-extrabold text-[#0a2342]">{title}</h2>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 transition">
            <i className="fa-solid fa-xmark text-gray-400 text-lg"></i>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}

/* ── Champs de formulaire réutilisables ─────────────────────────── */
function FInput({ label, placeholder, defaultValue, icon, type = 'text' }: { label: string; placeholder?: string; defaultValue?: string; icon?: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-1.5">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"><i className={`fa-solid ${icon} text-gray-300 text-sm`}></i></span>}
        <input type={type} defaultValue={defaultValue} placeholder={placeholder}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 outline-none focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 transition`} />
      </div>
    </div>
  );
}
function FSelect({ label, options, defaultValue }: { label: string; options: string[]; defaultValue?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-1.5">{label}</label>
      <select defaultValue={defaultValue} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 outline-none focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 appearance-none transition">
        <option value="">Sélectionnez…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function DashboardEntreprise() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [active, setActive] = useState<Section>('dashboard');
  const [drawer, setDrawer] = useState<DrawerState>(null);

  if (!user) { navigate('/login'); return null; }

  const navItems: { label: string; icon: string; section: Section; badge?: string }[] = [
    { label: 'Tableau de bord',  icon: 'fa-chart-pie',    section: 'dashboard'   },
    { label: 'Ma flotte',        icon: 'fa-truck',         section: 'flotte',    badge: '8'  },
    { label: 'Mes contrats',     icon: 'fa-file-contract', section: 'contrats'   },
    { label: 'Sinistres',        icon: 'fa-car-burst',     section: 'sinistres', badge: '2'  },
    { label: 'Conducteurs',      icon: 'fa-id-card',       section: 'conducteurs'},
    { label: 'Paiements',        icon: 'fa-credit-card',   section: 'paiements'  },
    { label: 'Messages',         icon: 'fa-envelope',      section: 'documents', badge: '2'  },
    { label: 'Documents',        icon: 'fa-folder-open',   section: 'documents'  },
    { label: 'Rapports',         icon: 'fa-chart-bar',     section: 'rapports'   },
    { label: 'Assistance 24/7',  icon: 'fa-headset',       section: 'assistance' },
    { label: 'Paramètres',       icon: 'fa-building',      section: 'parametres' },
  ];

  const companyInitial = (user.companyName?.slice(0, 1) || user.firstName?.slice(0, 1) || 'E').toUpperCase();
  const currentSection = navItems.find((n) => n.section === active);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = (section: Section) => { setActive(section); setSidebarOpen(false); };

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      {drawer && <DrawerContent type={drawer.type} data={drawer.data} onClose={() => setDrawer(null)} navigate={navigate} />}

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside className={`fixed lg:relative inset-y-0 left-0 z-40 lg:z-auto w-64 shrink-0 bg-[#0a2342] flex flex-col min-h-screen transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="px-6 py-7 border-b border-white/10 flex items-center justify-between">
          <Link to="/entreprise" className="flex items-center gap-2.5">
            <Shield className="size-7 text-[#C9A227]" />
            <span className="text-white font-extrabold text-base tracking-tight">Smart-<span className="text-[#C9A227]">Economie</span></span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white"><i className="fa-solid fa-xmark text-lg"></i></button>
        </div>
        <div className="px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-xl bg-[#228B22] flex items-center justify-center text-white font-extrabold text-sm shrink-0">{companyInitial}</div>
            <div className="min-w-0">
              <p className="text-white font-bold text-xs truncate">{user.companyName || 'Mon Entreprise'}</p>
              <p className="text-white/40 text-[10px]">Espace Entreprise</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button key={item.section + item.label} onClick={() => handleNav(item.section)}
              className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-left transition-all ${active === item.section ? 'bg-[#228B22] text-white font-bold' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>
              <span className="flex items-center gap-3">
                <i className={`fa-solid ${item.icon} w-4 text-center`} />
                <span className="font-medium">{item.label}</span>
              </span>
              {item.badge && <span className="min-w-[20px] h-5 flex items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">{item.badge}</span>}
            </button>
          ))}
        </nav>
        <div className="px-4 py-5 border-t border-white/10">
          <button onClick={logout} className="w-full flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white transition py-2 rounded-lg hover:bg-white/10">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Déconnexion
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="px-4 md:px-8 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition shrink-0">
                <i className="fa-solid fa-bars text-base"></i>
              </button>
              <div className="min-w-0">
                <h1 className="text-base md:text-xl font-extrabold text-[#0a2342] truncate">{currentSection?.label ?? 'Tableau de bord'}</h1>
                <p className="text-xs text-gray-400 hidden sm:block">{user.companyName || 'Mon Entreprise'} — Géré par {user.firstName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 transition">
                <i className="fa-solid fa-bell text-sm md:text-base"></i>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-100">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-[#0a2342]">{user.firstName} — Admin</p>
                  <p className="text-xs text-gray-400">{user.companyName || 'Entreprise'}</p>
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#228B22] flex items-center justify-center text-white font-bold text-sm">{companyInitial}</div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {active === 'dashboard'   && <EntDashboard    onNavigate={setActive} onDrawer={setDrawer} companyName={user.companyName} />}
          {active === 'flotte'      && <EntFlotte       onDrawer={setDrawer} />}
          {active === 'contrats'    && <EntContrats     onDrawer={setDrawer} />}
          {active === 'sinistres'   && <EntSinistres    navigate={navigate} onDrawer={setDrawer} />}
          {active === 'conducteurs' && <EntConducteurs  onDrawer={setDrawer} />}
          {active === 'paiements'   && <EntPaiements    onDrawer={setDrawer} />}
          {active === 'documents'   && <EntDocuments    onDrawer={setDrawer} />}
          {active === 'rapports'    && <EntRapports     onDrawer={setDrawer} />}
          {active === 'assistance'  && <EntAssistance   navigate={navigate} />}
          {active === 'parametres'  && <EntParametres   user={user} onDrawer={setDrawer} />}
        </main>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   DRAWER CONTENT — contenu dynamique selon le type
══════════════════════════════════════════════════════════════════ */
function DrawerContent({ type, data, onClose, navigate }: { type: string; data?: Record<string,unknown>; onClose: () => void; navigate: (p: string) => void }) {
  const drivers = ['Ahmed Benali', 'Fatima Alaoui', 'Youssef Chakir', 'Sara Mansouri', 'Karim Elhajri'];
  const vehicleTypes = ['Véhicule léger', 'Véhicule utilitaire', 'Poids lourd'];
  const formules = ['Tiers Simple', 'Tiers Étendu', 'Tous Risques'];

  if (type === 'add-vehicle') return (
    <Drawer title="Ajouter un véhicule" onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Marque & Modèle" placeholder="Ex : Renault Trafic" icon="fa-truck" />
          <FInput label="Immatriculation" placeholder="AB-123-CD" icon="fa-hashtag" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FSelect label="Type de véhicule" options={vehicleTypes} />
          <FInput label="Année" placeholder="2023" icon="fa-calendar" type="number" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FSelect label="Formule d'assurance" options={formules} />
          <FSelect label="Conducteur assigné" options={drivers} />
        </div>
        <FInput label="Numéro de châssis (VIN)" placeholder="VF1234…" icon="fa-barcode" />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-plus"></i> Ajouter le véhicule
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'edit-vehicle') return (
    <Drawer title={`Modifier — ${data?.model as string}`} onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Marque & Modèle" defaultValue={data?.model as string} icon="fa-truck" />
          <FInput label="Immatriculation" defaultValue={data?.plate as string} icon="fa-hashtag" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FSelect label="Type de véhicule" options={vehicleTypes} defaultValue={data?.type as string} />
          <FInput label="Année" defaultValue={data?.year as string} icon="fa-calendar" type="number" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FSelect label="Formule d'assurance" options={formules} defaultValue={data?.formule as string} />
          <FSelect label="Conducteur assigné" options={drivers} defaultValue={data?.driver as string} />
        </div>
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#0a2342] text-white font-bold text-sm hover:bg-[#1a3a6b] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-check"></i> Enregistrer
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'view-vehicle') return (
    <Drawer title="Détails du véhicule" onClose={onClose}>
      <div className="space-y-5">
        <div className="bg-[#0a2342] rounded-2xl p-5 text-white">
          <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">{data?.type as string}</p>
          <h2 className="text-2xl font-extrabold">{data?.model as string}</h2>
          <p className="text-white/50 mt-1">{data?.plate as string}</p>
        </div>
        {[
          { label: 'Formule',    value: data?.formule as string, icon: 'fa-shield-halved' },
          { label: 'Conducteur', value: data?.driver as string,  icon: 'fa-id-card'       },
          { label: 'Statut',     value: data?.status as string,  icon: 'fa-circle-check'  },
          { label: 'Année',      value: data?.year as string,    icon: 'fa-calendar'      },
        ].map(d => (
          <div key={d.label} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
            <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
              <i className={`fa-solid ${d.icon} text-white text-sm`}></i>
            </div>
            <div>
              <p className="text-xs text-gray-400">{d.label}</p>
              <p className="text-sm font-bold text-[#0a2342]">{d.value || '—'}</p>
            </div>
          </div>
        ))}
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-file-pdf"></i> Attestation
          </button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-[#0a2342] text-[#0a2342] font-bold text-sm hover:bg-[#0a2342] hover:text-white transition">
            Modifier
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'add-driver') return (
    <Drawer title="Ajouter un conducteur" onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Prénom" placeholder="Ahmed" icon="fa-user" />
          <FInput label="Nom" placeholder="Benali" icon="fa-user" />
        </div>
        <FInput label="Email professionnel" placeholder="ahmed@entreprise.com" icon="fa-envelope" type="email" />
        <FInput label="Téléphone" placeholder="+212 6 00 00 00 00" icon="fa-phone" type="tel" />
        <FSelect label="Catégories de permis" options={['B', 'B + C', 'B + C + CE', 'B + D']} />
        <FSelect label="Véhicule assigné" options={['Renault Trafic — EF-456-GH', 'Peugeot Partner — IJ-789-KL', 'Citroën Berlingo — MN-012-OP', 'Non assigné']} />
        <FInput label="Rôle / Fonction" placeholder="Chauffeur, Commercial, Livreur…" icon="fa-briefcase" />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-user-plus"></i> Ajouter le conducteur
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'edit-driver') return (
    <Drawer title={`Modifier — ${data?.name as string}`} onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Prénom" defaultValue={(data?.name as string)?.split(' ')[0]} icon="fa-user" />
          <FInput label="Nom" defaultValue={(data?.name as string)?.split(' ')[1]} icon="fa-user" />
        </div>
        <FSelect label="Catégories de permis" options={['B', 'B + C', 'B + C + CE', 'B + D']} defaultValue={data?.license as string} />
        <FSelect label="Véhicule assigné" options={['Renault Trafic — EF-456-GH', 'Peugeot Partner — IJ-789-KL', 'Non assigné']} defaultValue={data?.vehicle as string} />
        <FInput label="Rôle / Fonction" defaultValue={data?.role as string} icon="fa-briefcase" />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#0a2342] text-white font-bold text-sm hover:bg-[#1a3a6b] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-check"></i> Enregistrer
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'confirm-remove-driver') return (
    <Drawer title="Retirer un conducteur" onClose={onClose}>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-5 bg-red-50 border border-red-100 rounded-2xl">
          <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-user-minus text-white text-lg"></i>
          </div>
          <div>
            <p className="font-bold text-red-700">Retirer {data?.name as string} ?</p>
            <p className="text-sm text-red-500 mt-0.5">Ce conducteur ne sera plus autorisé à conduire les véhicules assurés.</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">Le conducteur sera retiré de votre liste de conducteurs autorisés. Le véhicule actuellement assigné (<strong>{data?.vehicle as string}</strong>) sera marqué sans conducteur.</p>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-user-minus"></i> Confirmer le retrait
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'view-sinistre') return (
    <Drawer title="Dossier sinistre" onClose={onClose}>
      <div className="space-y-5">
        <div className="bg-[#0a2342] rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#228B22] text-xs font-bold uppercase tracking-widest">{data?.ref as string}</p>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${data?.status === 'En cours' ? 'bg-blue-500/20 text-blue-300' : 'bg-[#228B22]/20 text-[#4ade80]'}`}>{data?.status as string}</span>
          </div>
          <h2 className="text-xl font-extrabold text-white">{data?.vehicle as string}</h2>
          <p className="text-white/50 text-sm mt-1">Conducteur : {data?.driver as string}</p>
        </div>
        {[
          { label: 'Date du sinistre',  value: data?.date as string,   icon: 'fa-calendar'   },
          { label: 'Type',              value: 'Accident de circulation', icon: 'fa-car-burst' },
          { label: 'Référence',         value: data?.ref as string,    icon: 'fa-hashtag'    },
          { label: 'Statut',            value: data?.status as string, icon: 'fa-circle-info'},
        ].map(d => (
          <div key={d.label} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
            <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
              <i className={`fa-solid ${d.icon} text-white text-sm`}></i>
            </div>
            <div>
              <p className="text-xs text-gray-400">{d.label}</p>
              <p className="text-sm font-bold text-[#0a2342]">{d.value || '—'}</p>
            </div>
          </div>
        ))}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-3">Documents du dossier</p>
          {['Constat amiable.pdf', 'Photos dommages.zip', 'Rapport police.pdf'].map(f => (
            <div key={f} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 mb-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-file text-white text-xs"></i>
              </div>
              <span className="text-sm text-[#0a2342] font-medium flex-1">{f}</span>
              <i className="fa-solid fa-download text-[#228B22] text-sm"></i>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="w-full py-3 rounded-xl bg-[#0a2342] text-white font-bold text-sm hover:bg-[#1a3a6b] transition flex items-center justify-center gap-2">
          <i className="fa-solid fa-download"></i> Télécharger le dossier complet
        </button>
      </div>
    </Drawer>
  );

  if (type === 'view-message') return (
    <Drawer title="Message" onClose={onClose}>
      <div className="space-y-5">
        <div className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
            <i className="fa-solid fa-building text-white text-sm"></i>
          </div>
          <div>
            <p className="font-extrabold text-[#0a2342] text-sm">{data?.from as string}</p>
            <p className="text-xs text-gray-400 mt-0.5">{data?.date as string}</p>
          </div>
        </div>
        <h3 className="text-lg font-extrabold text-[#0a2342]">{data?.subject as string}</h3>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3 p-4 bg-[#f8fafc] rounded-2xl border border-gray-100">
          <p>Bonjour,</p>
          <p>{data?.body as string}</p>
          <p>Pour toute question, n'hésitez pas à contacter votre gestionnaire dédié ou à répondre à ce message.</p>
          <p className="pt-2 font-semibold text-[#0a2342]">L'équipe Smart-Économie</p>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-reply"></i> Répondre
          </button>
          <button onClick={onClose} className="px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">
            Archiver
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'add-payment') return (
    <Drawer title="Ajouter un moyen de paiement" onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 mb-2">
          {['Carte bancaire', 'Virement IBAN', 'Prélèvement SEPA'].map(t => (
            <label key={t} className="flex items-center gap-3 p-3.5 rounded-xl border-2 border-gray-100 cursor-pointer hover:border-[#228B22] transition">
              <input type="radio" name="payment-type" className="accent-[#228B22]" />
              <span className="text-sm font-medium text-[#0a2342]">{t}</span>
            </label>
          ))}
        </div>
        <FInput label="Titulaire du compte" placeholder="Raison sociale ou nom" icon="fa-building" />
        <FInput label="IBAN" placeholder="MA76 0000 0000 0000 0000 0000 00" icon="fa-university" />
        <FInput label="BIC / SWIFT" placeholder="BCDMMAMC" icon="fa-globe" />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-check"></i> Ajouter
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'edit-company') return (
    <Drawer title="Modifier les informations entreprise" onClose={onClose}>
      <div className="space-y-4">
        <FInput label="Raison sociale" defaultValue={data?.companyName as string} icon="fa-building" />
        <FInput label="N° Registre de Commerce" defaultValue="RC-123456" icon="fa-hashtag" />
        <FSelect label="Secteur d'activité" options={['Transport & Logistique', 'BTP & Construction', 'Commerce & Distribution', 'Artisanat & Services', 'Agriculture', 'Industrie', 'Autre']} defaultValue="Transport & Logistique" />
        <FInput label="Email de contact" defaultValue={data?.email as string} icon="fa-envelope" type="email" />
        <FInput label="Téléphone" placeholder="+212 5 22 00 00 00" icon="fa-phone" type="tel" />
        <FInput label="Adresse siège social" placeholder="123 Rue Exemple" icon="fa-location-dot" />
        <FInput label="Ville" placeholder="Casablanca" icon="fa-city" />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-check"></i> Enregistrer
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'download-confirm') return (
    <Drawer title="Télécharger le document" onClose={onClose}>
      <div className="space-y-5">
        <div className="flex items-center gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
            <i className="fa-solid fa-file-pdf text-white text-xl"></i>
          </div>
          <div>
            <p className="font-bold text-[#0a2342]">{data?.name as string}</p>
            <p className="text-xs text-gray-400 mt-0.5">{data?.date as string} · {data?.size as string}</p>
          </div>
        </div>
        <button onClick={onClose} className="w-full py-3.5 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
          <i className="fa-solid fa-download"></i> Télécharger
        </button>
        <button onClick={onClose} className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
      </div>
    </Drawer>
  );

  return null;
}

/* ══════════════════════════════════════════════════════════════════
   TABLEAU DE BORD
══════════════════════════════════════════════════════════════════ */
function EntDashboard({ onNavigate, onDrawer, companyName }: { onNavigate: (s: Section) => void; onDrawer: (d: DrawerState) => void; companyName?: string }) {
  const kpis = [
    { label: 'Véhicules assurés',      value: '8',   sub: 'Flotte active',               icon: 'fa-truck'          },
    { label: 'Conducteurs',            value: '12',  sub: '10 actifs — 2 en attente',    icon: 'fa-id-card'        },
    { label: 'Sinistres en cours',     value: '2',   sub: 'Sur les 12 derniers mois',    icon: 'fa-car-burst'      },
    { label: 'Contribution solidaire', value: '0 €', sub: 'Aucune cotisation mensuelle', icon: 'fa-ban'            },
  ];
  const quickActions: { label: string; icon: string; section: Section }[] = [
    { label: 'Déclarer un sinistre',   icon: 'fa-car-burst',   section: 'sinistres'   },
    { label: 'Ajouter un véhicule',    icon: 'fa-truck',       section: 'flotte'      },
    { label: 'Ajouter un conducteur',  icon: 'fa-id-card',     section: 'conducteurs' },
    { label: 'Télécharger attestation',icon: 'fa-file-pdf',    section: 'documents'   },
    { label: 'Voir les rapports',      icon: 'fa-chart-bar',   section: 'rapports'    },
    { label: 'Assistance entreprise',  icon: 'fa-headset',     section: 'assistance'  },
  ];
  const sinistres = [
    { date: '10 mars 2026', vehicle: 'Renault Trafic — EF-456-GH',  driver: 'Ahmed Benali',   ref: 'ENT-2026-00012', status: 'En cours', iconBg: 'bg-[#0a2342]', icon: 'fa-hourglass-half', badge: 'text-blue-600 bg-blue-50'  },
    { date: '5 mars 2026',  vehicle: 'Peugeot Partner — IJ-789-KL', driver: 'Youssef Chakir', ref: 'ENT-2026-00009', status: 'Approuvé', iconBg: 'bg-[#228B22]', icon: 'fa-check',          badge: 'text-[#228B22] bg-green-50' },
  ];
  const conducteurs = [
    { name: 'Ahmed Benali',   role: 'Chauffeur principal',    status: 'Actif'     },
    { name: 'Fatima Alaoui',  role: 'Commerciale terrain',   status: 'Actif'     },
    { name: 'Youssef Chakir', role: 'Livreur',               status: 'Actif'     },
    { name: 'Sara Mansouri',  role: 'Responsable logistique',status: 'En attente'},
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0a2342] rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">Espace Entreprise</p>
          <h2 className="text-2xl font-extrabold text-white">{companyName || 'Mon Entreprise'}</h2>
          <p className="text-white/50 text-sm mt-1">Contrat flotte Pro actif — Tous Risques</p>
        </div>
        <div className="flex items-center gap-2 bg-[#228B22]/20 border border-[#228B22]/30 rounded-full px-5 py-2">
          <div className="w-2 h-2 rounded-full bg-[#228B22]"></div>
          <span className="text-[#4ade80] text-sm font-bold">Actif</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {kpis.map(k => (
          <div key={k.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${k.icon} text-white text-base`}></i></div>
            <div><p className="text-xs text-gray-400 mb-1">{k.label}</p><p className="text-xl font-extrabold text-[#0a2342] leading-tight">{k.value}</p><p className="text-xs text-gray-400 mt-0.5">{k.sub}</p></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <div className="col-span-1 md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#0a2342] px-6 py-5 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Flotte professionnelle</span>
              <h2 className="text-xl font-extrabold text-white mt-1">8 véhicules assurés</h2>
              <p className="text-white/50 text-sm">Contrat flotte n° FL-2024-0892</p>
            </div>
            <button onClick={() => onNavigate('flotte')} className="text-xs font-bold text-[#228B22] bg-[#228B22]/15 px-4 py-2 rounded-full hover:bg-[#228B22]/25 transition">Gérer →</button>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[{ label: 'Véhicules légers', value: '5', icon: 'fa-car' }, { label: 'Utilitaires', value: '2', icon: 'fa-truck' }, { label: 'Poids lourds', value: '1', icon: 'fa-truck-moving' }].map(d => (
                <div key={d.label} className="bg-[#f8fafc] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center"><i className={`fa-solid ${d.icon} text-white text-xs`}></i></div><p className="text-xs text-gray-400">{d.label}</p></div>
                  <p className="text-2xl font-extrabold text-[#0a2342]">{d.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => onNavigate('flotte')} className="flex-1 bg-[#228B22] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2"><i className="fa-solid fa-truck text-xs"></i> Voir la flotte</button>
              <button onClick={() => onNavigate('documents')} className="flex-1 border-2 border-[#0a2342] text-[#0a2342] py-2.5 rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center justify-center gap-2"><i className="fa-solid fa-file-pdf text-xs"></i> Attestations</button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0a2342] mb-4">Actions rapides</p>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map(a => (
              <button key={a.label} onClick={() => onNavigate(a.section)}
                className="group flex flex-col items-center gap-2.5 p-3.5 rounded-xl bg-[#f8fafc] hover:bg-[#0a2342] border border-gray-100 hover:border-[#0a2342] transition-all text-center">
                <div className="w-10 h-10 rounded-xl bg-[#0a2342] group-hover:bg-white flex items-center justify-center transition-all">
                  <i className={`fa-solid ${a.icon} text-white group-hover:text-[#0a2342] text-sm transition-all`}></i>
                </div>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-white leading-tight transition-all">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div><span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Sinistres récents</span><h3 className="text-base font-extrabold text-[#0a2342] mt-1">2 dossiers en cours</h3></div>
            <button onClick={() => onNavigate('sinistres')} className="text-xs font-bold text-[#0a2342] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">Voir tout</button>
          </div>
          <div className="space-y-3 mb-4">
            {sinistres.map(s => (
              <div key={s.ref} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition cursor-pointer" onClick={() => onDrawer({ type: 'view-sinistre', data: s as unknown as Record<string,unknown> })}>
                <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0`}><i className={`fa-solid ${s.icon} text-white text-xs`}></i></div>
                <div className="flex-1"><p className="font-bold text-[#0a2342] text-sm">{s.vehicle}</p><p className="text-xs text-gray-400">{s.date} · {s.ref}</p></div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${s.badge}`}>{s.status}</span>
              </div>
            ))}
          </div>
          <button onClick={() => onNavigate('sinistres')} className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl font-bold text-sm transition border border-red-100">
            <i className="fa-solid fa-car-burst text-sm"></i> Déclarer un sinistre
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div><span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Conducteurs</span><h3 className="text-base font-extrabold text-[#0a2342] mt-1">12 conducteurs</h3></div>
            <button onClick={() => onNavigate('conducteurs')} className="text-xs font-bold text-[#0a2342] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">Gérer</button>
          </div>
          <div className="space-y-3">
            {conducteurs.map(c => (
              <div key={c.name} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition cursor-pointer" onClick={() => onDrawer({ type: 'edit-driver', data: c as unknown as Record<string,unknown> })}>
                <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center text-white font-bold text-xs shrink-0">{c.name.slice(0,1)}</div>
                <div className="flex-1"><p className="text-sm font-bold text-[#0a2342]">{c.name}</p><p className="text-xs text-gray-400">{c.role}</p></div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.status === 'Actif' ? 'text-[#228B22] bg-green-50' : 'text-gray-500 bg-gray-100'}`}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FLOTTE
══════════════════════════════════════════════════════════════════ */
function EntFlotte({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  const vehicles = [
    { model: 'Renault Trafic',    plate: 'EF-456-GH', type: 'Utilitaire',    driver: 'Ahmed Benali',   formule: 'Tous Risques',  year: '2021', status: 'Assuré',     color: 'from-blue-500 to-[#0a2342]'  },
    { model: 'Peugeot Partner',   plate: 'IJ-789-KL', type: 'Utilitaire',    driver: 'Youssef Chakir', formule: 'Tiers Étendu',  year: '2020', status: 'Assuré',     color: 'from-[#228B22] to-green-800' },
    { model: 'Citroën Berlingo',  plate: 'MN-012-OP', type: 'Véhicule léger',driver: 'Fatima Alaoui',  formule: 'Tiers Étendu',  year: '2022', status: 'Assuré',     color: 'from-blue-500 to-[#0a2342]'  },
    { model: 'Ford Transit',      plate: 'QR-345-ST', type: 'Poids lourd',   driver: 'Non assigné',    formule: 'Tous Risques',  year: '2019', status: 'Assuré',     color: 'from-gray-500 to-gray-700'   },
    { model: 'Volkswagen Caddy',  plate: 'UV-678-WX', type: 'Véhicule léger',driver: 'Sara Mansouri',  formule: 'Tiers Simple',  year: '2023', status: 'En attente', color: 'from-gray-400 to-gray-600'   },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Gérez l'ensemble des véhicules de votre flotte professionnelle.</p>
        <button onClick={() => onDrawer({ type: 'add-vehicle' })} className="bg-[#228B22] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> Ajouter un véhicule
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {[{ label: 'Véhicules légers', value: '5', icon: 'fa-car' }, { label: 'Utilitaires', value: '2', icon: 'fa-truck' }, { label: 'Poids lourds', value: '1', icon: 'fa-truck-moving' }].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${s.icon} text-white text-base`}></i></div>
            <div><p className="text-xs text-gray-400">{s.label}</p><p className="text-2xl font-extrabold text-[#0a2342]">{s.value}</p></div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {vehicles.map(v => (
          <div key={v.plate} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-5">
            <div className={`w-16 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center shrink-0`}>
              <i className="fa-solid fa-truck text-white text-lg"></i>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-extrabold text-[#0a2342]">{v.model}</h3>
                <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-bold">{v.type}</span>
              </div>
              <div className="flex items-center gap-5 text-xs text-gray-400">
                <span><i className="fa-solid fa-hashtag mr-1"></i>{v.plate}</span>
                <span><i className="fa-solid fa-id-card mr-1"></i>{v.driver}</span>
                <span><i className="fa-solid fa-shield-halved mr-1"></i>{v.formule}</span>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${v.status === 'Assuré' ? 'text-[#228B22] bg-green-50' : 'text-gray-500 bg-gray-100'}`}>{v.status}</span>
            <div className="flex gap-2">
              <button onClick={() => onDrawer({ type: 'view-vehicle', data: v as unknown as Record<string,unknown> })} className="px-3 py-2 rounded-xl border border-gray-200 text-[#0a2342] text-xs font-bold hover:bg-gray-50 transition">
                <i className="fa-solid fa-eye mr-1"></i> Détails
              </button>
              <button onClick={() => onDrawer({ type: 'download-confirm', data: { name: `Attestation ${v.model}`, date: '15 jan. 2024', size: '245 Ko' } })} className="px-3 py-2 rounded-xl bg-[#0a2342] text-white text-xs font-bold hover:bg-[#1a3a6b] transition">
                <i className="fa-solid fa-file-pdf mr-1"></i> Attestation
              </button>
              <button onClick={() => onDrawer({ type: 'edit-vehicle', data: v as unknown as Record<string,unknown> })} className="px-3 py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-bold hover:border-[#0a2342] hover:text-[#0a2342] transition">
                <i className="fa-solid fa-pen mr-1"></i> Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => onDrawer({ type: 'add-vehicle' })} className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-[#228B22] hover:text-[#228B22] transition text-sm font-semibold">
        <i className="fa-solid fa-plus-circle text-lg"></i> Ajouter un véhicule à la flotte
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CONTRATS
══════════════════════════════════════════════════════════════════ */
function EntContrats({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div className="bg-[#0a2342] px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Contrat principal</span>
            <h2 className="text-xl font-extrabold text-white mt-1">Flotte Pro — Tous Risques</h2>
            <p className="text-white/50 text-sm mt-1">Contrat n° FL-2024-0892 · Souscrit le 1 fév. 2024</p>
          </div>
          <div className="flex items-center gap-2 bg-[#228B22]/20 border border-[#228B22]/30 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full bg-[#228B22]"></div>
            <span className="text-[#4ade80] text-xs font-bold">Actif</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[{ label: 'Formule', value: 'Tous Risques', icon: 'fa-shield-halved' }, { label: 'Véhicules couverts', value: '8', icon: 'fa-truck' }, { label: 'Contribution', value: '0 € / mois', icon: 'fa-ban' }, { label: 'Échéance', value: '1 fév. 2025', icon: 'fa-calendar' }].map(d => (
              <div key={d.label} className="bg-[#f8fafc] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center"><i className={`fa-solid ${d.icon} text-white text-xs`}></i></div><p className="text-xs text-gray-400">{d.label}</p></div>
                <p className="text-sm font-bold text-[#0a2342]">{d.value}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-5 mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Garanties incluses</p>
            <div className="grid grid-cols-2 gap-3">
              {['Responsabilité civile professionnelle', 'Vol & Incendie — tous véhicules', 'Bris de glace', 'Assistance et remorquage 24/7', 'Dommages tous accidents', 'Véhicule de remplacement pro', 'Protection du conducteur', 'Marchandises transportées'].map(g => (
                <div key={g} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-[#228B22] flex items-center justify-center shrink-0"><i className="fa-solid fa-check text-white text-[10px]"></i></div> {g}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => onDrawer({ type: 'download-confirm', data: { name: 'Contrat Flotte Pro FL-2024-0892', date: '1 fév. 2024', size: '3,4 Mo' } })} className="flex-1 bg-[#228B22] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
              <i className="fa-solid fa-file-pdf"></i> Télécharger le contrat
            </button>
            <button onClick={() => onDrawer({ type: 'download-confirm', data: { name: 'Attestations flotte complètes (8)', date: '1 fév. 2024', size: '4,1 Mo' } })} className="flex-1 bg-[#0a2342] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a3a6b] transition flex items-center justify-center gap-2">
              <i className="fa-solid fa-file-pdf"></i> Attestations flotte
            </button>
            <button className="px-6 border-2 border-gray-200 text-gray-500 py-3 rounded-xl font-bold text-sm hover:border-[#0a2342] hover:text-[#0a2342] transition">Modifier la formule</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SINISTRES
══════════════════════════════════════════════════════════════════ */
function EntSinistres({ navigate, onDrawer }: { navigate: (p: string) => void; onDrawer: (d: DrawerState) => void }) {
  const [showForm, setShowForm] = useState(false);
  const claims = [
    { date: '10 mars 2026', vehicle: 'Renault Trafic — EF-456-GH',   driver: 'Ahmed Benali',   ref: 'ENT-2026-00012', status: 'En cours', icon: 'fa-hourglass-half', iconBg: 'bg-[#0a2342]', badge: 'text-blue-600 bg-blue-50'   },
    { date: '5 mars 2026',  vehicle: 'Peugeot Partner — IJ-789-KL',  driver: 'Youssef Chakir', ref: 'ENT-2026-00009', status: 'Approuvé', icon: 'fa-check',          iconBg: 'bg-[#228B22]', badge: 'text-[#228B22] bg-green-50'  },
    { date: '12 jan. 2026', vehicle: 'Citroën Berlingo — MN-012-OP', driver: 'Fatima Alaoui',  ref: 'ENT-2026-00002', status: 'Clôturé',  icon: 'fa-check',          iconBg: 'bg-[#228B22]', badge: 'text-gray-500 bg-gray-100'   },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Déclarez et suivez les sinistres de votre flotte.</p>
        <button onClick={() => setShowForm(!showForm)} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2">
          <i className="fa-solid fa-car-burst"></i> {showForm ? 'Annuler' : 'Déclarer un sinistre'}
        </button>
      </div>
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-1">Nouvelle déclaration</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <FSelect label="Véhicule concerné" options={['Renault Trafic — EF-456-GH', 'Peugeot Partner — IJ-789-KL', 'Citroën Berlingo — MN-012-OP', 'Ford Transit — QR-345-ST']} />
            <FSelect label="Conducteur" options={['Ahmed Benali', 'Fatima Alaoui', 'Youssef Chakir', 'Sara Mansouri']} />
            <FSelect label="Type de sinistre" options={['Accident de circulation', 'Vol du véhicule', 'Incendie / Explosion', 'Bris de glace', 'Catastrophe naturelle', 'Dommages matériels']} />
            <FInput label="Date du sinistre" type="date" icon="fa-calendar" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Description des circonstances</label>
            <textarea rows={4} placeholder="Décrivez les circonstances du sinistre…" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white outline-none resize-none focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10" />
          </div>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center text-gray-400 hover:border-[#228B22] transition cursor-pointer">
            <i className="fa-solid fa-cloud-arrow-up text-2xl mb-2 block"></i>
            <p className="text-sm">Glissez vos fichiers ici ou <span className="text-[#228B22] font-bold">parcourez</span></p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowForm(false)} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
            <button onClick={() => setShowForm(false)} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
              <i className="fa-solid fa-paper-plane"></i> Soumettre la déclaration
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {[{ label: 'Total déclarés', value: '3', icon: 'fa-folder-open' }, { label: 'En cours', value: '1', icon: 'fa-hourglass-half' }, { label: 'Clôturés', value: '2', icon: 'fa-check-circle' }].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${s.icon} text-white text-base`}></i></div>
            <div><p className="text-xs text-gray-400">{s.label}</p><p className="text-2xl font-extrabold text-[#0a2342]">{s.value}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100"><p className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Historique des sinistres</p></div>
        <div className="divide-y divide-gray-50">
          {claims.map(c => (
            <div key={c.ref} className="flex items-center gap-5 px-6 py-5">
              <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}><i className={`fa-solid ${c.icon} text-white text-sm`}></i></div>
              <div className="flex-1">
                <p className="font-bold text-[#0a2342] text-sm">{c.vehicle}</p>
                <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                  <span><i className="fa-solid fa-calendar mr-1"></i>{c.date}</span>
                  <span><i className="fa-solid fa-id-card mr-1"></i>{c.driver}</span>
                  <span><i className="fa-solid fa-hashtag mr-1"></i>{c.ref}</span>
                </div>
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${c.badge}`}>{c.status}</span>
              <button onClick={() => onDrawer({ type: 'view-sinistre', data: c as unknown as Record<string,unknown> })} className="px-4 py-2 rounded-xl border border-gray-200 text-[#0a2342] text-xs font-bold hover:bg-gray-50 transition">
                Voir le dossier
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CONDUCTEURS
══════════════════════════════════════════════════════════════════ */
function EntConducteurs({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  const drivers = [
    { name: 'Ahmed Benali',    role: 'Chauffeur principal',    license: 'B, C',  vehicle: 'Renault Trafic',   status: 'Actif'     },
    { name: 'Fatima Alaoui',   role: 'Commerciale terrain',   license: 'B',     vehicle: 'Citroën Berlingo', status: 'Actif'     },
    { name: 'Youssef Chakir',  role: 'Livreur',               license: 'B, C',  vehicle: 'Peugeot Partner',  status: 'Actif'     },
    { name: 'Sara Mansouri',   role: 'Responsable logistique',license: 'B',     vehicle: 'Non assigné',       status: 'En attente'},
    { name: 'Karim Elhajri',   role: 'Technicien',            license: 'B',     vehicle: 'Non assigné',       status: 'En attente'},
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Gérez les conducteurs autorisés à conduire vos véhicules assurés.</p>
        <button onClick={() => onDrawer({ type: 'add-driver' })} className="bg-[#228B22] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> Ajouter un conducteur
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8fafc] border-b border-gray-100">
              {['Conducteur', 'Rôle', 'Permis', 'Véhicule assigné', 'Statut', 'Actions'].map(h => (
                <th key={h} className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {drivers.map(d => (
              <tr key={d.name} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center text-white font-bold text-xs shrink-0">{d.name.slice(0,1)}</div>
                    <span className="font-bold text-[#0a2342] text-sm">{d.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{d.role}</td>
                <td className="px-6 py-4"><span className="text-xs font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">{d.license}</span></td>
                <td className="px-6 py-4 text-sm text-gray-500">{d.vehicle}</td>
                <td className="px-6 py-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.status === 'Actif' ? 'text-[#228B22] bg-green-50' : 'text-gray-500 bg-gray-100'}`}>{d.status}</span></td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => onDrawer({ type: 'edit-driver', data: d as unknown as Record<string,unknown> })} className="px-3 py-1.5 rounded-lg border border-gray-200 text-[#0a2342] text-xs font-bold hover:bg-gray-50 transition">Modifier</button>
                    <button onClick={() => onDrawer({ type: 'confirm-remove-driver', data: d as unknown as Record<string,unknown> })} className="px-3 py-1.5 rounded-lg border border-red-100 text-red-500 text-xs font-bold hover:bg-red-50 transition">Retirer</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAIEMENTS
══════════════════════════════════════════════════════════════════ */
function EntPaiements({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-[#0a2342] rounded-2xl p-6 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#228B22] flex items-center justify-center shrink-0"><i className="fa-solid fa-ban text-white text-2xl"></i></div>
        <div>
          <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">Modèle solidaire</p>
          <h2 className="text-2xl font-extrabold text-white mb-1">0 € de cotisation mensuelle</h2>
          <p className="text-white/60 text-sm">Votre entreprise ne contribue qu'en cas de sinistre déclaré.</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Moyen de paiement</p>
        <div className="flex items-center gap-4 p-4 border-2 border-[#0a2342] rounded-xl mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className="fa-solid fa-building-columns text-white"></i></div>
          <div className="flex-1"><p className="font-bold text-[#0a2342] text-sm">Virement bancaire — IBAN MA76 •••• 4521</p><p className="text-xs text-gray-400">Banque Centrale Populaire — Maroc</p></div>
          <span className="text-xs font-bold text-[#228B22] bg-green-50 px-3 py-1 rounded-full">Par défaut</span>
        </div>
        <button onClick={() => onDrawer({ type: 'add-payment' })} className="flex items-center gap-2 text-sm text-[#0a2342] font-bold border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition">
          <i className="fa-solid fa-plus text-xs"></i> Ajouter un moyen de paiement
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Historique</p>
          <button className="text-xs text-[#0a2342] font-bold border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition"><i className="fa-solid fa-download mr-1"></i> Exporter</button>
        </div>
        {[
          { date: '10 mars 2026', label: 'Contribution solidaire — ENT-2026-00009', amount: '-180,00 €' },
          { date: '15 jan. 2026', label: "Frais d'adhésion flotte annuels",          amount: '-120,00 €' },
          { date: '12 jan. 2026', label: 'Contribution solidaire — ENT-2026-00002', amount: '-95,50 €'  },
        ].map((h, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-gray-50 last:border-0">
            <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className="fa-solid fa-arrow-up text-white text-xs"></i></div>
            <div className="flex-1"><p className="text-sm font-semibold text-[#0a2342]">{h.label}</p><p className="text-xs text-gray-400">{h.date}</p></div>
            <p className="font-bold text-red-500 text-sm">{h.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   DOCUMENTS
══════════════════════════════════════════════════════════════════ */
function EntDocuments({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  const docs = [
    { name: 'Attestation flotte complète',     date: '1 fév. 2024',     size: '1,2 Mo', icon: 'fa-file-pdf'      },
    { name: 'Contrat flotte Pro',              date: '1 fév. 2024',     size: '3,4 Mo', icon: 'fa-file-contract' },
    { name: 'Attestations individuelles (8)',  date: 'Toute la flotte', size: '4,1 Mo', icon: 'fa-folder-open'   },
    { name: 'Conditions générales Entreprise', date: 'Version 2024',    size: '2,8 Mo', icon: 'fa-file-lines'    },
    { name: 'Relevé de contributions 2024',    date: 'Jan.–Mars 2024',  size: '245 Ko', icon: 'fa-file-invoice'  },
    { name: 'Constat amiable (x5 vierges)',    date: 'Standard',        size: '445 Ko', icon: 'fa-file-alt'      },
    { name: 'PV sinistre ENT-2026-00009',      date: '5 mars 2026',     size: '780 Ko', icon: 'fa-gavel'         },
    { name: 'Rapport sinistralité annuel',     date: 'Exercice 2024',   size: '1,8 Mo', icon: 'fa-chart-bar'     },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">Tous les documents de votre flotte disponibles au téléchargement.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {docs.map(d => (
          <div key={d.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${d.icon} text-white text-lg`}></i></div>
            <div className="flex-1 min-w-0"><p className="font-bold text-[#0a2342] text-sm">{d.name}</p><p className="text-xs text-gray-400 mt-0.5">{d.date} · {d.size}</p></div>
            <button onClick={() => onDrawer({ type: 'download-confirm', data: d as unknown as Record<string,unknown> })} className="w-9 h-9 rounded-xl bg-[#228B22] hover:bg-[#1a6b1a] flex items-center justify-center transition shrink-0">
              <i className="fa-solid fa-download text-white text-sm"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   RAPPORTS
══════════════════════════════════════════════════════════════════ */
function EntRapports({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {[
          { label: 'Taux de sinistralité',    value: '8 %',      icon: 'fa-chart-line', good: false },
          { label: 'Économies réalisées',      value: '4 200 €',  icon: 'fa-piggy-bank', good: true  },
          { label: 'Contributions versées',    value: '395,50 €', icon: 'fa-hand-holding-dollar', good: false },
          { label: 'Véhicules sans sinistre',  value: '6 / 8',    icon: 'fa-shield-halved', good: true },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${s.icon} text-white text-base`}></i></div>
            <div><p className="text-xs text-gray-400 mb-1">{s.label}</p><p className={`text-xl font-extrabold leading-tight ${s.good ? 'text-[#228B22]' : 'text-[#0a2342]'}`}>{s.value}</p></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-5">Sinistralité par véhicule</p>
          {[{ model: 'Renault Trafic', nb: 1, pct: 50 }, { model: 'Peugeot Partner', nb: 1, pct: 50 }, { model: 'Citroën Berlingo', nb: 0, pct: 0 }, { model: 'Ford Transit', nb: 0, pct: 0 }, { model: 'VW Caddy', nb: 0, pct: 0 }].map(v => (
            <div key={v.model} className="mb-3">
              <div className="flex justify-between mb-1"><span className="text-sm text-[#0a2342] font-medium">{v.model}</span><span className="text-xs text-gray-400">{v.nb} sinistre{v.nb > 1 ? 's' : ''}</span></div>
              <div className="w-full h-2 bg-gray-100 rounded-full"><div className={`h-2 rounded-full ${v.nb > 0 ? 'bg-[#0a2342]' : 'bg-[#228B22]'}`} style={{ width: v.nb > 0 ? `${v.pct}%` : '5%' }}></div></div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-5">Économies vs assurance classique</p>
          {[{ label: 'Cotisation classique estimée', value: '4 595,50 €', type: 'neg' }, { label: 'Contributions versées', value: '395,50 €', type: 'neu' }, { label: 'Économies réalisées', value: '4 200,00 €', type: 'pos' }].map(r => (
            <div key={r.label} className={`flex justify-between p-4 rounded-xl mb-2 ${r.type === 'pos' ? 'bg-green-50 border border-green-100' : 'bg-[#f8fafc]'}`}>
              <span className="text-sm text-gray-600">{r.label}</span>
              <span className={`font-extrabold text-sm ${r.type === 'pos' ? 'text-[#228B22]' : r.type === 'neg' ? 'text-red-500' : 'text-[#0a2342]'}`}>{r.value}</span>
            </div>
          ))}
          <button onClick={() => onDrawer({ type: 'download-confirm', data: { name: 'Rapport sinistralité annuel 2024', date: 'Exercice 2024', size: '1,8 Mo' } })} className="mt-4 w-full border-2 border-[#0a2342] text-[#0a2342] py-3 rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-download text-xs"></i> Télécharger le rapport
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ASSISTANCE
══════════════════════════════════════════════════════════════════ */
function EntAssistance({ navigate }: { navigate: (p: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: 'Comment déclarer un sinistre pour un véhicule de ma flotte ?', a: "Rendez-vous dans l'onglet Sinistres, cliquez sur « Déclarer un sinistre » et remplissez le formulaire. Vous pouvez sélectionner le véhicule, le conducteur et joindre les pièces justificatives." },
    { q: 'Comment ajouter un nouveau véhicule à mon contrat ?', a: "Accédez à l'onglet Ma flotte et cliquez sur « Ajouter un véhicule ». Renseignez les informations du véhicule et la formule souhaitée." },
    { q: 'Quelle procédure pour un conducteur impliqué dans un accident ?', a: "Le conducteur doit remplir un constat amiable sur place. L'entreprise dispose de 48h ouvrées pour déclarer le sinistre depuis l'espace entreprise." },
    { q: 'Comment obtenir les attestations de toute la flotte ?', a: "Dans l'onglet Documents, téléchargez le fichier « Attestations individuelles (8) » qui contient toutes les attestations en un seul téléchargement." },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0a2342] rounded-2xl p-6 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#228B22] flex items-center justify-center shrink-0"><i className="fa-solid fa-headset text-white text-2xl"></i></div>
        <div>
          <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">Assistance Entreprise</p>
          <h2 className="text-2xl font-extrabold text-white mb-1">Un gestionnaire dédié à votre flotte</h2>
          <p className="text-white/60 text-sm">Votre interlocuteur unique pour toutes vos questions, disponible en priorité.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {[
          { icon: 'fa-phone',    title: 'Ligne entreprise',   info: '+22 535 257 391',        sub: 'Priorité entreprise — 24/7',  href: 'tel:+22535257391',               action: 'Appeler' },
          { icon: 'fa-envelope', title: 'Email dédié',        info: 'pro@smart-economie.com', sub: 'Réponse sous 4h ouvrées',     href: 'mailto:pro@smart-economie.com',  action: 'Envoyer un email' },
          { icon: 'fa-user-tie', title: 'Gestionnaire dédié', info: 'Karim Lahlou',           sub: 'Votre référent flotte',        href: undefined,                        action: 'Prendre RDV' },
        ].map(c => (
          <div key={c.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0a2342] flex items-center justify-center mb-4"><i className={`fa-solid ${c.icon} text-white text-xl`}></i></div>
            <p className="font-bold text-[#0a2342] text-base mb-1">{c.title}</p>
            <p className="text-sm text-gray-500 mb-0.5">{c.info}</p>
            <p className="text-xs text-gray-400 mb-5">{c.sub}</p>
            {c.href ? (
              <a href={c.href} className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white py-2.5 rounded-xl font-bold text-sm transition text-center block">{c.action}</a>
            ) : (
              <button onClick={() => navigate('/contact')} className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white py-2.5 rounded-xl font-bold text-sm transition">{c.action}</button>
            )}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Questions fréquentes</p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition">
                <span className="font-semibold text-[#0a2342] text-sm">{faq.q}</span>
                <i className={`fa-solid fa-chevron-down text-gray-400 text-xs transition-transform duration-200 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}></i>
              </button>
              {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">{faq.a}</div>}
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/contact')} className="mt-4 w-full border-2 border-[#0a2342] text-[#0a2342] py-3 rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center justify-center gap-2">
          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i> Accéder au centre d'aide
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PARAMÈTRES
══════════════════════════════════════════════════════════════════ */
function EntParametres({ user, onDrawer }: { user: { firstName?: string; email?: string; companyName?: string; phone?: string }; onDrawer: (d: DrawerState) => void }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-[#228B22] flex items-center justify-center text-white font-extrabold text-3xl shrink-0">{(user.companyName?.slice(0,1) || 'E').toUpperCase()}</div>
        <div className="flex-1">
          <h2 className="text-xl font-extrabold text-[#0a2342]">{user.companyName || 'Mon Entreprise'}</h2>
          <p className="text-sm text-gray-400">RC-123456 · Administrateur : {user.firstName}</p>
          <p className="text-xs text-[#228B22] font-bold mt-1">Membre Pro depuis fév. 2024</p>
        </div>
        <button onClick={() => onDrawer({ type: 'edit-company', data: { companyName: user.companyName, email: user.email } })} className="px-5 py-2.5 border-2 border-[#0a2342] text-[#0a2342] rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center gap-2">
          <i className="fa-solid fa-pen text-xs"></i> Modifier
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-5">Informations entreprise</p>
          <div className="space-y-3">
            {[
              { label: 'Raison sociale',          value: user.companyName || 'Mon Entreprise', icon: 'fa-building'     },
              { label: 'N° Registre de Commerce', value: 'RC-123456',                          icon: 'fa-hashtag'      },
              { label: "Secteur d'activité",       value: 'Transport & Logistique',             icon: 'fa-briefcase'    },
              { label: 'Email',                    value: user.email || 'contact@entreprise.com', icon: 'fa-envelope'   },
              { label: 'Téléphone',                value: user.phone || '+212 5 22 00 00 00',   icon: 'fa-phone'        },
              { label: 'Ville',                    value: 'Casablanca',                         icon: 'fa-location-dot' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-[#f8fafc]">
                <div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${f.icon} text-white text-xs`}></i></div>
                <div className="flex-1 min-w-0"><p className="text-xs text-gray-400">{f.label}</p><p className="text-sm font-bold text-[#0a2342] truncate">{f.value}</p></div>
              </div>
            ))}
          </div>
          <button onClick={() => onDrawer({ type: 'edit-company', data: { companyName: user.companyName, email: user.email } })} className="mt-5 w-full bg-[#228B22] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-pen"></i> Modifier les informations
          </button>
        </div>
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Sécurité</p>
            {[{ icon: 'fa-lock', label: 'Changer le mot de passe', sub: 'Dernière modif. il y a 2 mois' }, { icon: 'fa-shield-halved', label: 'Authentification à 2 facteurs', sub: 'Non activée' }, { icon: 'fa-users-gear', label: 'Gestion des accès', sub: '1 administrateur actif' }].map(s => (
              <button key={s.label} className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#0a2342] transition text-left mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${s.icon} text-white text-xs`}></i></div>
                <div className="flex-1"><p className="text-sm font-bold text-[#0a2342]">{s.label}</p><p className="text-xs text-gray-400">{s.sub}</p></div>
                <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Notifications</p>
            {[{ label: 'Alertes sinistres flotte', enabled: true }, { label: 'Mises à jour contrat', enabled: true }, { label: 'Rapports mensuels auto', enabled: true }, { label: 'Newsletter', enabled: false }].map(n => (
              <div key={n.label} className="flex items-center justify-between py-2">
                <span className="text-sm text-[#0a2342] font-medium">{n.label}</span>
                <div className={`w-10 h-5 rounded-full ${n.enabled ? 'bg-[#228B22]' : 'bg-gray-200'} relative cursor-pointer`}>
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${n.enabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
