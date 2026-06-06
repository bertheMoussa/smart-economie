import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroCar from '../../assets/images/hero-car-2.png';

const formules = [
  {
    id: 'tiers-simple',
    color: 'blue',
    accent: 'bg-blue-500',
    border: 'border-blue-500',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    tagBg: 'bg-blue-50 text-blue-600',
    btnClass: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    icon: 'fa-car',
    tag: 'Essentiel',
    title: 'Tiers Simple',
    desc: 'La protection minimale obligatoire. Idéale pour les petits véhicules ou les budgets serrés.',
    garanties: [
      { label: 'Responsabilité civile obligatoire', ok: true },
      { label: 'Déclaration de sinistre en ligne', ok: true },
      { label: 'Espace membre dédié', ok: true },
      { label: 'Support client 24/7', ok: true },
      { label: 'Vol & Incendie', ok: false },
      { label: 'Bris de glace', ok: false },
      { label: 'Dommages tous accidents', ok: false },
    ],
  },
  {
    id: 'tiers-etendu',
    color: 'green',
    accent: 'bg-[#228B22]',
    border: 'border-[#228B22]',
    iconBg: 'bg-green-50',
    iconColor: 'text-[#228B22]',
    tagBg: 'bg-green-50 text-[#228B22]',
    btnClass: 'bg-[#228B22] text-white hover:bg-[#1a6b1a]',
    icon: 'fa-shield-halved',
    tag: 'Populaire',
    title: 'Tiers Étendu',
    desc: 'Protection renforcée avec vol, incendie et bris de glace. Le meilleur rapport couverture / engagement.',
    garanties: [
      { label: 'Responsabilité civile obligatoire', ok: true },
      { label: 'Déclaration de sinistre en ligne', ok: true },
      { label: 'Espace membre dédié', ok: true },
      { label: 'Support client prioritaire', ok: true },
      { label: 'Vol & Incendie', ok: true },
      { label: 'Bris de glace', ok: true },
      { label: 'Dommages tous accidents', ok: false },
    ],
  },
  {
    id: 'tous-risques',
    color: 'navy',
    accent: 'bg-[#1e40af]',
    border: 'border-[#1e40af]',
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#1e40af]',
    tagBg: 'bg-blue-50 text-[#1e40af]',
    btnClass: 'border-2 border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white',
    icon: 'fa-crown',
    tag: 'Premium',
    title: 'Tous Risques',
    desc: 'La couverture maximale. Votre véhicule protégé en toutes circonstances, avec un gestionnaire dédié.',
    garanties: [
      { label: 'Responsabilité civile obligatoire', ok: true },
      { label: 'Déclaration de sinistre en ligne', ok: true },
      { label: 'Espace membre dédié', ok: true },
      { label: 'Assistance VIP 24/7', ok: true },
      { label: 'Vol & Incendie', ok: true },
      { label: 'Bris de glace', ok: true },
      { label: 'Dommages tous accidents', ok: true },
    ],
  },
];

const tableRows = [
  { label: 'Responsabilité civile',       ts: true,  te: true,  tr: true  },
  { label: 'Vol & Incendie',              ts: false, te: true,  tr: true  },
  { label: 'Bris de glace',              ts: false, te: true,  tr: true  },
  { label: 'Assistance dépannage',        ts: false, te: true,  tr: true  },
  { label: 'Dommages tous accidents',     ts: false, te: false, tr: true  },
  { label: 'Véhicule de remplacement',    ts: false, te: false, tr: true  },
  { label: 'Gestionnaire dédié',          ts: false, te: false, tr: true  },
  { label: 'Support client',             ts: 'Standard', te: 'Prioritaire', tr: 'VIP 24/7' },
  { label: 'Cotisation mensuelle',        ts: 'Aucune', te: 'Aucune', tr: 'Aucune' },
];

const faqs = [
  {
    q: 'Y a-t-il une cotisation mensuelle ?',
    a: "Non. Smart-Économie ne prélève aucune prime mensuelle. Vous ne contribuez qu'en cas de sinistre déclaré par un membre de la communauté.",
  },
  {
    q: "Que se passe-t-il en cas d'accident ?",
    a: 'Vous déclarez votre sinistre depuis votre espace membre. La communauté est mobilisée pour contribuer à votre prise en charge selon votre formule.',
  },
  {
    q: 'Puis-je changer de formule après adhésion ?',
    a: 'Oui, à tout moment et sans pénalité depuis votre espace personnel.',
  },
  {
    q: 'Ce modèle est-il éthique et responsable ?',
    a: 'Oui. Notre modèle est fondé sur la solidarité mutuelle : ni intérêt, ni spéculation, aucun profit sur les contributions des membres.',
  },
  {
    q: 'Quand ma couverture démarre-t-elle ?',
    a: "Dès validation de votre adhésion. Vous êtes protégé le jour même, sans délai de carence.",
  },
];

