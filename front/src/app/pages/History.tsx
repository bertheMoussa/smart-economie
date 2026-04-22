export default function History() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-[#0a2342] mb-12 text-center">Notre Histoire</h1>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
          <h2 className="text-2xl font-bold text-green-600 mb-8 text-center">Nos Jalons</h2>

          <div className="space-y-8">
            {/* 2020 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-lg">
                  2020
                </div>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">La Naissance d'une Idée</h3>
                <p className="text-gray-600">
                  Smart-Économie a commencé comme une simple idée: créer une assurance qui respecte les valeurs
                  éthiques et religieuses.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-lg">
                  2021
                </div>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Lancement de la Plateforme</h3>
                <p className="text-gray-600">
                  Après un an de développement, nous avons lancé notre plateforme avec les premiers clients en ligne.
                  La réponse a dépassé nos attentes!
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-lg">
                  2022
                </div>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Expansion Régionale</h3>
                <p className="text-gray-600">
                  Nous avons étendu nos services à plusieurs pays. La communauté a grandi de 500% cette année-là.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-lg">
                  2023
                </div>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Innovation Technologique</h3>
                <p className="text-gray-600">
                  Lancement de la cagnotte communautaire et des paiements participatifs. Une révolution dans le
                  secteur!
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-lg">
                  2024
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#0a2342] mb-2">Aujourd'hui</h3>
                <p className="text-gray-600">
                  Avec plus de 50 000 membres, nous continuons à innover et à servir notre communauté avec intégrité et
                  transparence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Notre Vision</h3>
            <p className="text-gray-700 mb-4">
              Être le leader mondial en assurance éthique et transparente, où chaque communauté peut se sentir en
              sécurité et respectée.
            </p>
            <p className="text-gray-700">
              Nous rêvons d'un monde où l'assurance n'est pas un produit vendu, mais une valeur partagée entre tous.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Notre Engagement</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-check text-green-500"></i>
                Transparence totale dans tous les processus
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-check text-green-500"></i>
                Respect des valeurs islamiques (Sharia)
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-check text-green-500"></i>
                Inclusion et accessibilité pour tous
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-check text-green-500"></i>
                Innovation continue au service de la communauté
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-2xl font-bold text-[#0a2342] mb-8 text-center">Notre Équipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Benomar', role: 'CEO & Co-fondateur' },
              { name: 'Fatima Al-Rashid', role: 'CTO & Co-fondatrice' },
              { name: 'Mohammad Khalil', role: 'Head of Operations' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-green-400 mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                  <i className="fa-solid fa-user"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sm text-green-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
