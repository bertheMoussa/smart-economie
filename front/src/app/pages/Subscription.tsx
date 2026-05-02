import { Link } from 'react-router-dom';

export default function Subscription() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-[#0a2342] mb-4">Plans de Souscription</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos besoins. Tous les plans incluent une protection éthique et transparente.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Plan 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-2">Plan Essentiel</h2>
              <div className="text-4xl font-bold">29€</div>
              <p className="text-blue-100 text-sm">/mois</p>
              <p className="text-blue-100 text-xs mt-2">Pour débuter</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Couverture de base</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Support client 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Accès au portail</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Espace personnel</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-times text-gray-300"></i>
                  <span className="text-gray-400">Cagnotte communautaire</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="block w-full bg-blue-500 text-white font-bold py-3 rounded-lg text-center hover:bg-blue-600 transition"
              >
                Choisir ce plan
              </Link>
            </div>
          </div>

          {/* Plan 2 (Popular) */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform scale-105 border-2 border-[#228B22]">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 relative">
              <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <i className="fa-solid fa-star"></i>
                POPULAIRE
              </div>
              <h2 className="text-2xl font-bold mb-2">Plan Avantages</h2>
              <div className="text-4xl font-bold">59€</div>
              <p className="text-white text-sm">/mois</p>
              <p className="text-white text-xs mt-2">Notre meilleure offre</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Couverture complète</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Support prioritaire</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Accès cagnotte</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Remboursement 100%</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Assistance avancée</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="block w-full bg-[#228B22] text-white font-bold py-3 rounded-lg text-center hover:bg-[#1a6b1a] transition"
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
              <p className="text-purple-100 text-xs mt-2">Pour les pros</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Couverture maximale</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Gestionnaire personnel</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Assistance 24/7 VIP</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Avantages exclusifs</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[#228B22] font-bold"></i>
                  <span className="text-gray-700">Priorité absolue</span>
                </li>
              </ul>
              <Link
                to="/login"
                className="block w-full bg-purple-500 text-white font-bold py-3 rounded-lg text-center hover:bg-purple-600 transition"
              >
                Choisir ce plan
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-8 text-center">Comparaison des Plans</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-green-50">
                  <th className="text-left px-6 py-4 font-bold text-gray-700">Fonctionnalité</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-700">Essentiel</th>
                  <th className="text-center px-6 py-4 font-bold text-[#228B22] bg-[#e8f5e9]">Avantages</th>
                  <th className="text-center px-6 py-4 font-bold text-gray-700">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-semibold">Couverture de base</td>
                  <td className="text-center px-6 py-4"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                  <td className="text-center px-6 py-4 bg-[#e8f5e9]"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                  <td className="text-center px-6 py-4"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-semibold">Support client</td>
                  <td className="text-center px-6 py-4">24/7</td>
                  <td className="text-center px-6 py-4 bg-[#e8f5e9]">Prioritaire</td>
                  <td className="text-center px-6 py-4">VIP</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-semibold">Cagnotte Communautaire</td>
                  <td className="text-center px-6 py-4"><i className="fa-times text-gray-300"></i></td>
                  <td className="text-center px-6 py-4 bg-[#e8f5e9]"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                  <td className="text-center px-6 py-4"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-semibold">Gestionnaire personnel</td>
                  <td className="text-center px-6 py-4"><i className="fa-times text-gray-300"></i></td>
                  <td className="text-center px-6 py-4 bg-[#e8f5e9]"><i className="fa-times text-gray-300"></i></td>
                  <td className="text-center px-6 py-4"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 font-semibold">Espace personnel</td>
                  <td className="text-center px-6 py-4"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                  <td className="text-center px-6 py-4 bg-[#e8f5e9]"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                  <td className="text-center px-6 py-4"><i className="fa-solid fa-check text-[#228B22]"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0a2342] mb-8 text-center">Questions Fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0a2342] mb-2 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-[#228B22]"></i>
                Puis-je changer de plan?
              </h3>
              <p className="text-gray-600 text-sm">Oui, vous pouvez changer de plan à tout moment à partir de votre espace personnel.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0a2342] mb-2 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-[#228B22]"></i>
                Puis-je résilier mon contrat?
              </h3>
              <p className="text-gray-600 text-sm">Vous pouvez résilier à tout moment sans frais supplémentaires. Pas d'engagement!</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0a2342] mb-2 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-[#228B22]"></i>
                Y a-t-il des frais cachés?
              </h3>
              <p className="text-gray-600 text-sm">Non! Tous nos prix sont transparents. Ce que vous voyez est ce que vous payez.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-[#0a2342] mb-2 flex items-center gap-2">
                <i className="fa-solid fa-circle-question text-[#228B22]"></i>
                Comment se fait le paiement?
              </h3>
              <p className="text-gray-600 text-sm">Plusieurs options: carte bancaire, virement, ou wallet islamique certifié.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer?</h2>
          <p className="text-white mb-6">Souscrivez maintenant et rejoignez des milliers de membres satisfaits.</p>
          <Link
            to="/login"
            className="inline-block bg-white text-[#228B22] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            <i className="fa-solid fa-arrow-right mr-2"></i>
            Commencer ma souscription
          </Link>
        </div>
      </div>
    </div>
  );
}
