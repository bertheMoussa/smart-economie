import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0a2342] py-20">
        <div className="container mx-auto px-8 max-w-6xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4">
            Qui sommes-nous
          </span>
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            À propos de Smart-Économie
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Une assurance solidaire innovante, éthique et transparente — sans cotisation mensuelle,
            entièrement basée sur l'entraide entre membres.
          </p>
        </div>
      </section>

      {/* ── Chiffres clés ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: '0 DH',   label: 'Cotisation mensuelle', icon: 'fa-ban',    color: 'text-[#0a2342]' },
              { value: '+2 000', label: 'Membres actifs',       icon: 'fa-users',  color: 'text-[#0a2342]' },
              { value: '100 %', label: 'Finance éthique',        icon: 'fa-mosque', color: 'text-[#0a2342]' },
              { value: '< 48 h', label: 'Traitement sinistres', icon: 'fa-clock',  color: 'text-[#0a2342]' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 py-10 px-6">
                <i className={`fa-solid ${s.icon} ${s.color} text-2xl`}></i>
                <span className="text-3xl font-extrabold text-[#0a2342]">{s.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Notre mission</span>
              <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2 mb-6">
                Une assurance pensée
                <br />pour la communauté
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-5">
                Smart-Économie est une assurance sociale solidaire : vous adhérez, vous êtes couvert.
                Il n'existe <strong className="text-[#0a2342]">aucune cotisation mensuelle fixe</strong>.
                Les membres ne contribuent qu'en cas de sinistre, dans le respect du principe d'entraide mutuelle.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Notre modèle <strong className="text-[#0a2342]">solidaire</strong> place la solidarité
                de la communauté au cœur de chaque protection — accessible, juste et respectueux
                des valeurs islamiques.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-10">
              <i className="fa-solid fa-quote-left text-[#228B22] text-3xl mb-6 block"></i>
              <p className="text-[#0a2342] text-xl font-semibold leading-relaxed mb-6">
                "Nous croyons que l'assurance doit être accessible, juste et fondée sur la solidarité réelle entre les personnes."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#228B22] flex items-center justify-center">
                  <i className="fa-solid fa-user text-white text-sm"></i>
                </div>
                <div>
                  <p className="font-bold text-[#0a2342] text-sm">L'équipe Smart-Économie</p>
                  <p className="text-xs text-gray-400">Fondateurs & Membres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nos Valeurs ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Ce qui nous définit</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: 'fa-ban',
                title: 'Zéro cotisation mensuelle',
                desc: "Vous ne contribuez qu'en cas de sinistre réel. Aucun prélèvement automatique, aucun frais fixe mensuel imposé.",
              },
              {
                icon: 'fa-mosque',
                title: 'Finance éthique & responsable',
                desc: 'Ni intérêt, ni spéculation. Chaque opération respecte strictement les principes de la finance islamique.',
              },
              {
                icon: 'fa-scale-balanced',
                title: 'Transparence totale',
                desc: "Chaque contribution est directement liée à un sinistre justifié et traçable. Vous savez toujours où va votre argent.",
              },
              {
                icon: 'fa-users',
                title: 'Équité pour tous',
                desc: 'Accès égal à la protection pour tous les membres, quelle que soit leur situation financière.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-gray-100 p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0a2342] flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${v.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342] mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment Ça Fonctionne ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Le principe</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Comment Ça Fonctionne</h2>
            <p className="text-gray-400 mt-3 text-lg">Trois étapes simples pour rejoindre notre communauté</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                step: '01',
                icon: 'fa-user-plus',
                title: 'Inscription',
                desc: 'Créez votre compte en 2 minutes avec vos informations de base. Accès immédiat à votre espace membre.',
              },
              {
                step: '02',
                icon: 'fa-shield-halved',
                title: 'Adhésion',
                desc: 'Choisissez votre formule de couverture et rejoignez la communauté. Sans cotisation mensuelle.',
              },
              {
                step: '03',
                icon: 'fa-handshake-angle',
                title: 'Protection & Solidarité',
                desc: 'Vous êtes couvert dès le premier jour. En cas de sinistre, la communauté se mobilise pour vous.',
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-7 left-full w-full h-px bg-gray-200 z-0" style={{ width: 'calc(100% - 3rem)', left: 'calc(50% + 2rem)' }}></div>
                )}
                <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center">
                  <span className="inline-block text-xs font-bold text-[#228B22] bg-green-50 px-3 py-1 rounded-full mb-5">
                    Étape {item.step}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-[#0a2342] flex items-center justify-center mx-auto mb-5">
                    <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a2342] mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4 block">
            Rejoignez-nous
          </span>
          <h2 className="text-4xl font-extrabold text-[#0a2342] mb-4">
            Prêt à faire partie de la communauté ?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Adhérez dès aujourd'hui et bénéficiez d'une couverture immédiate, sans aucune cotisation mensuelle.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/subscription"
              className="inline-flex items-center gap-2 bg-[#228B22] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1a6b1a] transition-all shadow-lg text-base"
            >
              Adhérer maintenant
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#0a2342] text-[#0a2342] px-10 py-4 rounded-full font-bold hover:bg-[#0a2342] hover:text-white transition-all text-base"
            >
              <i className="fa-solid fa-envelope"></i>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
