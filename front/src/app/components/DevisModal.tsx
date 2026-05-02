import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface DevisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe?: () => void;
}

export function DevisModal({ isOpen, onClose, onSubscribe }: DevisModalProps) {
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    // Step 1: Vehicle
    brand: '',
    year: '',
    fuel: '',
    registration: '',
    // Step 2: Driver
    firstName: '',
    lastName: '',
    birthDate: '',
    zipCode: '',
    email: '',
    phone: '',
    licenseYear: '',
    bonusMalus: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleVehicleSelect = (type: string) => {
    setVehicleType(type);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubscribe = () => {
    onSubscribe?.();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#0a2342]">
                Obtenir mon <span className="text-[#228B22]">devis</span>
              </h2>
              <p className="text-gray-600 mt-2">En 3 étapes simples, recevez votre tarif personnalisé</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="h-2 rounded-full bg-[#228B22] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          {/* Step 1: Vehicle Info */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-6 text-[#0a2342]">Informations du véhicule</h3>

              {/* Vehicle Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { id: 'voiture', label: 'Voiture', icon: '🚗' },
                  { id: 'suv', label: 'SUV/4x4', icon: '🚙' },
                  { id: 'electrique', label: 'Électrique', icon: '⚡' },
                  { id: 'utilitaire', label: 'Utilitaire', icon: '🚐' },
                ].map(vehicle => (
                  <button
                    key={vehicle.id}
                    onClick={() => handleVehicleSelect(vehicle.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                      vehicleType === vehicle.id
                        ? 'border-[#228B22] bg-[#e8f5e9]'
                        : 'border-gray-200 hover:border-[#228B22] bg-white'
                    }`}
                  >
                    <div className="text-4xl mb-2">{vehicle.icon}</div>
                    <p className="font-medium text-[#0a2342]">{vehicle.label}</p>
                  </button>
                ))}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#0a2342]">Marque et modèle</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    placeholder="Ex: Peugeot 208"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0a2342]">Année</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                    >
                      <option value="">Choisir...</option>
                      <option value="2026">2026</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0a2342]">Énergie</label>
                    <select
                      name="fuel"
                      value={formData.fuel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                    >
                      <option value="">Choisir...</option>
                      <option value="essence">Essence</option>
                      <option value="diesel">Diesel</option>
                      <option value="hybride">Hybride</option>
                      <option value="electrique">Électrique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#0a2342]">Immatriculation (optionnel)</label>
                  <input
                    type="text"
                    name="registration"
                    value={formData.registration}
                    onChange={handleInputChange}
                    placeholder="AA-123-AA"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                  />
                </div>
              </div>

              <button
                onClick={nextStep}
                className="w-full mt-8 bg-[#228B22] text-white py-4 rounded-full font-bold text-lg hover:bg-[#1a6b1a] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Continuer
              </button>
            </div>
          )}

          {/* Step 2: Driver Info */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-6 text-[#0a2342]">Informations du conducteur</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0a2342]">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0a2342]">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0a2342]">Date de naissance</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#0a2342]">Code postal</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="75001"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#0a2342]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#0a2342]">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#0a2342]">Permis depuis</label>
                  <select
                    name="licenseYear"
                    value={formData.licenseYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22]"
                  >
                    <option value="">Choisir...</option>
                    <option value="plus5">Plus de 5 ans</option>
                    <option value="3a5">Entre 3 et 5 ans</option>
                    <option value="2a3">Entre 2 et 3 ans</option>
                    <option value="moins2">Moins de 2 ans</option>
                    <option value="moins1">Moins d'1 an (jeune conducteur)</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="bonus-malus"
                    name="bonusMalus"
                    checked={formData.bonusMalus}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border border-gray-200 cursor-pointer accent-green-500"
                  />
                  <label htmlFor="bonus-malus" className="text-sm text-gray-600 cursor-pointer">
                    J'ai un bonus malus (50%, 40%, etc.)
                  </label>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={prevStep}
                  className="flex-1 border-2 border-gray-300 text-[#0a2342] py-4 rounded-full font-bold hover:border-[#228B22] hover:text-[#228B22] transition-all duration-300"
                >
                  Retour
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 bg-[#228B22] text-white py-4 rounded-full font-bold hover:bg-[#1a6b1a] transition-all duration-300 shadow-lg"
                >
                  Voir mon tarif
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Quote Result */}
          {step === 3 && (
            <div className="animate-fade-in text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#228B22] to-[#1a6b1a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#0a2342]">Votre devis est prêt !</h3>
              <p className="text-gray-600 mb-8">Basé sur les informations fournies</p>

              {/* Quote Card */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-6 border border-[#228B22]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Formule recommandée</span>
                  <span className="bg-[#228B22] text-white px-3 py-1 rounded-full text-sm font-bold">Confort</span>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-5xl font-bold text-[#228B22]">39€</span>
                    <span className="text-gray-600">/mois</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Soit</p>
                    <p className="text-2xl font-bold text-[#0a2342]">468€/an</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700 text-left">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#228B22]" />
                    <span>Responsabilité civile</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#228B22]" />
                    <span>Dommages tous accidents</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#228B22]" />
                    <span>Vol & Incendie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#228B22]" />
                    <span>Assistance 0km</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-gray-300 text-[#0a2342] py-4 rounded-full font-bold hover:border-[#228B22] hover:text-[#228B22] transition-all duration-300"
                >
                  Modifier
                </button>
                <button
                  onClick={handleSubscribe}
                  className="flex-1 bg-[#228B22] text-white py-4 rounded-full font-bold hover:bg-[#1a6b1a] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Souscrire maintenant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
