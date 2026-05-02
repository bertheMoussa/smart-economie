import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DevisModal } from '../components/DevisModal';
import heroCarImage from '../../assets/images/hero-car-1.png';
import subcripImg from '../../assets/images/bg-green.png';

export default function Home() {
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
          Une Assurance
          <br />
          Éthique pour Tous
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Protection complète, transparente et respectueuse de vos valeurs.
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
                <i className="fa-solid fa-handshake-angle"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Valeurs Éthiques</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Transparence, Sharia-compliant, Solidarité
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-blue-600 text-4xl mt-1">
                <i className="fa-solid fa-users"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Communauté</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Entraide mutuelle et solidarité
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-[#228B22] text-4xl mt-1">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div>
                <h3 className="font-bold text-[#0a2342] text-base leading-tight mb-1">Sécurité</h3>
                <p className="text-xs text-gray-500 font-medium">
                  Protection de vos données personnelles
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
          <p className="text-gray-600 mb-10">Trois étapes simples pour rejoindre notre communauté</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#228B22] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
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
                <div className="w-16 h-16 rounded-full bg-[#228B22] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Souscription</h3>
              <p className="text-sm text-gray-600">
                Choisissez votre plan et complétez votre cotisation.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#228B22] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-2">Protection</h3>
              <p className="text-sm text-gray-600">
                Vous êtes assuré et protégé dès le premier jour.
              </p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à rejoindre notre communauté?</h2>
          <p className="text-white mb-6 text-lg">
            Commencez votre protection dès aujourd'hui avec Smart-Économie.
          </p>
          <Link
            to="/subscription"
            className="inline-block bg-white text-[#228B22] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition text-lg"
          >
            Souscrire maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
