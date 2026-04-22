import { Link } from 'react-router-dom';

export default function Subscription() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-[#0a2342] mb-12 text-center">Souscription</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Plan 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Plan Essentiel</h2>
              <div className="text-4xl font-bold">29€</div>
              <p className="text-blue-100 text-sm">/mois</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Couverture de base</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Support client 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Accès au portail</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-times text-gray-300"></i>
                  <span className="text-gray-400">Cagnotte communautaire</span>
                </li>
              </ul>
              <Link
                to="/subscription?plan=essential"
                className="block w-full bg-blue-500 text-white font-bold py-3 rounded-lg text-center hover:bg-blue-600 transition"
              >
                Choisir ce plan
              </Link>
            </div>
          </div>

          {/* Plan 2 (Popular) */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform scale-105 border-2 border-green-500">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 relative">
              <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                POPULAIRE
              </div>
              <h2 className="text-2xl font-bold mb-2">Plan Avantages</h2>
              <div className="text-4xl font-bold">59€</div>
              <p className="text-green-100 text-sm">/mois</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Couverture complète</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Support prioritaire</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Accès cagnotte</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Remboursement 100%</span>
                </li>
              </ul>
              <Link
                to="/subscription?plan=avantages"
                className="block w-full bg-green-500 text-white font-bold py-3 rounded-lg text-center hover:bg-green-600 transition"
              >
                Choisir ce plan
              </Link>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Plan Premium</h2>
              <div className="text-4xl font-bold">99€</div>
              <p className="text-purple-100 text-sm">/mois</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Couverture maximale</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Gestionnaire personnel</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Assistance 24/7 VIP</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-green-500 font-bold"></i>
                  <span className="text-gray-700">Avantages exclusifs</span>
                </li>
              </ul>
              <Link
                to="/subscription?plan=premium"
                className="block w-full bg-purple-500 text-white font-bold py-3 rounded-lg text-center hover:bg-purple-600 transition"
              >
                Choisir ce plan
              </Link>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0a2342] mb-6 text-center">Formulaire de Souscription</h2>
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
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Choisir un plan</option>
              <option>Plan Essentiel - 29€/mois</option>
              <option>Plan Avantages - 59€/mois</option>
              <option>Plan Premium - 99€/mois</option>
            </select>

            <textarea
              placeholder="Notes additionnelles (optionnel)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                J'accepte les conditions d'utilisation
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
            >
              Soumettre ma souscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
