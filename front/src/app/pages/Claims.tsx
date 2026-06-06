import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Claims() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Qui peut déclarer un sinistre ?',
      a: 'Tout membre adhérent à Smart-Économie peut déclarer un sinistre via son espace personnel. La déclaration est réservée aux membres actifs disposant d\'une formule de couverture en cours.',
    },
    {
      q: 'Dans quel délai dois-je déclarer mon sinistre ?',
      a: 'Vous devez déclarer votre sinistre dans les 5 jours ouvrés suivant l\'accident. Plus tôt vous déclarez, plus vite la communauté peut intervenir.',
    },
    {
      q: 'Comment la communauté intervient-elle ?',
      a: 'Une fois votre sinistre validé par notre équipe, une contribution solidaire est activée auprès des membres. Le montant est réparti équitablement selon votre formule de couverture.',
    },
    {
      q: 'Que se passe-t-il si mon sinistre est refusé ?',
      a: 'En cas de refus, vous recevez une notification détaillée expliquant les raisons. Vous pouvez contester la décision en fournissant des documents complémentaires.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0a2342] py-20">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">
                Espace sinistres
              </span>
              <h1 className="text-5xl font-extrabold text-white mb-5 leading-tight">
                Déclarez votre
                <br />
                sinistre en ligne
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Un accident ? Notre équipe et votre communauté sont là pour vous. Déclarez votre sinistre rapidement et simplement depuis votre espace membre.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-[#228B22] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a6b1a] transition-all shadow-lg text-base"
              >
                <i className="fa-solid fa-user-shield"></i>
                Déclarer un sinistre
              </Link>
            </div>

            {/* Carte urgence */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white mb-5">
                Urgence — Contactez-nous maintenant
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+212600000000"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#228B22] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-phone text-white text-lg"></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Appel d'urgence</p>
                    <p className="text-white/50 text-xs">+212 6 00 00 00 00 — 24h/24</p>
                  </div>
                  <i className="fa-solid fa-arrow-right text-white/30 ml-auto group-hover:text-white/60 transition"></i>
                </a>
                <a
                  href="mailto:sinistres@smart-economie.ma"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope text-white text-lg"></i>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Email sinistres</p>
                    <p className="text-white/50 text-xs">sinistres@smart-economie.ma</p>
                  </div>
                  <i className="fa-solid fa-arrow-right text-white/30 ml-auto group-hover:text-white/60 transition"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alerte membres ───────────────────────────────────────────── */}
      <section className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-8 max-w-6xl py-5">
          <div className="flex items-center gap-4">
            <i className="fa-solid fa-circle-info text-blue-600 text-xl shrink-0"></i>
            <p className="text-blue-800 text-sm">
              <strong>Réservé aux membres :</strong> La déclaration de sinistre est accessible uniquement depuis votre espace personnel.{' '}
              <Link to="/login" className="underline font-bold hover:text-blue-900">
                Connectez-vous ici →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Sinistres couverts ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Couvertures</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Types de sinistres pris en charge</h2>
            <p className="text-gray-400 mt-3 text-lg">Selon votre formule d'adhésion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-car-burst',      title: 'Accident de circulation', desc: 'Collision, accrochage, carambolage. Couvert par toutes les formules (Tiers Simple, Étendu, Tous Risques).',         formules: ['Tiers Simple', 'Tiers Étendu', 'Tous Risques'] },
              { icon: 'fa-fire',           title: 'Incendie & Explosion',    desc: 'Dommages causés par un incendie ou une explosion sur votre véhicule.',                                               formules: ['Tiers Étendu', 'Tous Risques'] },
              { icon: 'fa-mask',           title: 'Vol du véhicule',         desc: 'Vol total ou tentative de vol avec effraction dûment constatée.',                                                    formules: ['Tiers Étendu', 'Tous Risques'] },
              { icon: 'fa-window-restore', title: 'Bris de glace',           desc: 'Fissure ou bris du pare-brise, vitres latérales et lunette arrière.',                                               formules: ['Tiers Étendu', 'Tous Risques'] },
              { icon: 'fa-cloud-bolt',     title: 'Catastrophe naturelle',   desc: 'Inondation, grêle, tempête affectant directement votre véhicule.',                                                  formules: ['Tous Risques'] },
              { icon: 'fa-person-falling', title: 'Dommages corporels',      desc: 'Blessures physiques consécutives à un accident de la route.',                                                       formules: ['Tiers Simple', 'Tiers Étendu', 'Tous Risques'] },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a2342] flex items-center justify-center mb-5">
                  <i className={`fa-solid ${item.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-base font-bold text-[#0a2342] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.formules.map((f) => (
                    <span key={f} className="text-xs font-semibold text-[#228B22] bg-green-50 px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Processus de déclaration ─────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Démarche</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Comment déclarer votre sinistre ?</h2>
            <p className="text-gray-400 mt-3 text-lg">Processus simple et rapide depuis votre espace membre</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', icon: 'fa-right-to-bracket', title: 'Connectez-vous', desc: 'Accédez à votre espace membre avec vos identifiants Smart-Économie.' },
              { step: '02', icon: 'fa-file-pen', title: 'Remplissez le formulaire', desc: 'Décrivez l\'accident : date, lieu, circonstances et dommages constatés.' },
              { step: '03', icon: 'fa-paperclip', title: 'Joignez les pièces', desc: 'Téléversez les documents requis : constat, photos, attestation de police.' },
              { step: '04', icon: 'fa-clock-rotate-left', title: 'Suivi en temps réel', desc: 'Suivez le traitement de votre dossier directement depuis votre tableau de bord.' },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm text-center">
                <span className="inline-block text-xs font-bold text-[#228B22] bg-green-50 px-3 py-1 rounded-full mb-5">
                  Étape {item.step}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-[#0a2342] flex items-center justify-center mx-auto mb-5">
                  <i className={`fa-solid ${item.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-base font-bold text-[#0a2342] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documents requis ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Checklist</span>
              <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2 mb-8">
                Documents à fournir
              </h2>
              <div className="space-y-4">
                {[
                  { icon: 'fa-file-contract', label: 'Constat amiable rempli et signé', required: true },
                  { icon: 'fa-camera', label: 'Photos du véhicule et des dégâts', required: true },
                  { icon: 'fa-id-card', label: 'Carte grise du véhicule', required: true },
                  { icon: 'fa-id-badge', label: 'Permis de conduire', required: true },
                  { icon: 'fa-shield-halved', label: 'Attestation d\'adhésion Smart-Économie', required: true },
                  { icon: 'fa-file-lines', label: 'Rapport de police (si applicable)', required: false },
                  { icon: 'fa-stethoscope', label: 'Certificat médical (si blessés)', required: false },
                ].map((doc) => (
                  <div key={doc.label} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${doc.required ? 'bg-green-50' : 'bg-blue-50'}`}>
                      <i className={`fa-solid ${doc.icon} text-sm ${doc.required ? 'text-[#228B22]' : 'text-blue-500'}`}></i>
                    </div>
                    <p className="text-sm font-medium text-[#0a2342] flex-1">{doc.label}</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${doc.required ? 'bg-green-100 text-[#228B22]' : 'bg-blue-50 text-blue-500'}`}>
                      {doc.required ? 'Obligatoire' : 'Optionnel'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">FAQ</span>
              <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2 mb-8">
                Questions fréquentes
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-bold text-[#0a2342] text-sm pr-4">{faq.q}</span>
                      <i className={`fa-solid fa-chevron-down text-[#228B22] text-xs transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-[#0a2342] mb-4">
            Besoin d'aide pour votre déclaration ?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Notre équipe est disponible 24h/24 pour vous accompagner dans votre démarche.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-[#228B22] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1a6b1a] transition-all shadow-lg"
            >
              <i className="fa-solid fa-user-shield"></i>
              Déclarer un sinistre
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#0a2342] text-[#0a2342] px-8 py-4 rounded-full font-bold hover:bg-[#0a2342] hover:text-white transition-all"
            >
              <i className="fa-solid fa-headset"></i>
              Contacter le support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
