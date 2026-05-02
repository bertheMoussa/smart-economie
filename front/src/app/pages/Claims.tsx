import { Link } from 'react-router-dom';

export default function Claims() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-2xl mx-auto">
          <div className="mb-6">
            <i className="fa-solid fa-shield-halved text-[#228B22] text-6xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-[#0a2342] mb-4">Déclaration de Sinistres</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 mb-6 text-left">
            <p className="text-gray-700">
              La déclaration de sinistre est réservée aux membres de notre communauté. 
              <br /><br />
              Pour déclarer un sinistre, connectez-vous à votre <strong>espace personnel</strong> et accédez à la section "Mes Sinistres".
            </p>
          </div>

          <div className="space-y-4 mb-8 text-left">
            <h2 className="text-xl font-bold text-[#0a2342]">Étapes pour déclarer un sinistre :</h2>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#228B22] text-white text-lg font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Connectez-vous</h3>
                <p className="text-sm text-gray-600">
                  Accédez à votre espace personnel avec vos identifiants
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#228B22] text-white text-lg font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Allez à "Mes Sinistres"</h3>
                <p className="text-sm text-gray-600">
                  Cliquez sur l'onglet "Mes Sinistres" dans votre tableau de bord
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#228B22] text-white text-lg font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Déclarez votre sinistre</h3>
                <p className="text-sm text-gray-600">
                  Remplissez le formulaire et soumettez vos documents justificatifs
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              to="/login"
              className="bg-[#228B22] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a6b1a] transition inline-block"
            >
              Se connecter
            </Link>
            <Link
              to="/"
              className="border-2 border-[#228B22] text-[#228B22] px-8 py-3 rounded-full font-bold hover:bg-[#e8f5e9] transition inline-block"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
