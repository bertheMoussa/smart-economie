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
    <div className="bg-[#f0f4f8] min-h-screen flex flex-col">
      <DevisModal 
        isOpen={isDevisOpen} 
        onClose={() => setIsDevisOpen(false)}
        onSubscribe={() => {
          window.location.href = '/login';
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden shadow-sm min-h-[350px]">
        {/* Image pleine section en fond */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCarImage})` }}
        />

        {/* Dégradé décalé vers le centre */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, transparent 0%, #bfdbfe 15%, rgba(240,253,244,0.9) 40%, transparent 65%)"
          }}
        />

        {/* Contenu décalé vers le centre */}
        <div className="relative z-10 container mx-auto px-6 max-w-full flex items-stretch min-h-[350px]">
          <div className="w-1/2 py-10 flex flex-col justify-center mx-auto">
            <h1 className="text-5xl font-bold text-[#0a2342] mb-4 leading-tight tracking-tight">
              Assurance Pro
              <br />
              Pour Votre Entreprise
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Protection complète, transparente et adaptée aux besoins de votre entreprise.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setIsDevisOpen(true)}
                className="bg-[#228B22] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#1a6b1a] transition text-lg tracking-wide flex items-center gap-2"
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

      {/* Core Values */}
      <section className="bg-white py-6 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 gap-6 divide-x divide-gray-100">
            <div className="flex items-start gap-4 p-4">
              <div className="text-[#228B22] text-4xl mt-1">
                <i className="fa-solid fa-building"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Solutions Professionnelles</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Adaptées à tous types d'entreprises
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-blue-600 text-4xl mt-1">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Croissance Sécurisée</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Accompagnement de votre développement
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-[#228B22] text-4xl mt-1">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Protection Complète</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Flotte, locaux, responsabilité civile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-[#f0f4f8]">
        <div className="container mx-auto px-6 max-w-6xl bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-12 border-l-4 border-[#228B22]">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-4">Comment Ça Fonctionne</h2>
          <p className="text-gray-600 mb-10">Trois étapes simples pour protéger votre entreprise</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#228B22] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Inscription Entreprise</h3>
              <p className="text-sm text-gray-600">
                Créez le compte de votre entreprise avec vos informations professionnelles.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#228B22] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Choix de la Couverture</h3>
              <p className="text-sm text-gray-600">
                Sélectionnez les garanties adaptées à votre activité.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#228B22] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Protection Immédiate</h3>
              <p className="text-sm text-gray-600">
                Votre entreprise est protégée dès validation de votre contrat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-10 text-center">Nos Solutions d'Assurance Auto Pro</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Flotte Auto */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={card1FlotteAuto} 
                  alt="Flotte Automobile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fa-solid fa-cars text-2xl"></i>
                    <span className="text-xs font-bold uppercase tracking-wider">Flotte Auto</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#228B22] rounded-lg p-2">
                    <i className="fa-solid fa-car-side text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2342] mb-2">Assurance Flotte Automobile</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Protection complète pour l'ensemble de votre parc automobile professionnel. Gestion simplifiée et tarifs avantageux.
                    </p>
                  </div>
                </div>
                
                <Link
                  to="/subscription"
                  className="w-full bg-[#FFB93B] text-white py-3 rounded-lg font-semibold hover:bg-[#e6a534] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Découvrir notre offre
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 2: Véhicule Utilitaire */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={card2UtilitairesPro} 
                  alt="Véhicules Utilitaires Pro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fa-solid fa-truck-fast text-2xl"></i>
                    <span className="text-xs font-bold uppercase tracking-wider">Utilitaires</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#228B22] rounded-lg p-2">
                    <i className="fa-solid fa-truck text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2342] mb-2">Véhicules Utilitaires Pro</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Assurance adaptée pour fourgons, camionnettes et véhicules de livraison. Protection tous risques pour votre activité.
                    </p>
                  </div>
                </div>
                
                <Link
                  to="/subscription"
                  className="w-full bg-[#FFB93B] text-white py-3 rounded-lg font-semibold hover:bg-[#e6a534] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Découvrir notre offre
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 3: Artisans & Commerçants */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={card3ArtisansComm} 
                  alt="Artisans & Commerçants" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fa-solid fa-briefcase text-2xl"></i>
                    <span className="text-xs font-bold uppercase tracking-wider">Pros & TPE</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#228B22] rounded-lg p-2">
                    <i className="fa-solid fa-hand-holding-heart text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2342] mb-2">Artisans & Commerçants</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Contrat adapté pour couvrir vos responsabilités, vos véhicules et vos outils de travail. Protection complète de votre activité.
                    </p>
                  </div>
                </div>
                
                <Link
                  to="/subscription"
                  className="w-full bg-[#FFB93B] text-white py-3 rounded-lg font-semibold hover:bg-[#e6a534] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Découvrir notre offre
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 4: Transport de Marchandises */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={card4Transport} 
                  alt="Transport de Marchandises" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fa-solid fa-box-open text-2xl"></i>
                    <span className="text-xs font-bold uppercase tracking-wider">Transport</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-[#228B22] rounded-lg p-2">
                    <i className="fa-solid fa-truck-moving text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2342] mb-2">Transport de Marchandises</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Assurance spécialisée pour transporteurs. Couverture des véhicules, marchandises et responsabilité civile professionnelle.
                    </p>
                  </div>
                </div>
                
                <Link
                  to="/subscription"
                  className="w-full bg-[#FFB93B] text-white py-3 rounded-lg font-semibold hover:bg-[#e6a534] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Découvrir notre offre
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
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
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protégez votre entreprise dès maintenant</h2>
          <p className="text-white mb-6 text-lg">
            Rejoignez les entreprises qui nous font confiance pour leur protection.
          </p>
          <Link
            to="/subscription"
            className="inline-block bg-white text-[#228B22] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition text-lg"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
