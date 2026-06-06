import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DevisModal } from '../components/DevisModal';
import heroCarImage from '../../assets/images/hero-car-1.png';
import heroCar from '../../assets/images/hero-car.png';
import subcripImg from '../../assets/images/bg-green.png'

export default function Home() {
  const [isDevisOpen, setIsDevisOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <DevisModal
        isOpen={isDevisOpen}
        onClose={() => setIsDevisOpen(false)}
        onSubscribe={() => { window.location.href = '/login'; }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden shadow-sm min-h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCarImage})` }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent 0%, #bfdbfe 15%, rgba(240,253,244,0.9) 40%, transparent 65%)' }}
        />
        <div className="relative z-10 container mx-auto px-6 max-w-full flex items-stretch min-h-[350px]">
          <div className="w-1/2 py-10 flex flex-col justify-center mx-auto">
            <h1 className="text-5xl font-bold text-[#0a2342] mb-4 leading-tight tracking-tight">
              Une Assurance
              <br />
              <span className="font-bold text-green-800">Solidaire</span> pour Tous
            </h1>
            <p className="font-bold mb-6 text-lg">
              Protection éthique et transparente — aucune cotisation mensuelle, <br /> vous contribuez uniquement en cas de sinistre.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setIsDevisOpen(true)}
                className="bg-[#C9A227] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#a88520] transition text-lg tracking-wide flex items-center gap-2"
              >
                <i className="fa-solid fa-file-invoice-dollar"></i>
                Devis gratuit
              </button>
              <Link
                to="/subscription"
                className="border-2 border-[#228B22] text-[#228B22] px-8 py-3 rounded-full font-bold hover:bg-[#f0fdf4] transition text-lg tracking-wide flex items-center gap-2"
              >
                <i className="fa-solid fa-bolt"></i>
                Adhérer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Barre valeurs — icônes nues côte à côte → même couleur ──── */}
      <section className="bg-white py-6 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 gap-6 divide-x divide-gray-100">
            <div className="flex items-start gap-4 p-4">
              <div className="text-[#0a2342] text-2xl mt-1">
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Valeurs Éthiques</h3>
                <p className="text-xs text-gray-500 font-medium">Transparence, Finance éthique, Solidarité</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-[#0a2342] text-2xl mt-1">
                <i className="fa-solid fa-users"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Communauté</h3>
                <p className="text-xs text-gray-500 font-medium">Entraide mutuelle et solidarité</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-[#0a2342] text-2xl mt-1">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Sécurité</h3>
                <p className="text-xs text-gray-500 font-medium">Protection de vos données personnelles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Le modèle solidaire ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src={heroCar}
                alt="Communauté Smart-Économie"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Notre modèle</span>
              <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2 mb-6">
                Une assurance solidaire,
                <br />
                sans cotisation mensuelle
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Smart-Économie fonctionne sur le principe de la <strong className="text-[#0a2342]">solidarité mutuelle</strong> : les membres s'entraident mutuellement.
                Vous adhérez, choisissez votre formule et êtes couvert immédiatement.
                Vous ne contribuez financièrement qu'au moment où un sinistre est déclaré.
              </p>
              {/* Fond coloré → icône blanche */}
              <div className="space-y-4">
                {[
                  { icon: 'fa-ban', title: 'Aucune prime mensuelle', desc: 'Pas de prélèvement automatique, pas de frais fixes' },
                  { icon: 'fa-users', title: 'Communauté solidaire', desc: "Chaque membre soutient les autres en cas d'accident" },
                  { icon: 'fa-scale-balanced', title: 'Totalement transparent', desc: 'Chaque contribution est justifiée par un sinistre réel' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#228B22] flex items-center justify-center shrink-0">
                      <i className={`fa-solid ${item.icon} text-white`}></i>
                    </div>
                    <div>
                      <p className="font-bold text-[#0a2342] text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nos formules — chaque carte garde sa couleur propre ──────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Couvertures</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Nos Formules d'Assurance Auto</h2>
            <p className="text-gray-400 mt-3 text-lg">Sans cotisation mensuelle — contribution uniquement en cas de sinistre</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tiers Simple — fond bleu → icône blanche */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-1.5 bg-blue-500"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <i className="fa-solid fa-car text-white text-xl"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Essentiel
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Tiers Simple</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  La protection minimale obligatoire. Responsabilité civile incluse. Idéale pour démarrer.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Responsabilité civile', 'Déclaration en ligne', 'Espace membre', 'Support 24/7'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fa-solid fa-check text-[#228B22] text-xs"></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscription"
                  className="block w-full text-center border-2 border-blue-500 text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all text-sm"
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>

            {/* Tiers Étendu — fond vert → icône blanche */}
            <div className="bg-white border-2 border-[#228B22] rounded-2xl overflow-hidden shadow-lg relative">
              <div className="h-1.5 bg-[#228B22]"></div>
              <div className="absolute top-5 right-5 bg-[#228B22] text-white text-xs font-bold px-3 py-1 rounded-full">
                Populaire
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#228B22] flex items-center justify-center">
                    <i className="fa-solid fa-shield-halved text-white text-xl"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#228B22] bg-green-50 px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Tiers Étendu</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Protection renforcée avec vol, incendie et bris de glace inclus.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Responsabilité civile', 'Vol & Incendie', 'Bris de glace', 'Assistance dépannage', 'Support prioritaire'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fa-solid fa-check text-[#228B22] text-xs"></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscription"
                  className="block w-full text-center bg-[#228B22] text-white py-3 rounded-xl font-bold hover:bg-[#1a6b1a] transition-all text-sm shadow-md"
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>

            {/* Tous Risques — fond bleu foncé → icône blanche */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-1.5 bg-[#1e40af]"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1e40af] flex items-center justify-center">
                    <i className="fa-solid fa-crown text-white text-xl"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1e40af] bg-blue-50 px-3 py-1 rounded-full">
                    Premium
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Tous Risques</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  La protection maximale. Votre véhicule couvert en toutes circonstances.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Toutes garanties Tiers Étendu', 'Dommages tous accidents', 'Véhicule de remplacement', 'Gestionnaire dédié', 'Assistance VIP 24/7'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fa-solid fa-check text-[#228B22] text-xs"></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscription"
                  className="block w-full text-center border-2 border-[#1e40af] text-[#1e40af] py-3 rounded-xl font-bold hover:bg-[#1e40af] hover:text-white transition-all text-sm"
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment Ça Fonctionne — cercles côte à côte → couleur uniforme */}
      <section className="py-12 bg-[#f0f4f8]">
        <div className="container mx-auto px-6 max-w-6xl bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-12 border-l-4 border-[#228B22]">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-4">Comment Ça Fonctionne</h2>
          <p className="text-gray-600 mb-10">Trois étapes simples pour rejoindre notre communauté</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#0a2342] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Inscription</h3>
              <p className="text-sm text-gray-600">
                Créez votre compte en 2 minutes avec vos informations de base.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#0a2342] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Adhésion</h3>
              <p className="text-sm text-gray-600">
                Choisissez votre formule de couverture et rejoignez la communauté. Sans cotisation mensuelle.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#0a2342] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Protection & Solidarité</h3>
              <p className="text-sm text-gray-600">
                Vous êtes couvert dès le premier jour. En cas d'accident, la communauté contribue pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi Smart-Économie — 6 cartes → conteneurs icônes uniformes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Nos engagements</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Pourquoi choisir Smart-Économie ?</h2>
            <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">
              Un modèle conçu autour de vos valeurs, de votre confiance et de votre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-ban',            title: 'Zéro cotisation mensuelle',  desc: "Aucun prélèvement fixe chaque mois. Vous contribuez uniquement lorsqu'un sinistre est déclaré par un membre de la communauté." },
              { icon: 'fa-mosque',         title: '100 % Finance éthique',     desc: "Aucun intérêt, aucune spéculation. Chaque opération repose sur des principes éthiques et responsables." },
              { icon: 'fa-users',          title: 'Entraide communautaire',     desc: "Chaque membre est à la fois assuré et solidaire. En cas d'accident, c'est toute la communauté qui se mobilise pour vous." },
              { icon: 'fa-scale-balanced', title: 'Transparence totale',        desc: "Chaque contribution est traçable et directement liée à un sinistre réel. Vous savez toujours où va votre argent." },
              { icon: 'fa-shield-halved',  title: 'Couverture immédiate',       desc: "Vous êtes protégé dès le jour de votre adhésion. Pas d'attente, pas de délai de carence pour accéder à votre couverture." },
              { icon: 'fa-headset',        title: 'Support 24/7',               desc: "Notre équipe est disponible à tout moment pour vous accompagner, déclarer un sinistre ou répondre à vos questions." },
            ].map((card) => (
              <div key={card.title} className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl bg-[#0a2342] flex items-center justify-center mb-5">
                  <i className={`fa-solid ${card.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#0a2342] mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#228B22] rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${subcripImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à rejoindre notre communauté?</h2>
          <p className="text-white mb-6 text-lg">
            Adhérez dès aujourd'hui — aucune cotisation mensuelle, vous ne contribuez qu'en cas de sinistre.
          </p>
          <Link
            to="/subscription"
            className="inline-block bg-[#228B22] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a6b1a] transition text-lg shadow-lg"
          >
            Souscrire maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
