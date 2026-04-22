import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-white overflow-hidden shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl flex items-stretch">
          <div className="w-1/2 py-10 pr-10 flex flex-col justify-center relative z-10">
            <h1 className="text-5xl font-bold text-[#0a2342] mb-4 leading-tight tracking-tight">
              Une Assurance
              <br />
              Éthique pour Tous
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Protection complète, transparente et respectueuse de vos valeurs.
            </p>
            <div className="flex gap-4">
              <Link
                to="/subscription"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition text-lg tracking-wide flex items-center gap-2"
              >
                <i className="fa-solid fa-lightning-bolt"></i>
                Souscription rapide
              </Link>
              <Link
                to="/about"
                className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition text-lg tracking-wide flex items-center gap-2"
              >
                <i className="fa-solid fa-circle-info"></i>
                En savoir plus
              </Link>
            </div>
          </div>
          <div className="w-1/2 relative">
            {/* Simple placeholder background mimicking the team image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            >
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-6 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 gap-6 divide-x divide-gray-100">
            <div className="flex items-start gap-4 p-4">
              <div className="text-green-600 text-4xl mt-1">
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
              <div className="text-green-700 text-4xl mt-1">
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

      {/* Key Features */}
      <section className="py-12 bg-[#f0f4f8]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-3 text-center">Nos Fonctionnalités</h2>
          <p className="text-center text-gray-600 mb-10">Tout ce qu'il vous faut pour être protégé</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-500 text-white text-2xl">
                    <i className="fa-solid fa-flash"></i>
                  </div>
                </div>
                <h3 className="font-bold text-[#0a2342]">Souscription Rapide</h3>
              </div>
              <p className="text-gray-600 text-sm">5 minutes pour souscrire et obtenir votre couverture.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-500 text-white text-2xl">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                  </div>
                </div>
                <h3 className="font-bold text-[#0a2342]">Cagnotte Communautaire</h3>
              </div>
              <p className="text-gray-600 text-sm">Entraide et solidarité entre les membres.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-500 text-white text-2xl">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                </div>
                <h3 className="font-bold text-[#0a2342]">Paiement Participatif</h3>
              </div>
              <p className="text-gray-600 text-sm">Flexibilité de paiement selon vos moyens.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-orange-500 text-white text-2xl">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                </div>
                <h3 className="font-bold text-[#0a2342]">Gestion des Sinistres</h3>
              </div>
              <p className="text-gray-600 text-sm">Déclaration simplifiée et traitement rapide.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-indigo-500 text-white text-2xl">
                    <i className="fa-solid fa-user-shield"></i>
                  </div>
                </div>
                <h3 className="font-bold text-[#0a2342]">Espace Personnel</h3>
              </div>
              <p className="text-gray-600 text-sm">Gestion complète de votre couverture en un seul endroit.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-cyan-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-500 text-white text-2xl">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
                <h3 className="font-bold text-[#0a2342]">Multilingue</h3>
              </div>
              <p className="text-gray-600 text-sm">Disponible en FR, EN et AR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à rejoindre notre communauté?</h2>
          <p className="text-green-100 mb-6 text-lg">
            Commencez votre protection dès aujourd'hui avec Smart-Économie.
          </p>
          <Link
            to="/subscription"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition text-lg"
          >
            Souscrire maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
