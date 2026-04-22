import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function DashboardEntreprise() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-[#f0f4f8] min-h-screen">
      {/* Top Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-[#0a2342]">Espace Entreprise</h1>
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
              <i className="fa-solid fa-building"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a2342]">
                {user.companyName}
              </h2>
              <p className="text-gray-600">Administrateur: {user.firstName}</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 shadow-sm overflow-x-auto">
          {[
            { id: 'overview', label: 'Aperçu', icon: 'fa-chart-line' },
            { id: 'employees', label: 'Employés', icon: 'fa-users' },
            { id: 'subscriptions', label: 'Contrats', icon: 'fa-file-contract' },
            { id: 'claims', label: 'Sinistres', icon: 'fa-file-lines' },
            { id: 'reporting', label: 'Rapports', icon: 'fa-chart-bar' },
            { id: 'profile', label: 'Paramètres', icon: 'fa-cog' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-green-500 text-white'
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
                label: 'Employés Couverts',
                value: '25',
                icon: 'fa-users',
                color: 'blue',
              },
              {
                label: 'Contrats Actifs',
                value: '3',
                icon: 'fa-file-contract',
                color: 'green',
              },
              {
                label: 'Sinistres Déclarés',
                value: '2',
                icon: 'fa-exclamation-triangle',
                color: 'orange',
              },
              {
                label: 'Primes Mensuelles',
                value: '1.475€',
                icon: 'fa-money-bill',
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

        {activeTab === 'employees' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[#0a2342]">Gestion des Employés</h3>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600">
                <i className="fa-solid fa-plus mr-2"></i>Ajouter un employé
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nom</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { name: 'Ahmed Ali', email: 'ahmed@company.com', status: 'Actif' },
                    { name: 'Fatima Hassan', email: 'fatima@company.com', status: 'Actif' },
                    { name: 'Mohamed Salam', email: 'mohamed@company.com', status: 'Inactif' },
                  ].map((employee, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-3 text-sm">{employee.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{employee.email}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          employee.status === 'Actif'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {employee.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-blue-600 hover:text-blue-700 mr-3">
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        <button className="text-red-600 hover:text-red-700">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'subscriptions' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#0a2342] mb-6">Contrats Actifs</h3>
            <div className="space-y-4">
              {[
                { name: 'Responsabilité Civile', price: '495€/mois', status: 'Actif' },
                { name: 'Assurance Santé Collective', price: '890€/mois', status: 'Actif' },
                { name: 'Protection Décès', price: '90€/mois', status: 'Actif' },
              ].map((contract, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-4 py-4 flex justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">{contract.name}</h4>
                    <p className="text-sm text-gray-600">{contract.price}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold h-fit">
                    {contract.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'claims' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#0a2342] mb-6">Sinistres Déclarés</h3>
            <div className="space-y-4">
              {[
                { id: '001', employee: 'Ahmed Ali', date: '10/03/2026', status: 'En cours' },
                { id: '002', employee: 'Fatima Hassan', date: '05/03/2026', status: 'Approuvé' },
              ].map((claim, idx) => (
                <div key={idx} className="border pl-4 py-4 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold text-gray-800">Sinistre #{claim.id}</p>
                      <p className="text-sm text-gray-600">{claim.employee} - {claim.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      claim.status === 'En cours'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {claim.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reporting' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#0a2342] mb-6">Rapports & Statistiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h4 className="font-bold text-gray-800 mb-4">Taux de Sinistralité</h4>
                <div className="text-3xl font-bold text-blue-600">8%</div>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="font-bold text-gray-800 mb-4">Économies Réalisées</h4>
                <div className="text-3xl font-bold text-green-600">4.200€</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
            <h3 className="text-xl font-bold text-[#0a2342] mb-6">Paramètres Entreprise</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Nom de l'entreprise</label>
                <p className="text-lg font-semibold text-gray-800">{user.companyName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email de contact</label>
                <p className="text-lg font-semibold text-gray-800">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Téléphone</label>
                <p className="text-lg font-semibold text-gray-800">{user.phone || '-'}</p>
              </div>
              <button className="mt-6 w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600">
                Modifier les paramètres
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
