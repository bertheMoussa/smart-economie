import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

type Section =
  | 'dashboard' | 'vehicules' | 'contrats' | 'sinistres'
  | 'paiements' | 'documents' | 'messages' | 'assistance' | 'profil';

type DrawerState = { type: string; data?: Record<string, unknown> } | null;

/* ── Drawer ──────────────────────────────────────────────────────── */
function Drawer({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 ml-auto w-[500px] h-full bg-white shadow-2xl flex flex-col">
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

/* ── Contenu des drawers ────────────────────────────────────────── */
function DrawerContent({ type, data, onClose }: { type: string; data?: Record<string,unknown>; onClose: () => void }) {
  if (type === 'add-vehicle') return (
    <Drawer title="Ajouter un véhicule" onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Marque & Modèle" placeholder="Ex : Peugeot 3008" icon="fa-car" />
          <FInput label="Immatriculation" placeholder="AB-123-CD" icon="fa-hashtag" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Année" placeholder="2022" type="number" icon="fa-calendar" />
          <FSelect label="Formule souhaitée" options={['Tiers Simple', 'Tiers Étendu', 'Tous Risques']} />
        </div>
        <FInput label="Numéro de châssis (VIN)" placeholder="VF1234…" icon="fa-barcode" />
        <FSelect label="Rôle du véhicule" options={['Principal', 'Secondaire']} />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-plus"></i> Ajouter
          </button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'edit-vehicle') return (
    <Drawer title={`Modifier — ${data?.model as string}`} onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Marque & Modèle" defaultValue={data?.model as string} icon="fa-car" />
          <FInput label="Immatriculation" defaultValue={data?.plate as string} icon="fa-hashtag" />
        </div>
        <FSelect label="Formule" options={['Tiers Simple', 'Tiers Étendu', 'Tous Risques']} defaultValue={data?.formule as string} />
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
          <h2 className="text-2xl font-extrabold">{data?.model as string}</h2>
          <p className="text-white/50 mt-1">{data?.plate as string}</p>
        </div>
        {[{ label: 'Formule', value: data?.formule as string, icon: 'fa-shield-halved' }, { label: 'Statut', value: data?.status as string, icon: 'fa-circle-check' }, { label: 'Type', value: data?.tag as string, icon: 'fa-car' }].map(d => (
          <div key={d.label} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
            <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${d.icon} text-white text-sm`}></i></div>
            <div><p className="text-xs text-gray-400">{d.label}</p><p className="text-sm font-bold text-[#0a2342]">{d.value || '—'}</p></div>
          </div>
        ))}
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-file-pdf"></i> Attestation
          </button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-[#0a2342] text-[#0a2342] font-bold text-sm hover:bg-[#0a2342] hover:text-white transition">Modifier</button>
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
          <h2 className="text-xl font-extrabold text-white">{data?.desc as string}</h2>
          <p className="text-white/50 text-sm mt-1">{data?.date as string}</p>
        </div>
        {[{ label: 'Référence', value: data?.ref as string, icon: 'fa-hashtag' }, { label: 'Statut', value: data?.status as string, icon: 'fa-circle-info' }, { label: 'Date', value: data?.date as string, icon: 'fa-calendar' }].map(d => (
          <div key={d.label} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
            <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className={`fa-solid ${d.icon} text-white text-sm`}></i></div>
            <div><p className="text-xs text-gray-400">{d.label}</p><p className="text-sm font-bold text-[#0a2342]">{d.value || '—'}</p></div>
          </div>
        ))}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-3">Pièces jointes</p>
          {['Constat amiable.pdf', 'Photos dommages.zip'].map(f => (
            <div key={f} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 mb-2 hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0"><i className="fa-solid fa-file text-white text-xs"></i></div>
              <span className="text-sm text-[#0a2342] font-medium flex-1">{f}</span>
              <i className="fa-solid fa-download text-[#228B22] text-sm"></i>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="w-full py-3 rounded-xl bg-[#0a2342] text-white font-bold text-sm hover:bg-[#1a3a6b] transition flex items-center justify-center gap-2">
          <i className="fa-solid fa-download"></i> Télécharger le dossier
        </button>
      </div>
    </Drawer>
  );

  if (type === 'view-message') return (
    <Drawer title="Message" onClose={onClose}>
      <div className="space-y-5">
        <div className="flex items-start gap-4 p-4 bg-[#f8fafc] rounded-2xl border border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className="fa-solid fa-building text-white text-sm"></i></div>
          <div><p className="font-extrabold text-[#0a2342] text-sm">{data?.from as string}</p><p className="text-xs text-gray-400 mt-0.5">{data?.date as string}</p></div>
        </div>
        <h3 className="text-lg font-extrabold text-[#0a2342]">{data?.subject as string}</h3>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3 p-4 bg-[#f8fafc] rounded-2xl border border-gray-100">
          <p>Bonjour {data?.to as string},</p>
          <p>{data?.body as string}</p>
          <p>Pour toute question, n'hésitez pas à nous contacter via l'assistance.</p>
          <p className="pt-2 font-semibold text-[#0a2342]">L'équipe Smart-Économie</p>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2"><i className="fa-solid fa-reply"></i> Répondre</button>
          <button onClick={onClose} className="px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Archiver</button>
        </div>
      </div>
    </Drawer>
  );

  if (type === 'download-doc') return (
    <Drawer title="Télécharger le document" onClose={onClose}>
      <div className="space-y-5">
        <div className="flex items-center gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-gray-100">
          <div className="w-12 h-12 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0"><i className="fa-solid fa-file-pdf text-white text-xl"></i></div>
          <div><p className="font-bold text-[#0a2342]">{data?.name as string}</p><p className="text-xs text-gray-400 mt-0.5">{data?.date as string} · {data?.size as string}</p></div>
        </div>
        <button onClick={onClose} className="w-full py-3.5 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2"><i className="fa-solid fa-download"></i> Télécharger</button>
        <button onClick={onClose} className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
      </div>
    </Drawer>
  );

  if (type === 'edit-profile') return (
    <Drawer title="Modifier mes informations" onClose={onClose}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <FInput label="Prénom" defaultValue={data?.firstName as string} icon="fa-user" />
          <FInput label="Nom" defaultValue="Benali" icon="fa-user" />
        </div>
        <FInput label="Email" defaultValue={data?.email as string} icon="fa-envelope" type="email" />
        <FInput label="Téléphone" placeholder="+212 6 00 00 00 00" icon="fa-phone" type="tel" />
        <FInput label="Adresse" placeholder="123 Rue Exemple" icon="fa-location-dot" />
        <FInput label="Ville" placeholder="Casablanca" icon="fa-city" />
        <div className="flex gap-3 pt-2">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition">Annuler</button>
          <button onClick={onClose} className="flex-1 py-3 rounded-xl bg-[#228B22] text-white font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2"><i className="fa-solid fa-check"></i> Enregistrer</button>
        </div>
      </div>
    </Drawer>
  );

  return null;
}

export default function DashboardParticulier() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [active, setActive] = useState<Section>('dashboard');
  const [drawer, setDrawer] = useState<DrawerState>(null);

  if (!user) { navigate('/login'); return null; }

  const navItems: { label: string; icon: string; section: Section; badge?: string }[] = [
    { label: 'Tableau de bord',     icon: 'fa-chart-pie',     section: 'dashboard'  },
    { label: 'Mes véhicules',       icon: 'fa-car',           section: 'vehicules', badge: '2' },
    { label: 'Mes contrats',        icon: 'fa-file-contract', section: 'contrats'   },
    { label: 'Sinistres',           icon: 'fa-car-burst',     section: 'sinistres'  },
    { label: 'Paiements',           icon: 'fa-credit-card',   section: 'paiements'  },
    { label: 'Documents',           icon: 'fa-folder-open',   section: 'documents'  },
    { label: 'Messages',            icon: 'fa-envelope',      section: 'messages',  badge: '3' },
    { label: 'Assistance 24/7',     icon: 'fa-headset',       section: 'assistance' },
    { label: 'Profil & paramètres', icon: 'fa-user-gear',     section: 'profil'     },
  ];

  const initials = (user.firstName?.slice(0, 1) || 'U').toUpperCase();
  const currentSection = navItems.find((n) => n.section === active);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = (section: Section) => {
    setActive(section);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      {drawer && <DrawerContent type={drawer.type} data={drawer.data} onClose={() => setDrawer(null)} />}

      {/* Overlay mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ──────────────────────────────────────────────────── */}
      <aside className={`fixed lg:relative inset-y-0 left-0 z-40 lg:z-auto w-64 shrink-0 bg-[#0a2342] flex flex-col min-h-screen transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="px-6 py-7 border-b border-white/10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Shield className="size-7 text-[#C9A227]" />
            <span className="text-white font-extrabold text-base tracking-tight">
              Smart-<span className="text-[#C9A227]">Economie</span>
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60 hover:text-white">
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNav(item.section)}
              className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-left transition-all ${
                active === item.section
                  ? 'bg-[#228B22] text-white font-bold'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="flex items-center gap-3">
                <i className={`fa-solid ${item.icon} w-4 text-center`} />
                <span className="font-medium">{item.label}</span>
              </span>
              {item.badge && (
                <span className="min-w-[20px] h-5 flex items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="px-4 py-5 border-t border-white/10">
          <div className="rounded-xl bg-white/8 border border-white/10 p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#228B22] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-gift text-white text-xs"></i>
              </div>
              <p className="text-sm font-bold text-white">Parrainez un proche</p>
            </div>
            <p className="text-xs text-white/50 mb-3">Recevez jusqu'à 50€ de récompense</p>
            <button className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white rounded-lg px-3 py-2 text-xs font-bold transition">
              Parrainer maintenant
            </button>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white transition py-2 rounded-lg hover:bg-white/10"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* ── Contenu principal ─────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
          <div className="px-4 md:px-8 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Hamburger mobile */}
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition shrink-0">
                <i className="fa-solid fa-bars text-base"></i>
              </button>
              <div className="min-w-0">
                <h1 className="text-base md:text-xl font-extrabold text-[#0a2342] truncate">
                  {currentSection?.label ?? 'Tableau de bord'}
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">Bonjour, {user.firstName} — Bienvenue dans votre espace</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 transition">
                <i className="fa-solid fa-bell text-sm md:text-base"></i>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-100">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-[#0a2342]">{user.firstName} Benali</p>
                  <p className="text-xs text-gray-400">Membre assuré</p>
                </div>
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#0a2342] flex items-center justify-center text-white font-bold text-sm">
                  {initials}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Contenu dynamique */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {active === 'dashboard'  && <SectionDashboard  onNavigate={setActive} onDrawer={setDrawer} />}
          {active === 'vehicules'  && <SectionVehicules  onDrawer={setDrawer} />}
          {active === 'contrats'   && <SectionContrats   onDrawer={setDrawer} />}
          {active === 'sinistres'  && <SectionSinistres  navigate={navigate} onDrawer={setDrawer} />}
          {active === 'paiements'  && <SectionPaiements />}
          {active === 'documents'  && <SectionDocuments  onDrawer={setDrawer} />}
          {active === 'messages'   && <SectionMessages   onDrawer={setDrawer} user={user} />}
          {active === 'assistance' && <SectionAssistance navigate={navigate} />}
          {active === 'profil'     && <SectionProfil     user={user} onDrawer={setDrawer} />}
        </main>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   TABLEAU DE BORD
══════════════════════════════════════════════════════════════════ */
function SectionDashboard({ onNavigate, onDrawer }: { onNavigate: (s: Section) => void; onDrawer: (d: DrawerState) => void }) {
  const kpis = [
    { label: 'Contribution mensuelle', value: '0 €',        sub: 'Aucune cotisation fixe',     icon: 'fa-ban'           },
    { label: 'Formule active',         value: 'Tous Risques', sub: 'Depuis le 15 jan. 2024',  icon: 'fa-shield-halved' },
    { label: 'Sinistres déclarés',     value: '1',           sub: 'Sur les 36 derniers mois', icon: 'fa-car-burst'     },
    { label: 'Assistance',             value: '24/7',        sub: 'Disponible en permanence', icon: 'fa-headset'       },
  ];

  const quickActions: { label: string; icon: string; section: Section }[] = [
    { label: 'Déclarer un sinistre',    icon: 'fa-car-burst',    section: 'sinistres'  },
    { label: 'Télécharger attestation', icon: 'fa-file-pdf',     section: 'documents'  },
    { label: 'Contacter le support',    icon: 'fa-headset',      section: 'assistance' },
    { label: 'Ajouter un conducteur',   icon: 'fa-user-plus',    section: 'vehicules'  },
    { label: 'Voir mes documents',      icon: 'fa-folder-open',  section: 'documents'  },
    { label: 'Modifier mon profil',     icon: 'fa-user-gear',    section: 'profil'     },
  ];

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
              <i className={`fa-solid ${k.icon} text-white text-base`}></i>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">{k.label}</p>
              <p className="text-xl font-extrabold text-[#0a2342] leading-tight">{k.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{k.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contrat + Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <div className="col-span-1 md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-[#0a2342] px-6 py-5 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Contrat actif</span>
              <h2 className="text-xl font-extrabold text-white mt-1">Peugeot 3008 GT</h2>
              <p className="text-white/50 text-sm">Contrat n° ASS-2024-15678 · AB-123-CD</p>
            </div>
            <div className="flex items-center gap-2 bg-[#228B22]/20 border border-[#228B22]/30 rounded-full px-4 py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#228B22]"></div>
              <span className="text-[#4ade80] text-xs font-bold">Actif</span>
            </div>
          </div>
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-5">
              {[
                { label: 'Formule',      value: 'Tous Risques',  icon: 'fa-shield-halved' },
                { label: 'Échéance',     value: '15 juin 2025',  icon: 'fa-calendar'      },
                { label: 'Contribution', value: '0 € / mois',    icon: 'fa-ban'           },
              ].map((d) => (
                <div key={d.label} className="bg-[#f8fafc] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center">
                      <i className={`fa-solid ${d.icon} text-white text-xs`}></i>
                    </div>
                    <p className="text-xs text-gray-400">{d.label}</p>
                  </div>
                  <p className="text-sm font-bold text-[#0a2342]">{d.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('documents')}
                className="flex-1 bg-[#228B22] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-file-pdf"></i> Attestation
              </button>
              <button
                onClick={() => onNavigate('contrats')}
                className="flex-1 border-2 border-[#0a2342] text-[#0a2342] py-2.5 rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-eye"></i> Voir le contrat
              </button>
            </div>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0a2342] mb-4">Actions rapides</p>
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 md:gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                onClick={() => onNavigate(a.section)}
                className="group flex flex-col items-center gap-2.5 p-3.5 rounded-xl bg-[#f8fafc] hover:bg-[#0a2342] border border-gray-100 hover:border-[#0a2342] transition-all text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a2342] group-hover:bg-white flex items-center justify-center transition-all">
                  <i className={`fa-solid ${a.icon} text-white group-hover:text-[#0a2342] text-sm transition-all`}></i>
                </div>
                <span className="text-[10px] font-semibold text-gray-500 group-hover:text-white leading-tight transition-all">
                  {a.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Véhicules + Sinistres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Mes véhicules</span>
              <h3 className="text-base font-extrabold text-[#0a2342] mt-1">2 véhicules assurés</h3>
            </div>
            <button onClick={() => onNavigate('vehicules')} className="text-xs font-bold text-[#0a2342] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">Voir tous</button>
          </div>
          <div className="space-y-3">
            {[
              { model: 'Peugeot 3008 GT', plate: 'AB-123-CD', tag: 'Principal',  color: 'from-blue-500 to-[#0a2342]'  },
              { model: 'Renault Clio V',  plate: 'EF-456-GH', tag: 'Secondaire', color: 'from-[#228B22] to-green-800' },
            ].map((v) => (
              <div key={v.plate} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className={`w-14 h-10 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center shrink-0`}>
                  <i className="fa-solid fa-car text-white text-base"></i>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#0a2342] text-sm">{v.model}</p>
                  <p className="text-xs text-gray-400">{v.plate}</p>
                </div>
                <div className="flex flex-col gap-1.5 items-end">
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{v.tag}</span>
                  <span className="text-xs font-bold text-[#228B22] bg-green-50 px-2.5 py-1 rounded-full">Assuré</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Sinistres récents</span>
              <h3 className="text-base font-extrabold text-[#0a2342] mt-1">Suivi des dossiers</h3>
            </div>
            <button onClick={() => onNavigate('sinistres')} className="text-xs font-bold text-[#0a2342] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">Voir tout</button>
          </div>
          <div className="space-y-3 mb-4">
            {[
              { date: '12 mars 2024', desc: 'Accrochage en parking',   ref: 'SIN-2024-00125', status: 'Clôturé',  icon: 'fa-check',          iconBg: 'bg-[#228B22]', badge: 'text-[#228B22] bg-green-50' },
              { date: '5 mai 2024',   desc: 'Accident sur autoroute', ref: 'SIN-2024-00287', status: 'En cours', icon: 'fa-hourglass-half', iconBg: 'bg-[#0a2342]', badge: 'text-blue-600 bg-blue-50'   },
            ].map((s) => (
              <div key={s.ref} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
                <div className={`w-9 h-9 rounded-xl ${s.iconBg} flex items-center justify-center shrink-0`}>
                  <i className={`fa-solid ${s.icon} text-white text-xs`}></i>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#0a2342] text-sm">{s.date}</p>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${s.badge}`}>{s.status}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('sinistres')}
            className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl font-bold text-sm transition border border-red-100"
          >
            <i className="fa-solid fa-car-burst text-sm"></i>
            Déclarer un sinistre
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MES VÉHICULES
══════════════════════════════════════════════════════════════════ */
function SectionVehicules({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  const vehicles = [
    { model: 'Peugeot 3008 GT', plate: 'AB-123-CD', tag: 'Principal',  year: '2021', color: 'from-blue-500 to-[#0a2342]',  formule: 'Tous Risques', status: 'Assuré' },
    { model: 'Renault Clio V',  plate: 'EF-456-GH', tag: 'Secondaire', year: '2020', color: 'from-[#228B22] to-green-800', formule: 'Tiers Étendu', status: 'Assuré' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Gérez vos véhicules assurés et ajoutez-en de nouveaux.</p>
        <button onClick={() => onDrawer({ type: 'add-vehicle' })} className="bg-[#228B22] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> Ajouter un véhicule
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {vehicles.map((v) => (
          <div key={v.plate} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-6">
            <div className={`w-20 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center shrink-0`}>
              <i className="fa-solid fa-car text-white text-2xl"></i>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-extrabold text-[#0a2342] text-lg">{v.model}</h3>
                <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{v.tag}</span>
                <span className="text-xs font-bold bg-green-50 text-[#228B22] px-2.5 py-1 rounded-full">{v.status}</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span><i className="fa-solid fa-hashtag mr-1.5 text-xs"></i>{v.plate}</span>
                <span><i className="fa-solid fa-calendar mr-1.5 text-xs"></i>{v.year}</span>
                <span><i className="fa-solid fa-shield-halved mr-1.5 text-xs"></i>{v.formule}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => onDrawer({ type: 'view-vehicle', data: v as unknown as Record<string,unknown> })} className="px-4 py-2 rounded-xl border-2 border-[#0a2342] text-[#0a2342] text-sm font-bold hover:bg-[#0a2342] hover:text-white transition flex items-center gap-2">
                <i className="fa-solid fa-eye text-xs"></i> Détails
              </button>
              <button onClick={() => onDrawer({ type: 'download-doc', data: { name: `Attestation ${v.model}`, date: '15 jan. 2024', size: '245 Ko' } })} className="px-4 py-2 rounded-xl bg-[#0a2342] text-white text-sm font-bold hover:bg-[#1a3a6b] transition flex items-center gap-2">
                <i className="fa-solid fa-file-pdf text-xs"></i> Attestation
              </button>
              <button onClick={() => onDrawer({ type: 'edit-vehicle', data: v as unknown as Record<string,unknown> })} className="px-4 py-2 rounded-xl border border-gray-200 text-gray-400 text-sm font-bold hover:border-[#0a2342] hover:text-[#0a2342] transition flex items-center gap-2">
                <i className="fa-solid fa-pen text-xs"></i> Modifier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ajouter */}
      <button onClick={() => onDrawer({ type: 'add-vehicle' })} className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-[#228B22] hover:text-[#228B22] transition text-sm font-semibold">
        <i className="fa-solid fa-plus-circle text-lg"></i>
        Ajouter un nouveau véhicule
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MES CONTRATS
══════════════════════════════════════════════════════════════════ */
function SectionContrats({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  return (
    <div className="space-y-6">
      {/* Contrat principal */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-[#0a2342] px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Contrat en cours</span>
            <h2 className="text-xl font-extrabold text-white mt-1">Peugeot 3008 GT — Tous Risques</h2>
            <p className="text-white/50 text-sm mt-1">Contrat n° ASS-2024-15678 · Souscrit le 15 jan. 2024</p>
          </div>
          <div className="flex items-center gap-2 bg-[#228B22]/20 border border-[#228B22]/30 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full bg-[#228B22]"></div>
            <span className="text-[#4ade80] text-xs font-bold">Actif</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Formule',         value: 'Tous Risques',  icon: 'fa-shield-halved' },
              { label: 'Contribution',    value: '0 € / mois',   icon: 'fa-ban'           },
              { label: 'Échéance',        value: '15 juin 2025', icon: 'fa-calendar'      },
              { label: 'Véhicule',        value: 'AB-123-CD',    icon: 'fa-car'           },
            ].map((d) => (
              <div key={d.label} className="bg-[#f8fafc] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center">
                    <i className={`fa-solid ${d.icon} text-white text-xs`}></i>
                  </div>
                  <p className="text-xs text-gray-400">{d.label}</p>
                </div>
                <p className="text-sm font-bold text-[#0a2342]">{d.value}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-5 mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Garanties incluses</p>
            <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 md:gap-3">
              {['Responsabilité civile obligatoire', 'Vol & Incendie', 'Bris de glace', 'Assistance dépannage 24/7', 'Dommages tous accidents', 'Véhicule de remplacement'].map((g) => (
                <div key={g} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-[#228B22] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-white text-[10px]"></i>
                  </div>
                  {g}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => onDrawer({ type: 'download-doc', data: { name: 'Contrat ASS-2024-15678', date: '15 jan. 2024', size: '1,2 Mo' } })} className="flex-1 bg-[#228B22] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
              <i className="fa-solid fa-file-pdf"></i> Télécharger le contrat
            </button>
            <button onClick={() => onDrawer({ type: 'download-doc', data: { name: "Attestation d'assurance — Peugeot 3008 GT", date: '15 jan. 2024', size: '245 Ko' } })} className="flex-1 bg-[#0a2342] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a3a6b] transition flex items-center justify-center gap-2">
              <i className="fa-solid fa-file-pdf"></i> Attestation d'assurance
            </button>
            <button className="px-6 border-2 border-gray-200 text-gray-500 py-3 rounded-xl font-bold text-sm hover:border-[#0a2342] hover:text-[#0a2342] transition flex items-center gap-2">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Modifier la formule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SINISTRES
══════════════════════════════════════════════════════════════════ */
function SectionSinistres({ navigate, onDrawer }: { navigate: (path: string) => void; onDrawer: (d: DrawerState) => void }) {
  const claims = [
    { date: '5 mai 2024',   desc: 'Accident sur autoroute',  ref: 'SIN-2024-00287', status: 'En cours', icon: 'fa-hourglass-half', iconBg: 'bg-[#0a2342]', badge: 'text-blue-600 bg-blue-50'    },
    { date: '12 mars 2024', desc: 'Accrochage en parking',   ref: 'SIN-2024-00125', status: 'Clôturé',  icon: 'fa-check',          iconBg: 'bg-[#228B22]', badge: 'text-[#228B22] bg-green-50'  },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Suivez vos dossiers de sinistres et déclarez un nouveau sinistre.</p>
        <button
          onClick={() => navigate('/claims')}
          className="bg-red-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-700 transition flex items-center gap-2"
        >
          <i className="fa-solid fa-car-burst"></i> Déclarer un sinistre
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
        {[
          { label: 'Total déclarés', value: '2', icon: 'fa-folder-open' },
          { label: 'En cours',       value: '1', icon: 'fa-hourglass-half' },
          { label: 'Clôturés',       value: '1', icon: 'fa-check-circle' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
              <i className={`fa-solid ${s.icon} text-white text-base`}></i>
            </div>
            <div>
              <p className="text-xs text-gray-400">{s.label}</p>
              <p className="text-2xl font-extrabold text-[#0a2342]">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Historique des sinistres</p>
        </div>
        <div className="divide-y divide-gray-50">
          {claims.map((c) => (
            <div key={c.ref} className="flex items-center gap-5 px-6 py-5">
              <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                <i className={`fa-solid ${c.icon} text-white text-sm`}></i>
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#0a2342] text-sm">{c.desc}</p>
                <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                  <span><i className="fa-solid fa-calendar mr-1"></i>{c.date}</span>
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

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
          <i className="fa-solid fa-circle-info text-white text-sm"></i>
        </div>
        <div>
          <p className="font-bold text-[#0a2342] text-sm mb-1">Délai de déclaration</p>
          <p className="text-sm text-gray-500">Vous devez déclarer votre sinistre dans les <strong>5 jours ouvrés</strong> suivant l'accident. En cas d'urgence, appelez notre assistance 24/7.</p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PAIEMENTS
══════════════════════════════════════════════════════════════════ */
function SectionPaiements() {
  const history = [
    { date: '12 mai 2024',  label: 'Contribution solidaire — Sinistre SIN-2024-00125', amount: '-45,00 €',  type: 'debit'  },
    { date: '28 avr. 2024', label: 'Contribution solidaire — Sinistre SIN-2024-00098', amount: '-32,50 €',  type: 'debit'  },
    { date: '15 jan. 2024', label: 'Frais d\'adhésion annuels',                        amount: '-20,00 €',  type: 'debit'  },
  ];

  return (
    <div className="space-y-6">
      {/* Banner 0€ */}
      <div className="bg-[#0a2342] rounded-2xl p-6 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#228B22] flex items-center justify-center shrink-0">
          <i className="fa-solid fa-ban text-white text-2xl"></i>
        </div>
        <div>
          <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">Modèle solidaire</p>
          <h2 className="text-2xl font-extrabold text-white mb-1">0 € de cotisation mensuelle</h2>
          <p className="text-white/60 text-sm">Vous ne contribuez qu'en cas de sinistre déclaré — aucun prélèvement automatique.</p>
        </div>
      </div>

      {/* Méthode de paiement */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Moyen de paiement</p>
        <div className="flex items-center gap-4 p-4 border-2 border-[#0a2342] rounded-xl mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
            <i className="fa-solid fa-credit-card text-white"></i>
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#0a2342] text-sm">Carte bancaire •••• 4521</p>
            <p className="text-xs text-gray-400">Expire le 09/2027</p>
          </div>
          <span className="text-xs font-bold text-[#228B22] bg-green-50 px-3 py-1 rounded-full">Par défaut</span>
        </div>
        <button className="flex items-center gap-2 text-sm text-[#0a2342] font-bold border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition">
          <i className="fa-solid fa-plus text-xs"></i> Ajouter un moyen de paiement
        </button>
      </div>

      {/* Historique */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Historique des contributions</p>
          <button className="text-xs text-[#0a2342] font-bold border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
            <i className="fa-solid fa-download mr-1"></i> Exporter
          </button>
        </div>
        <div className="divide-y divide-gray-50">
          {history.map((h, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4">
              <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-arrow-up text-white text-xs"></i>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#0a2342]">{h.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{h.date}</p>
              </div>
              <p className="font-bold text-red-500 text-sm">{h.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   DOCUMENTS
══════════════════════════════════════════════════════════════════ */
function SectionDocuments({ onDrawer }: { onDrawer: (d: DrawerState) => void }) {
  const docs = [
    { name: 'Attestation d\'assurance',   date: 'Mise à jour le 15 jan. 2024', icon: 'fa-file-pdf',       size: '245 Ko' },
    { name: 'Contrat d\'assurance',       date: 'Signé le 15 jan. 2024',       icon: 'fa-file-contract',  size: '1,2 Mo' },
    { name: 'Conditions générales',       date: 'Version 2024',                icon: 'fa-file-lines',     size: '3,4 Mo' },
    { name: 'Relevé de contributions',    date: 'Période jan.–mai 2024',       icon: 'fa-file-invoice',   size: '128 Ko' },
    { name: 'Constat amiable vierge',     date: 'Document standard',           icon: 'fa-file-alt',       size: '89 Ko'  },
    { name: 'Procès-verbal sinistre',     date: 'SIN-2024-00125 · 12 mars 2024', icon: 'fa-gavel',        size: '456 Ko' },
  ];

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">Tous vos documents d'assurance disponibles au téléchargement.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {docs.map((d) => (
          <div key={d.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
              <i className={`fa-solid ${d.icon} text-white text-lg`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#0a2342] text-sm">{d.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{d.date}</p>
              <p className="text-xs text-gray-300 mt-0.5">{d.size}</p>
            </div>
            <button onClick={() => onDrawer({ type: 'download-doc', data: d as unknown as Record<string,unknown> })} className="w-9 h-9 rounded-xl bg-[#228B22] hover:bg-[#1a6b1a] flex items-center justify-center transition shrink-0">
              <i className="fa-solid fa-download text-white text-sm"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MESSAGES
══════════════════════════════════════════════════════════════════ */
function SectionMessages({ onDrawer, user }: { onDrawer: (d: DrawerState) => void; user: { firstName?: string } }) {
  const messages = [
    { from: 'Smart-Économie',  subject: 'Votre dossier sinistre a été mis à jour',           date: "Aujourd'hui",  unread: true,  icon: 'fa-building', body: 'Votre dossier de sinistre n° SIN-2024-00287 a été mis à jour. De nouvelles pièces ont été reçues et votre dossier est en cours d\'instruction par notre équipe.'        },
    { from: 'Service clients', subject: 'Confirmation de votre adhésion 2024',                date: 'Il y a 3 j',   unread: true,  icon: 'fa-headset',  body: 'Nous vous confirmons le renouvellement de votre adhésion pour l\'année 2024. Votre couverture Tous Risques reste active sans interruption.'                         },
    { from: 'Smart-Économie',  subject: 'Nouveaux documents disponibles dans votre espace',  date: 'Il y a 1 sem.',unread: true,  icon: 'fa-building', body: 'Votre attestation d\'assurance mise à jour est disponible dans la section Documents. Vous pouvez la télécharger à tout moment depuis votre espace membre.'         },
    { from: 'Service clients', subject: 'Bienvenue chez Smart-Économie !',                    date: '15 jan. 2024', unread: false, icon: 'fa-headset',  body: 'Bienvenue dans la communauté Smart-Économie. Votre adhésion est confirmée et votre couverture est active dès aujourd\'hui. Aucune cotisation mensuelle ne sera prélevée.' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">3 messages non lus.</p>
        <button className="text-xs font-bold text-[#0a2342] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition">
          Tout marquer comme lu
        </button>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        {messages.map((m, i) => (
          <div key={i} onClick={() => onDrawer({ type: 'view-message', data: { ...m, to: user.firstName } as unknown as Record<string,unknown> })} className={`flex items-start gap-4 px-6 py-5 hover:bg-gray-50 cursor-pointer transition ${m.unread ? 'bg-blue-50/30' : ''}`}>
            <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0 mt-0.5">
              <i className={`fa-solid ${m.icon} text-white text-sm`}></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={`text-sm ${m.unread ? 'font-extrabold text-[#0a2342]' : 'font-semibold text-gray-600'}`}>{m.from}</p>
                {m.unread && <span className="w-2 h-2 rounded-full bg-[#228B22]"></span>}
              </div>
              <p className={`text-sm mt-0.5 ${m.unread ? 'text-[#0a2342] font-medium' : 'text-gray-400'}`}>{m.subject}</p>
            </div>
            <p className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{m.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ASSISTANCE
══════════════════════════════════════════════════════════════════ */
function SectionAssistance({ navigate }: { navigate: (path: string) => void }) {
  const channels = [
    { icon: 'fa-phone',        title: 'Ligne urgence',      info: '+22 535 257 390',           sub: '24h/24 — 7j/7',         action: 'Appeler maintenant'  },
    { icon: 'fa-envelope',     title: 'Email assistance',   info: 'sinistres@smart-economie.com', sub: 'Réponse sous 24h',    action: 'Envoyer un email'    },
    { icon: 'fa-comment-dots', title: 'Chat en ligne',      info: 'Disponible maintenant',      sub: 'Temps d\'attente : ~2 min', action: 'Démarrer le chat' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-[#0a2342] rounded-2xl p-6 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-[#228B22] flex items-center justify-center shrink-0">
          <i className="fa-solid fa-headset text-white text-2xl"></i>
        </div>
        <div>
          <p className="text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-1">Assistance</p>
          <h2 className="text-2xl font-extrabold text-white mb-1">Disponible 24h/24, 7j/7</h2>
          <p className="text-white/60 text-sm">Notre équipe est là pour vous accompagner à tout moment.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {channels.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0a2342] flex items-center justify-center mb-4">
              <i className={`fa-solid ${c.icon} text-white text-xl`}></i>
            </div>
            <p className="font-bold text-[#0a2342] text-base mb-1">{c.title}</p>
            <p className="text-sm text-gray-500 mb-0.5">{c.info}</p>
            <p className="text-xs text-gray-400 mb-5">{c.sub}</p>
            <button className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white py-2.5 rounded-xl font-bold text-sm transition">
              {c.action}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Foire aux questions rapide</p>
        <div className="space-y-3">
          {[
            'Comment déclarer un sinistre ?',
            'Quels délais pour un remboursement ?',
            'Comment modifier ma formule ?',
            'Comment télécharger mon attestation ?',
          ].map((q) => (
            <div key={q} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-gray-100 hover:border-[#0a2342] cursor-pointer transition">
              <div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-question text-white text-xs"></i>
              </div>
              <p className="text-sm text-[#0a2342] font-medium flex-1">{q}</p>
              <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/contact')} className="mt-4 w-full border-2 border-[#0a2342] text-[#0a2342] py-3 rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center justify-center gap-2">
          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          Voir toutes les questions fréquentes
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   PROFIL & PARAMÈTRES
══════════════════════════════════════════════════════════════════ */
function SectionProfil({ user, onDrawer }: { user: { firstName?: string; email?: string }; onDrawer: (d: DrawerState) => void }) {
  return (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-[#0a2342] flex items-center justify-center text-white font-extrabold text-3xl shrink-0">
          {(user.firstName?.slice(0, 1) || 'U').toUpperCase()}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-extrabold text-[#0a2342]">{user.firstName} Benali</h2>
          <p className="text-sm text-gray-400">{user.email || 'membre@smart-economie.com'}</p>
          <p className="text-xs text-[#228B22] font-bold mt-1">Membre assuré depuis jan. 2024</p>
        </div>
        <button className="px-5 py-2.5 border-2 border-[#0a2342] text-[#0a2342] rounded-xl font-bold text-sm hover:bg-[#0a2342] hover:text-white transition flex items-center gap-2">
          <i className="fa-solid fa-camera text-xs"></i> Changer la photo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Infos personnelles */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-5">Informations personnelles</p>
          <div className="space-y-4">
            {[
              { label: 'Prénom',    value: user.firstName || 'Mohamed', icon: 'fa-user'         },
              { label: 'Nom',       value: 'Benali',                    icon: 'fa-user'         },
              { label: 'Email',     value: user.email || 'membre@smart-economie.com', icon: 'fa-envelope' },
              { label: 'Téléphone', value: '+212 6 00 00 00 00',        icon: 'fa-phone'        },
              { label: 'Ville',     value: 'Casablanca',                icon: 'fa-location-dot' },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs font-semibold text-gray-400 mb-1.5 block">{f.label}</label>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-[#f8fafc]">
                  <div className="w-7 h-7 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${f.icon} text-white text-xs`}></i>
                  </div>
                  <span className="text-sm text-[#0a2342] font-medium">{f.value}</span>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => onDrawer({ type: 'edit-profile', data: user as unknown as Record<string,unknown> })} className="mt-5 w-full bg-[#228B22] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2">
            <i className="fa-solid fa-pen"></i> Modifier mes informations
          </button>
        </div>

        {/* Sécurité + Préférences */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Sécurité</p>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#0a2342] transition text-left">
                <div className="w-8 h-8 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-lock text-white text-xs"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#0a2342]">Changer le mot de passe</p>
                  <p className="text-xs text-gray-400">Dernière modification il y a 3 mois</p>
                </div>
                <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
              </button>
              <button className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 hover:border-[#0a2342] transition text-left">
                <div className="w-8 h-8 rounded-lg bg-[#0a2342] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-shield-halved text-white text-xs"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#0a2342]">Authentification à 2 facteurs</p>
                  <p className="text-xs text-gray-400">Non activée</p>
                </div>
                <i className="fa-solid fa-chevron-right text-gray-300 text-xs"></i>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">Notifications</p>
            <div className="space-y-3">
              {[
                { label: 'Alertes sinistres',     enabled: true  },
                { label: 'Mises à jour contrat',  enabled: true  },
                { label: 'Newsletter mensuelle',  enabled: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#0a2342] font-medium">{n.label}</span>
                  <div className={`w-10 h-5 rounded-full transition-colors ${n.enabled ? 'bg-[#228B22]' : 'bg-gray-200'} relative cursor-pointer`}>
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${n.enabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
