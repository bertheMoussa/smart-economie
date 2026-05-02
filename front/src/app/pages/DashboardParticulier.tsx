import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function DashboardParticulier() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [showClaimForm, setShowClaimForm] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-[#f0f4f8] min-h-screen">
      {/* Top Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-[#0a2342]">Mon Espace Personnel</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user.email}</span>
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-700 text-sm font-semibold"
            >
              <i className="fa-solid fa-sign-out mr-2"></i>Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-7xl py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-2xl">
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a2342]">
                Bienvenue, {user.firstName}!
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 shadow-sm">
          {[
            { id: 'overview', label: 'Aperçu', icon: 'fa-chart-line' },
            { id: 'subscriptions', label: 'Mes Souscriptions', icon: 'fa-file-contract' },
            { id: 'claims', label: 'Mes Sinistres', icon: 'fa-file-lines' },
            { id: 'profile', label: 'Profil', icon: 'fa-user-gear' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-[#228B22] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className={`fa-solid ${tab.icon}`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            {[
              {
                label: 'Souscriptions Actives',
                value: '1',
                icon: 'fa-check-circle',
                color: 'green',
              },
              {
                label: 'Sinistres Déclarés',
                value: '0',
                icon: 'fa-exclamation-triangle',
                color: 'yellow',
              },
              {
                label: 'Cotisations Payées',
                value: '29€',
                icon: 'fa-credit-card',
                color: 'blue',
              },
              {
                label: 'Cagnotte Communautaire',
                value: '10€',
                icon: 'fa-handshake',
                color: 'purple',
              },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <div className={`text-4xl text-${stat.color}-500 mb-3 flex justify-center`}>
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <p className="text-gray-600 text-sm text-center">{stat.label}</p>
                <p className="text-2xl font-bold text-[#0a2342] text-center mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#0a2342] mb-6">Mes Souscriptions</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#228B22] pl-4 py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">Plan Avantages</h4>
                    <p className="text-sm text-gray-600">59€ / mois</p>
                    <p className="text-xs text-gray-500 mt-1">Souscrit le 15 janvier 2026</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#e8f5e9] text-[#228B22] text-xs font-bold">
                    Actif
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'claims' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#0a2342]">Mes Sinistres</h3>
              <button
                onClick={() => setShowClaimForm(!showClaimForm)}
                className="bg-[#228B22] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1a6b1a] transition"
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Déclarer un sinistre
              </button>
            </div>

            {showClaimForm && (
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                <h4 className="font-bold text-[#0a2342] mb-4">Nouvelle déclaration de sinistre</h4>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type de sinistre</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]">
                        <option>Choisir...</option>
                        <option>Sinistre matériel</option>
                        <option>Sinistre corporel</option>
                        <option>Responsabilité civile</option>
                        <option>Vol/Incendie</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Date du sinistre</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Lieu du sinistre</label>
                    <input
                      type="text"
                      placeholder="Ex: Rue de la Paix, Paris"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description détaillée</label>
                    <textarea
                      placeholder="Décrivez les circonstances du sinistre..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                      rows={4}
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Montant du dommage estimé</label>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-2">€</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Pièces jointes</label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22]"
                    />
                    <p className="text-xs text-gray-500 mt-1">Photos, documents, factures, etc.</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowClaimForm(false)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:border-gray-400 transition"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#228B22] text-white py-2 rounded-lg font-semibold hover:bg-[#1a6b1a] transition"
                    >
                      Déclarer le sinistre
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="text-center py-12">
              <i className="fa-solid fa-check-circle text-[#228B22] text-5xl mb-4"></i>
              <p className="text-gray-600">Aucun sinistre déclaré</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
            <h3 className="text-xl font-bold text-[#0a2342] mb-6">Mes Informations</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Prénom</label>
                  <p className="text-lg font-semibold text-gray-800">{user.firstName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Nom</label>
                  <p className="text-lg font-semibold text-gray-800">{user.lastName || '-'}</p>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <p className="text-lg font-semibold text-gray-800">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Téléphone</label>
                <p className="text-lg font-semibold text-gray-800">{user.phone || '-'}</p>
              </div>
              <button className="mt-6 w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600">
                Modifier mes informations
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