export default function Subscription() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selected, setSelected] = useState<string>('tiers-etendu');

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a2342] flex items-center">
        {/* Image de fond avec overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroCar})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342] via-[#0a2342]/90 to-transparent" />
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-8 right-32 w-48 h-48 rounded-full bg-[#228B22]/10 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-8 max-w-6xl py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Colonne gauche — texte */}
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#228B22] bg-[#228B22]/15 px-4 py-1.5 rounded-full mb-5">
                Adhésion solidaire
              </span>
              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
                Choisissez votre<br />
                <span className="text-[#4ade80]">formule de couverture</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Assurance solidaire islamique — <strong className="text-white">aucune cotisation mensuelle</strong>.
                Adhérez, choisissez votre couverture et ne contribuez qu'en cas de sinistre réel.
              </p>
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                <i className="fa-solid fa-circle-check text-[#4ade80] text-lg shrink-0"></i>
                <p className="text-white/80 text-sm">
                  Contrairement aux assurances classiques, vous ne payez rien chaque mois.
                  La communauté intervient <strong className="text-white">uniquement lors d'un sinistre</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formules ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Couvertures</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Nos formules d'assurance auto</h2>
            <p className="text-gray-400 mt-3">Contribution solidaire uniquement en cas de sinistre</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formules.map((f) => {
              const isSelected = selected === f.id;
              return (
                <div
                  key={f.id}
                  onClick={() => setSelected(f.id)}
                  className={`relative bg-white rounded-2xl border-2 cursor-pointer transition-all duration-200 overflow-hidden
                    ${isSelected ? `${f.border} shadow-xl` : 'border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1'}`}
                >
                  {/* Bande couleur top */}
                  <div className={`h-1.5 w-full ${f.accent}`}></div>

                  {/* Badge populaire */}
                  {f.tag === 'Populaire' && (
                    <div className="absolute top-5 right-5 bg-[#228B22] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Populaire
                    </div>
                  )}

                  <div className="p-7">
                    {/* Icône + tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center`}>
                        <i className={`fa-solid ${f.icon} ${f.iconColor} text-xl`}></i>
                      </div>
                      {f.tag !== 'Populaire' && (
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${f.tagBg}`}>
                          {f.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0a2342] mb-1">{f.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{f.desc}</p>

                    {/* Garanties */}
                    <ul className="space-y-2.5 mb-7">
                      {f.garanties.map((g) => (
                        <li key={g.label} className="flex items-center gap-2.5 text-sm">
                          {g.ok ? (
                            <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                              <i className="fa-solid fa-check text-[#228B22] text-xs"></i>
                            </span>
                          ) : (
                            <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                              <i className="fa-solid fa-xmark text-gray-300 text-xs"></i>
                            </span>
                          )}
                          <span className={g.ok ? 'text-gray-700' : 'text-gray-300'}>{g.label}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/login"
                      onClick={(e) => e.stopPropagation()}
                      className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${f.btnClass}`}
                    >
                      Adhérer — {f.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
            <i className="fa-solid fa-shield-halved text-[#228B22]"></i>
            Toutes les formules : contribution solidaire uniquement en cas de sinistre — aucune prime mensuelle
          </p>
        </div>
      </section>

      {/* ── Tableau comparatif ───────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Détail</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Comparaison des formules</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-8 py-5 text-left text-sm font-semibold text-gray-400 w-2/5">Garanties</th>
                  <th className="px-6 py-5 text-center text-sm font-bold text-blue-500">
                    <i className="fa-solid fa-car mr-1"></i> Tiers Simple
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-bold text-[#228B22] bg-green-50/60">
                    <i className="fa-solid fa-shield-halved mr-1"></i> Tiers Étendu
                  </th>
                  <th className="px-6 py-5 text-center text-sm font-bold text-[#1e40af]">
                    <i className="fa-solid fa-crown mr-1"></i> Tous Risques
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.label}
                    className={`border-b border-gray-50 transition hover:bg-gray-50 ${i === tableRows.length - 1 ? 'bg-green-50/40 font-bold' : ''}`}>
                    <td className="px-8 py-4 text-sm text-gray-600 font-medium">{row.label}</td>
                    {[row.ts, row.te, row.tr].map((val, ci) => (
                      <td key={ci} className={`px-6 py-4 text-center ${ci === 1 ? 'bg-green-50/40' : ''}`}>
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
                            <i className="fa-solid fa-check text-[#228B22] text-xs"></i>
                          </span>
                        ) : val === false ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100">
                            <i className="fa-solid fa-xmark text-gray-300 text-xs"></i>
                          </span>
                        ) : (
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                            val === 'Aucune' ? 'bg-green-100 text-[#228B22]' :
                            val === 'VIP 24/7' ? 'bg-blue-50 text-[#1e40af]' :
                            val === 'Prioritaire' ? 'bg-green-50 text-[#228B22]' :
                            'bg-gray-100 text-gray-500'
                          }`}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">FAQ</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Questions fréquentes</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-[#0a2342] text-sm pr-4">{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-[#228B22] text-xs transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-7 pb-5 border-t border-gray-100 bg-gray-50">
                    <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">
            Rejoignez-nous
          </span>
          <h2 className="text-4xl font-extrabold text-[#0a2342] mb-4">
            Prêt à adhérer ?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Aucune cotisation mensuelle. Couverture immédiate dès le premier jour d'adhésion.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-[#228B22] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1a6b1a] transition-all shadow-lg text-base"
            >
              Commencer mon adhésion
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#0a2342] text-[#0a2342] px-10 py-4 rounded-full font-bold hover:bg-[#0a2342] hover:text-white transition-all text-base"
            >
              <i className="fa-solid fa-headset"></i>
              Parler à un conseiller
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
