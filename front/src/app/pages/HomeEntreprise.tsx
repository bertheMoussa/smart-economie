import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DevisModal } from '../components/DevisModal';
import heroCarImage from '../../assets/images/hero-car-1.png';
import subcripImg from '../../assets/images/bg-green.png';
import card1FlotteAuto from '../../assets/images/card1_flotte_automobile.png';
import card2UtilitairesPro from '../../assets/images/card2_vehicules_utilitaires_pro.png';
import card3ArtisansComm from '../../assets/images/card3_artisans_commercants.png';
import card4Transport from '../../assets/images/card4_transport_marchandises.png';

export default function HomeEntreprise() {
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
          <div className="w-full md:w-1/2 py-10 flex flex-col justify-center mx-auto px-4 md:px-0">
            <h1 className="text-5xl font-bold text-[#0a2342] mb-4 leading-tight tracking-tight">
              Assurance Pro
              <br />
              <span className="font-bold text-green-800">Entreprise</span> Solidaire
            </h1>
            <p className="font-bold mb-6 text-lg">
              Protection éthique adaptée à votre activité — flotte, utilitaires, transport.
            </p>
            <div className="flex gap-4">
              {/* Doré — même traitement que Home particuliers */}
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
                Souscrire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Barre valeurs — icônes côte à côte → couleur uniforme ───── */}
      <section className="bg-white py-6 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:divide-x divide-gray-100">
            <div className="flex items-start gap-4 p-4">
              <div className="text-[#0a2342] text-2xl mt-1">
                <i className="fa-solid fa-building"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Solutions Professionnelles</h3>
                <p className="text-xs text-gray-500 font-medium">Adaptées à tous types d'entreprises</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-[#0a2342] text-2xl mt-1">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Croissance Sécurisée</h3>
                <p className="text-xs text-gray-500 font-medium">Accompagnement de votre développement</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-[#0a2342] text-2xl mt-1">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Protection Complète</h3>
                <p className="text-xs text-gray-500 font-medium">Flotte, locaux, responsabilité civile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment Ça Fonctionne — cercles uniformes ────────────────── */}
      <section className="py-12 bg-[#f0f4f8]">
        <div className="container mx-auto px-6 max-w-6xl bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-12 border-l-4 border-[#228B22]">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-4">Comment Ça Fonctionne</h2>
          <p className="text-gray-600 mb-10">Trois étapes simples pour protéger votre entreprise</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '1', title: 'Inscription Entreprise',    desc: 'Créez le compte de votre entreprise avec vos informations professionnelles.' },
              { n: '2', title: 'Choix de la Couverture',    desc: 'Sélectionnez les garanties adaptées à votre activité et à votre flotte.' },
              { n: '3', title: 'Protection Immédiate',      desc: 'Votre entreprise est protégée dès validation de votre contrat.' },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="mb-4 flex justify-center">
                  {/* Uniforme — même couleur que Home particuliers */}
                  <div className="w-16 h-16 rounded-full bg-[#0a2342] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.n}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0a2342] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nos Solutions Pro ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Couvertures entreprise</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Nos Solutions d'Assurance Auto Pro</h2>
            <p className="text-gray-400 mt-3 text-lg">Adaptées à chaque type d'activité professionnelle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {[
              {
                img: card1FlotteAuto,
                alt: 'Flotte Automobile',
                badge: 'Flotte Auto',
                badgeIcon: 'fa-cars',
                icon: 'fa-car-side',
                title: 'Assurance Flotte Automobile',
                desc: "Protection complète pour l'ensemble de votre parc automobile professionnel. Gestion simplifiée et tarifs avantageux.",
              },
              {
                img: card2UtilitairesPro,
                alt: 'Véhicules Utilitaires Pro',
                badge: 'Utilitaires',
                badgeIcon: 'fa-truck-fast',
                icon: 'fa-truck',
                title: 'Véhicules Utilitaires Pro',
                desc: 'Assurance adaptée pour fourgons, camionnettes et véhicules de livraison. Protection tous risques pour votre activité.',
              },
              {
                img: card3ArtisansComm,
                alt: 'Artisans & Commerçants',
                badge: 'Pros & TPE',
                badgeIcon: 'fa-briefcase',
                icon: 'fa-hand-holding-heart',
                title: 'Artisans & Commerçants',
                desc: 'Contrat adapté pour couvrir vos responsabilités, vos véhicules et vos outils de travail. Protection complète de votre activité.',
              },
              {
                img: card4Transport,
                alt: 'Transport de Marchandises',
                badge: 'Transport',
                badgeIcon: 'fa-box-open',
                icon: 'fa-truck-moving',
                title: 'Transport de Marchandises',
                desc: 'Assurance spécialisée pour transporteurs. Couverture des véhicules, marchandises et responsabilité civile professionnelle.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="h-56 relative overflow-hidden bg-gray-100">
                  <img src={card.img} alt={card.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10 flex items-center gap-2">
                    <i className={`fa-solid ${card.badgeIcon} text-xl`}></i>
                    <span className="text-xs font-bold uppercase tracking-wider">{card.badge}</span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    {/* Fond vert → icône blanche */}
                    <div className="w-12 h-12 rounded-xl bg-[#228B22] flex items-center justify-center shrink-0">
                      <i className={`fa-solid ${card.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0a2342] mb-1">{card.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>

                  {/* Bouton palette uniforme — vert */}
                  <Link
                    to="/subscription"
                    className="w-full bg-[#228B22] text-white py-3 rounded-xl font-bold hover:bg-[#1a6b1a] transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Découvrir notre offre
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avantages entreprise ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Pourquoi nous choisir</span>
            <h2 className="text-4xl font-extrabold text-[#0a2342] mt-2">Des avantages pensés pour les pros</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: 'fa-file-contract',    title: 'Contrat sur mesure',       desc: 'Chaque couverture est adaptée à votre secteur et à la taille de votre flotte.' },
              { icon: 'fa-headset',          title: 'Gestionnaire dédié',       desc: 'Un interlocuteur unique pour toutes vos demandes et déclarations de sinistres.' },
              { icon: 'fa-scale-balanced',   title: '100 % Finance éthique',   desc: "Aucun intérêt, aucune spéculation — un modèle entièrement fondé sur la solidarité et l'éthique." },
              { icon: 'fa-ban',              title: 'Zéro cotisation mensuelle', desc: 'Vous contribuez uniquement en cas de sinistre déclaré dans la communauté.' },
              { icon: 'fa-bolt',             title: 'Activation immédiate',     desc: 'Votre couverture démarre dès validation de votre adhésion professionnelle.' },
              { icon: 'fa-chart-pie',        title: 'Tableau de bord',          desc: 'Pilotez votre flotte et vos sinistres depuis un espace entreprise dédié.' },
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
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
          <h2 className="text-3xl font-bold text-white mb-4">Protégez votre entreprise dès maintenant</h2>
          <p className="text-white mb-6 text-lg">
            Rejoignez les entreprises qui nous font confiance pour leur protection.
          </p>
          <Link
            to="/subscription"
            className="inline-block bg-[#228B22] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a6b1a] transition text-lg shadow-lg"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
