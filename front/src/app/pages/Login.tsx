import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FormInput, FormButton, FormCheckbox } from '../forms';
import type { UserType } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [userType, setUserType] = useState<UserType>('particulier');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';

    if (isSignup) {
      if (!formData.firstName) newErrors.firstName = 'Prénom requis';
      if (userType === 'particulier' && !formData.lastName)
        newErrors.lastName = 'Nom requis';
      if (userType === 'entreprise' && !formData.companyName)
        newErrors.companyName = 'Nom entreprise requis';
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (isSignup) {
        // TODO: Appel signup
        await login(formData.email, formData.password, userType);
      } else {
        await login(formData.email, formData.password, userType);
      }

      if (userType === 'particulier') {
        navigate('/dashboard/particulier');
      } else {
        navigate('/dashboard/entreprise');
      }
    } catch (error) {
      setErrors({ general: 'Erreur d\'authentification' });
    }
  };

  return (
    <div className="bg-[#f0f4f8] min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-900 overflow-hidden mx-auto mb-3">
              <span className="text-blue-900 text-3xl font-bold italic mr-1">S</span>
              <span className="text-green-500 text-xl font-bold absolute bottom-2 right-2">+</span>
              <i className="fa-solid fa-leaf text-green-500 absolute top-2 right-1 text-xs"></i>
            </div>
            <h1 className="text-2xl font-bold text-[#0a2342]">Smart-Économie</h1>
            <p className="text-sm text-gray-500 mt-1">L'Assurance Économique</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 rounded-lg font-bold transition ${
                !isSignup
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 rounded-lg font-bold transition ${
                isSignup
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Inscription
            </button>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Type de compte
            </label>
            <div className="flex gap-3">
              <label className="flex-1 flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition"
                style={{
                  borderColor: userType === 'particulier' ? '#22c55e' : '#e5e7eb',
                  backgroundColor: userType === 'particulier' ? '#f0fdf4' : 'white',
                }}>
                <input
                  type="radio"
                  name="userType"
                  value="particulier"
                  checked={userType === 'particulier'}
                  onChange={(e) => setUserType(e.target.value as UserType)}
                  className="w-4 h-4"
                />
                <span className="text-sm font-semibold text-gray-700">
                  <i className="fa-solid fa-user mr-2"></i>Particulier
                </span>
              </label>

              <label className="flex-1 flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition"
                style={{
                  borderColor: userType === 'entreprise' ? '#22c55e' : '#e5e7eb',
                  backgroundColor: userType === 'entreprise' ? '#f0fdf4' : 'white',
                }}>
                <input
                  type="radio"
                  name="userType"
                  value="entreprise"
                  checked={userType === 'entreprise'}
                  onChange={(e) => setUserType(e.target.value as UserType)}
                  className="w-4 h-4"
                />
                <span className="text-sm font-semibold text-gray-700">
                  <i className="fa-solid fa-building mr-2"></i>Entreprise
                </span>
              </label>
            </div>
          </div>

          {/* Error Messages */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
              <i className="fa-solid fa-exclamation-circle mr-2"></i>
              {errors.general}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <FormInput
                    label="Prénom"
                    name="firstName"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                  />

                  {userType === 'particulier' ? (
                    <FormInput
                      label="Nom"
                      name="lastName"
                      placeholder="Nom"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                    />
                  ) : (
                    <FormInput
                      label="Nom Entreprise"
                      name="companyName"
                      placeholder="Nom Entreprise"
                      value={formData.companyName}
                      onChange={handleChange}
                      error={errors.companyName}
                    />
                  )}
                </div>

                <FormInput
                  label="Téléphone"
                  name="phone"
                  type="tel"
                  placeholder="+22 5XX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </>
            )}

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
              label="Mot de passe"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            {isSignup && (
              <FormInput
                label="Confirmer le mot de passe"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            )}

            {!isSignup && (
              <FormCheckbox
                label="Se souvenir de moi"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            )}

            <FormButton loading={isLoading} variant="primary">
              {isSignup ? 'Créer mon compte' : 'Se connecter'}
            </FormButton>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            {isSignup ? 'Vous avez déjà un compte? ' : 'Pas encore de compte? '}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-green-600 font-semibold hover:text-green-700"
            >
              {isSignup ? 'Se connecter' : "S'inscrire"}
            </button>
          </p>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-white rounded-lg shadow text-center text-sm text-gray-600">
          <i className="fa-solid fa-shield-check text-green-500 mr-2"></i>
          Vos données sont protégées et conformes à Sharia
        </div>
      </div>
    </div>
  );
}
