import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2020',
    icon: 'fa-lightbulb',
    yearColor: 'text-blue-600',
    bg: 'bg-[#0a2342]',
    title: "La naissance d'une idée",
    desc: "Smart-Économie naît d'une conviction : créer une assurance automobile fondée sur la solidarité mutuelle et les valeurs éthiques islamiques, sans cotisation mensuelle.",
  },
  {
    year: '2021',
    icon: 'fa-rocket',
    yearColor: 'text-blue-600',
    bg: 'bg-[#0a2342]',
    title: 'Lancement de la plateforme',
    desc: "Après un an de développement, la plateforme solidaire est lancée. Les premiers membres rejoignent la communauté et découvrent un modèle d'assurance sans précédent.",
  },
  {
    year: '2022',
    icon: 'fa-earth-africa',
    yearColor: 'text-[#228B22]',
    bg: 'bg-[#228B22]',
    title: 'Expansion régionale',
    desc: "La communauté connaît une croissance de 500 %. Smart-Économie étend ses services à de nouvelles régions, répondant à une demande croissante pour une assurance éthique.",
  },
  {
    year: '2023',
    icon: 'fa-microchip',
    yearColor: 'text-[#0a2342]',
    bg: 'bg-[#0a2342]',
    title: 'Innovation & Fonds solidaire',
    desc: 'Déploiement du fonds de solidarité communautaire : chaque contribution est traçable, justifiée par un sinistre réel et visible par tous les membres.',
  },
  {
    year: '2024',
    icon: 'fa-star',
    yearColor: 'text-[#228B22]',
    bg: 'bg-[#228B22]',
    title: "Aujourd'hui — 5 000+ membres",
    desc: "Plus de 5 000 membres font confiance à Smart-Économie. Nous continuons d'innover pour rendre l'assurance solidaire accessible à tous.",
  },
];

const team = [
  { name: 'Ahmed Benomar',    role: 'CEO & Co-fondateur',  initials: 'AB', from: 'from-blue-500',    to: 'to-[#0a2342]'  },
  { name: 'Fatima Al-Rashid', role: 'CTO & Co-fondatrice', initials: 'FA', from: 'from-green-500',   to: 'to-[#228B22]'  },
  { name: 'Mohammad Khalil',  role: 'Head of Operations',  initials: 'MK', from: 'from-blue-400',    to: 'to-blue-700'   },
];

export default function History() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0a2342] py-14">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#228B22] bg-[#228B22]/15 px-4 py-1.5 rounded-full mb-5">
            Notre parcours
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight">
            L'histoire de Smart-Économie
          </h1>
          <p className="text-white/65 text-base max-w-xl leading-relaxed">
            De l'idée à la communauté — cinq ans de construction d'une assurance solidaire, éthique et transparente.
          </p>
        </div>
      </section>

      {/* ── Chiffres clés ────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] border-b border-gray-100 py-10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-calendar',      val: '2020',   label: 'Année de création', color: 'text-[#0a2342]' },
              { icon: 'fa-users',         val: '5 000+', label: 'Membres actifs',     color: 'text-[#0a2342]' },
              { icon: 'fa-earth-africa',  val: '3',      label: 'Pays couverts',      color: 'text-[#0a2342]' },
              { icon: 'fa-mosque',        val: '100%',   label: 'Finance éthique',   color: 'text-[#0a2342]' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <i className={`fa-solid ${s.icon} ${s.color} text-2xl mb-3`}></i>
                <p className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.val}</p>
                <p className="text-xs text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Chronologie</span>
            <h2 className="text-3xl font-extrabold text-[#0a2342] mt-2">Nos jalons</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex gap-8 items-start">
                  <div className="relative z-10 shrink-0">
                    <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center shadow-sm`}>
                      <i className={`fa-solid ${m.icon} text-white text-base`}></i>
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <span className={`text-xs font-bold uppercase tracking-widest ${m.yearColor} mb-1 block`}>{m.year}</span>
                    <h3 className="text-lg font-bold text-[#0a2342] mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Engagement ──────────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0a2342] flex items-center justify-center">
                  <i className="fa-solid fa-eye text-white text-base"></i>
                </div>
                <h3 className="text-xl font-bold text-[#0a2342]">Notre Vision</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Devenir la référence de l'assurance solidaire éthique, où chaque membre est à la fois protégé et acteur de la protection des autres.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nous croyons que l'assurance peut être un lien de confiance et de fraternité — pas simplement un contrat financier.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <i className="fa-solid fa-handshake text-[#228B22] text-base"></i>
                </div>
                <h3 className="text-xl font-bold text-[#0a2342]">Notre Engagement</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Transparence totale dans chaque contribution',
                  'Respect strict des principes de solidarité mutuelle',
                  'Aucune cotisation mensuelle — contribution solidaire uniquement',
                  'Innovation continue au service de la communauté',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <i className="fa-solid fa-check text-[#228B22] mt-0.5 shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Équipe ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Les fondateurs</span>
            <h2 className="text-3xl font-extrabold text-[#0a2342] mt-2">Notre équipe</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.from} ${member.to} mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold shadow-md`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg text-[#0a2342] mb-1">{member.name}</h3>
                <p className="text-sm text-[#228B22] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f8fafc] border-t border-gray-100 py-14">
        <div className="container mx-auto px-8 max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold text-[#0a2342] mb-3">Rejoignez l'aventure</h2>
          <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto">
            Faites partie d'une communauté qui réinvente l'assurance autour de valeurs partagées.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/subscription"
              className="bg-[#228B22] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a6b1a] transition text-sm"
            >
              Adhérer maintenant
            </Link>
            <Link
              to="/about"
              className="border-2 border-[#0a2342] text-[#0a2342] px-8 py-3 rounded-xl font-bold hover:bg-[#0a2342] hover:text-white transition text-sm"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
