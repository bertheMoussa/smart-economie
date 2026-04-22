/**
 * 📝 Exemple Avancé: Page de Souscription avec State Management et Validation
 * 
 * Ce fichier montre comment:
 * 1. Utiliser les composants de formulaire
 * 2. Gérer l'état avec useState
 * 3. Valider les données
 * 4. Appeler une API
 * 5. Gérer les erreurs
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormInput,
  FormSelect,
  FormCheckbox,
  FormButton,
  FormTextArea,
} from '../forms';
import { SUBSCRIPTION_PLANS, CLAIM_TYPES } from '../constants';
import { isValidEmail, isValidPhone, apiCall } from '../utils/helpers';

interface SubscriptionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  plan: string;
  acceptTerms: boolean;
  notes?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  plan?: string;
  acceptTerms?: string;
}

export default function AdvancedSubscriptionForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<SubscriptionFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: '',
    acceptTerms: false,
    notes: '',
  });

  /**
   * Validate form data
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }

    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Veuillez entrer un numéro de téléphone valide';
    }

    if (!formData.plan) {
      newErrors.plan = 'Veuillez sélectionner un plan';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    setLoading(true);

    try {
      // Call API
      const response = await apiCall('/api/subscriptions', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      console.log('Subscription created:', response);
      setSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setErrors({ plan: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handle input change
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });

    // Clear error for this field
    setErrors({ ...errors, [name]: undefined });
  };

  if (success) {
    return (
      <div className="bg-[#f0f4f8] min-h-screen py-12 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md text-center">
          <div className="text-5xl text-green-500 mb-4 flex justify-center">
            <i className="fa-solid fa-check-circle"></i>
          </div>
          <h2 className="text-2xl font-bold text-[#0a2342] mb-2">Succès!</h2>
          <p className="text-gray-600 mb-4">Votre souscription a été enregistrée avec succès.</p>
          <p className="text-sm text-gray-500">Vous allez être redirigé vers l'accueil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h1 className="text-3xl font-bold text-[#0a2342] mb-8">Formulaire de Souscription Avancé</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Données personnelles */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">
                <i className="fa-solid fa-user mr-2"></i>
                Informations Personnelles
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Prénom"
                name="firstName"
                placeholder="Entrez votre prénom"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
              />

              <FormInput
                label="Nom"
                name="lastName"
                placeholder="Entrez votre nom"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
              />
            </div>

            {/* Contact */}
            <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
              <h3 className="font-bold text-green-900 mb-2">
                <i className="fa-solid fa-envelope mr-2"></i>
                Informations de Contact
              </h3>
            </div>

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <FormInput
              label="Téléphone"
              name="phone"
              type="tel"
              placeholder="+22 5XX XXX XXX"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />

            {/* Plan de souscription */}
            <div className="bg-purple-50 rounded-lg p-4 mb-6 border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-2">
                <i className="fa-solid fa-shopping-cart mr-2"></i>
                Plan de Souscription
              </h3>
            </div>

            <FormSelect
              label="Choisir un plan"
              name="plan"
              options={SUBSCRIPTION_PLANS.map((p) => ({
                value: p.id,
                label: `${p.name} - ${p.price}${p.currency}${p.period}`,
              }))}
              value={formData.plan}
              onChange={handleChange}
              error={errors.plan}
              required
            />

            {/* Notes additionnelles */}
            <FormTextArea
              label="Notes additionnelles"
              name="notes"
              placeholder="Informations supplémentaires (optionnel)"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
            />

            {/* Conditions */}
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <FormCheckbox
                label="J'accepte les conditions d'utilisation et la politique de confidentialité"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                error={errors.acceptTerms}
              />
            </div>

            {/* Erreur globale */}
            {errors.plan && !formData.plan && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
                <i className="fa-solid fa-exclamation-circle mr-2"></i>
                {errors.plan}
              </div>
            )}

            {/* Bouton de soumission */}
            <FormButton type="submit" loading={loading} variant="primary">
              Soumettre ma souscription
            </FormButton>

            {/* Lien pour annuler */}
            <div className="text-center">
              <a href="/" className="text-green-600 hover:text-green-700 font-semibold text-sm">
                ← Retour à l'accueil
              </a>
            </div>
          </form>
        </div>

        {/* Résumé des plans */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0a2342] mb-6">Comparaison des Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-lg p-6 border-2 transition cursor-pointer ${
                  formData.plan === plan.id ? 'border-green-500 shadow-lg' : 'border-gray-200'
                }`}
                onClick={() => setFormData({ ...formData, plan: plan.id })}
              >
                <h3 className="font-bold text-lg text-gray-800">{plan.name}</h3>
                <p className="text-2xl font-bold text-green-600 my-2">
                  {plan.price}
                  {plan.currency}
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-green-500 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * UTILISATION:
 * 
 * 1. Importer dans App.tsx:
 *    import AdvancedSubscriptionForm from './pages/AdvancedSubscriptionForm';
 * 
 * 2. Ajouter la route:
 *    <Route path="/advanced-form" element={<AdvancedSubscriptionForm />} />
 * 
 * 3. Visiter: http://localhost:5173/advanced-form
 * 
 * FONCTIONNALITÉS:
 * ✅ Validation des champs
 * ✅ Gestion des erreurs
 * ✅ État du formulaire
 * ✅ Appel API simulé
 * ✅ Réponse succès/erreur
 * ✅ Redirection après soumission
 */
