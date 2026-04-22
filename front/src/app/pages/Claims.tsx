export default function Claims() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-[#0a2342] mb-12 text-center">Déclaration de Sinistres</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Info Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Comment déclarer un sinistre</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-lg font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Préparez vos documents</h3>
                  <p className="text-sm text-gray-600">
                    Rassemblez tous les documents nécessaires (factures, photos, témoignages)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-lg font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Remplissez le formulaire</h3>
                  <p className="text-sm text-gray-600">Fournissez les détails du sinistre de manière précise et claire</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-lg font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Envoyez la déclaration</h3>
                  <p className="text-sm text-gray-600">Soumettez votre déclaration via notre plateforme sécurisée</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-lg font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Suivi en temps réel</h3>
                  <p className="text-sm text-gray-600">Suivez l'évolution de votre dossier via votre espace personnel</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900 font-semibold flex items-center gap-2">
                <i className="fa-solid fa-info-circle"></i>
                Délai de déclaration: 48 heures après le sinistre
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Formulaire de Déclaration</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <input
                type="text"
                placeholder="Numéro de dossier"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="date"
                placeholder="Date du sinistre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Type de sinistre</option>
                <option>Sinistre matériel</option>
                <option>Sinistre corporel</option>
                <option>Sinistre responsabilité civile</option>
                <option>Autre</option>
              </select>

              <textarea
                placeholder="Description détaillée du sinistre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
              ></textarea>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="agree" className="w-4 h-4" />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  J'certifie l'exactitude des informations fournies
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
              >
                Déclarer le sinistre
              </button>
            </form>
          </div>
        </div>

        {/* Recent Claims */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Mes déclarations récentes</h2>

          <div className="space-y-3">
            {[1, 2, 3].map((claim) => (
              <div
                key={claim}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-bold text-gray-800">Sinistre #{2024000 + claim}</p>
                  <p className="text-sm text-gray-600">Déclaré le 15 mars 2024</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold">
                    En cours
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
