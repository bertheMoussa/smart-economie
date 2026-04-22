export default function Contact() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-[#0a2342] mb-12 text-center">Nous Contacter</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
              <i className="fa-solid fa-phone"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Téléphone</h3>
            <p className="text-gray-600 mb-2">+22 535 257 390</p>
            <p className="text-sm text-gray-500">Lun-Sam: 9h-19h</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl text-green-500 mb-4 flex justify-center">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">dizinn@ecumnnle.com</p>
            <p className="text-sm text-gray-500">Réponse sous 24h</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl text-purple-500 mb-4 flex justify-center">
              <i className="fa-solid fa-map-marker-alt"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bureau</h3>
            <p className="text-gray-600 mb-2">Smart-Économie HQ</p>
            <p className="text-sm text-gray-500">123 Rue, Ville</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Envoyez-nous un message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Adresse email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Sujet du message</option>
                <option>Question générale</option>
                <option>Support technique</option>
                <option>Réclamation</option>
                <option>Autre</option>
              </select>

              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Questions Fréquentes</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Quel est le délai de traitement?</h3>
                <p className="text-sm text-gray-600">Nous traitons les demandes sous 24-48 heures</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Comment modifier ma souscription?</h3>
                <p className="text-sm text-gray-600">Accédez à votre espace personnel pour modifier vos informations</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Puis-je résilier mon contrat?</h3>
                <p className="text-sm text-gray-600">Oui, avec un préavis de 30 jours via votre espace personnel</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-1">Comment accéder à la cagnotte communautaire?</h3>
                <p className="text-sm text-gray-600">Les membres du Plan Avantages et Premium y ont accès</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
