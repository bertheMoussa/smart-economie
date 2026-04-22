export default function About() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-[#0a2342] mb-8 text-center">À-Propos de Smart-Économie</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Une plateforme d'assurance innovante, éthique et transparente mettant la communauté au cœur de ses décisions
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0a2342] mb-4 flex items-center gap-2">
              <i className="fa-solid fa-target text-green-500"></i>
              Notre Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Smart-Économie est une plateforme d'assurance innovante dédiée à offrir une protection éthique et
              transparente pour tous.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous croyons que l'assurance doit être accessible, juste et respectueuse des valeurs islamiques. Notre
              objectif est de révolutionner le secteur en mettant la communauté au cœur de nos décisions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-[#0a2342] mb-6 flex items-center gap-2">
              <i className="fa-solid fa-heart text-red-500"></i>
              Nos Valeurs
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <span className="font-bold text-gray-800">Transparence totale</span>
                  <p className="text-sm text-gray-600">Aucun intérêt perçu, redistribution des excédents</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <span className="font-bold text-gray-800">Conformité Sharia</span>
                  <p className="text-sm text-gray-600">Respecte les principes islamiques</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <span className="font-bold text-gray-800">Communauté solidaire</span>
                  <p className="text-sm text-gray-600">Entraide et support mutuel</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <span className="font-bold text-gray-800">Équité pour tous</span>
                  <p className="text-sm text-gray-600">Égalité d'accès et de traitement</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-4 text-center">Nos Fonctionnalités Principales</h2>
          <p className="text-center text-gray-600 mb-10">Découvrez ce qui rend Smart-Économie unique</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-green-500 text-white text-2xl">
                    <i className="fa-solid fa-flash"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342]">Souscription Rapide</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Simulation de devis, création de compte et signature électronique en 5 minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-blue-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-500 text-white text-2xl">
                    <i className="fa-solid fa-users"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342]">Cagnotte Communautaire</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Inspirée de CotiZup : créer ou rejoindre une cagnotte d'entraide pour frais juridiques et solidarité.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-purple-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-500 text-white text-2xl">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342]">Paiement Participatif</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Cotisations mensuelles ou ponctuelles via carte, virement ou wallet islamique.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-orange-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-orange-500 text-white text-2xl">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342]">Gestion des Sinistres</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Déclaration simplifiée via app, suivi de l'indemnisation, photos et justificatifs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-indigo-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-indigo-500 text-white text-2xl">
                    <i className="fa-solid fa-user-shield"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342]">Espace Personnel</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Contrats, documents, cagnotte, historique, messagerie centralisée et sécurisée.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-cyan-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-500 text-white text-2xl">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0a2342]">Multilingue</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Interface disponible en Français, Anglais et Arabe pour tous nos utilisateurs.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-12 border-l-4 border-green-500">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-4">Comment Ça Fonctionne</h2>
          <p className="text-gray-600 mb-10">Trois étapes simples pour rejoindre notre communauté</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
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
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
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
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
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
      </div>
    </div>
  );
}
