import { useEffect, useState } from "react";
import api from "../../lib/api";

const TestBack: React.FC = () => {
  const [message, setMessage] = useState<string>("En attente...");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fonction qui fait le test
  const testApi = async () => {
    setLoading(true);
    setError(null);
    setMessage("Chargement...");

    try {
      // Test GET sur /test (ou change l'endpoint si tu veux tester autre chose)
      const response = await api.get('/test');

      if (response.data) {
        setMessage(`Connexion OK ✅ → Le message de test est: ${response.data}`);
      } 
    } catch (err: any) {
      console.error("Erreur lors du test :", err);

      if (err.response) {
        // Erreur 4xx ou 5xx du serveur
        setError(`Erreur ${err.response.status} : ${err.response.data?.message || "Détails non disponibles"}`);
        setMessage("❌ Le backend a répondu avec une erreur");
      } else if (err.request) {
        // Pas de réponse (CORS, serveur éteint, mauvais port, etc.)
        setError("Impossible de joindre le backend. Vérifiez qu'il tourne sur http://localhost:8080");
        setMessage("❌ Erreur de connexion au backend");
      } else {
        setError(err.message || "Erreur inconnue");
        setMessage("❌ Une erreur est survenue");
      }
    } finally {
      setLoading(false);
    }
  };

  // Lancement automatique au montage (optionnel)
  useEffect(() => {
    testApi();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Test de connexion au Backend
      </h1>

      <div className="mb-6 space-y-3">
        <p className="text-lg">
          Statut : <span className={message.includes("OK") ? "text-green-600" : "text-red-600 font-medium"}>
            {message}
          </span>
        </p>

        {error && (
          <p className="text-red-600 bg-red-50 p-3 rounded border border-red-200">
            {error}
          </p>
        )}

        {loading && (
          <p className="text-blue-600 italic">Requête en cours...</p>
        )}
      </div>

      <button
        onClick={testApi}
        disabled={loading}
        className={`
          px-6 py-3 rounded-lg font-medium text-white transition
          ${loading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"}
        `}
      >
        {loading ? "Chargement..." : "Tester la connexion"}
      </button>

      <p className="mt-4 text-sm text-gray-500">
        Teste l'endpoint <code className="bg-gray-100 px-1 rounded">GET /test</code>
      </p>
    </div>
  );
};

export default TestBack;