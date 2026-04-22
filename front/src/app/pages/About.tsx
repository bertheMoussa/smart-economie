export default function About() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-[#0a2342] mb-6">À-Propos de Smart-Économie</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Notre Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Smart-Économie est une plateforme d'assurance innovante dédiée à offrir une protection éthique et
                transparente pour tous. Nous croyons que l'assurance doit être accessible, juste et respectueuse des
                valeurs islamiques.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre objectif est de révolutionner le secteur de l'assurance en mettant la communauté au cœur de nos
                décisions.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-heart text-red-500"></i>
                Nos Valeurs
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Transparence totale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Conformité Sharia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Communauté solidaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">Équité pour tous</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Comment Cela Fonctionne</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl text-green-600 mb-3 flex justify-center">
                  <i className="fa-solid fa-user-plus"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Adhésion Simple</h3>
                <p className="text-sm text-gray-600">Inscrivez-vous en quelques minutes avec nos formulaires simples</p>
              </div>

              <div className="text-center">
                <div className="text-4xl text-green-600 mb-3 flex justify-center">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Paiements Justes</h3>
                <p className="text-sm text-gray-600">Cotisations transparentes et participatives</p>
              </div>

              <div className="text-center">
                <div className="text-4xl text-green-600 mb-3 flex justify-center">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Couverture Totale</h3>
                <p className="text-sm text-gray-600">Protection complète pour vous et votre famille</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
