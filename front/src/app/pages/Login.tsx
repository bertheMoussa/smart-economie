import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { UserType } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [userType, setUserType] = useState<UserType>('particulier');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    // Champs entreprise
    registrationNumber: '',
    sector: '',
    fleetSize: '',
    address: '',
    city: '',
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
      if (userType === 'particulier' && !formData.lastName) newErrors.lastName = 'Nom requis';
      if (userType === 'entreprise') {
        if (!formData.companyName) newErrors.companyName = "Nom d'entreprise requis";
        if (!formData.registrationNumber) newErrors.registrationNumber = 'N° RC requis';
        if (!formData.sector) newErrors.sector = "Secteur d'activité requis";
      }
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
      await login(formData.email, formData.password, userType);
      navigate(userType === 'particulier' ? '/dashboard/particulier' : '/dashboard/entreprise');
    } catch {
      setErrors({ general: "Erreur d'authentification. Vérifiez vos identifiants." });
    }
  };

  const switchMode = (signup: boolean) => {
    setIsSignup(signup);
    setErrors({});
    setFormData({
      email: '', password: '', confirmPassword: '', firstName: '', lastName: '',
      companyName: '', phone: '', registrationNumber: '', sector: '', fleetSize: '', address: '', city: '',
    });
  };

  const sectors = [
    'Transport & Logistique', 'BTP & Construction', 'Commerce & Distribution',
    'Artisanat & Services', 'Agriculture', 'Industrie', 'Santé', 'Éducation', 'Autre',
  ];

  return (
    <div className="min-h-screen flex">

      {/* ── Panneau gauche — Brand (2/5) ─────────────────────────────── */}
      <div className="hidden lg:flex lg:w-2/5 bg-[#0a2342] flex-col justify-between p-10 shrink-0">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#228B22] flex items-center justify-center">
            <i className="fa-solid fa-leaf text-white"></i>
          </div>
          <span className="text-white font-extrabold text-lg tracking-tight">Smart-Économie</span>
        </Link>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-3 block">
            Assurance Solidaire — Takaful
          </span>
          <h2 className="text-3xl font-extrabold text-white leading-tight mb-5">
            Rejoignez une communauté
            <br />qui prend soin de vous
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Couverture auto éthique et transparente. Sans cotisation mensuelle.
          </p>
          <div className="space-y-4">
            {[
              { icon: 'fa-ban',          text: 'Aucune cotisation mensuelle' },
              { icon: 'fa-mosque',       text: '100 % conforme Sharia' },
              { icon: 'fa-users',        text: 'Entraide solidaire' },
              { icon: 'fa-shield-halved',text: 'Couverture immédiate' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${item.icon} text-[#228B22] text-xs`}></i>
                </div>
                <span className="text-white/60 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Smart-Économie — Tous droits réservés
        </p>
      </div>

      {/* ── Panneau droit — Formulaire (3/5) ────────────────────────── */}
      <div className="w-full lg:w-3/5 flex items-start justify-center bg-white overflow-y-auto">
        <div className="w-full px-12 py-10">

          {/* Logo mobile */}
          <div className="flex lg:hidden items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#228B22] flex items-center justify-center">
              <i className="fa-solid fa-leaf text-white"></i>
            </div>
            <span className="font-extrabold text-[#0a2342] text-lg">Smart-Économie</span>
          </div>

          {/* Titre */}
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold text-[#0a2342]">
              {isSignup ? 'Créer un compte' : 'Bon retour !'}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {isSignup ? 'Rejoignez la communauté Smart-Économie' : 'Connectez-vous à votre espace membre'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {[{ label: 'Connexion', val: false }, { label: 'Inscription', val: true }].map(({ label, val }) => (
              <button
                key={label}
                onClick={() => switchMode(val)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  isSignup === val ? 'bg-white text-[#0a2342] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Type de compte */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Type de compte</p>
            <div className="grid grid-cols-2 gap-3">
              {(['particulier', 'entreprise'] as UserType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${
                    userType === type ? 'border-[#228B22] bg-green-50' : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${userType === type ? 'bg-[#228B22]' : 'bg-gray-100'}`}>
                    <i className={`fa-solid ${type === 'particulier' ? 'fa-user' : 'fa-building'} text-sm ${userType === type ? 'text-white' : 'text-gray-400'}`}></i>
                  </div>
                  <span className={`text-sm font-bold ${userType === type ? 'text-[#228B22]' : 'text-gray-500'}`}>
                    {type === 'particulier' ? 'Particulier' : 'Entreprise'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Erreur générale */}
          {errors.general && (
            <div className="mb-4 flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
              <i className="fa-solid fa-circle-exclamation shrink-0"></i>
              {errors.general}
            </div>
          )}

          {/* ── FORMULAIRE ─────────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* ── PARTICULIER — inscription ── */}
            {isSignup && userType === 'particulier' && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Prénom" name="firstName" placeholder="Mohamed"
                    value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                  <Field label="Nom" name="lastName" placeholder="Alaoui"
                    value={formData.lastName} onChange={handleChange} error={errors.lastName} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Téléphone" name="phone" type="tel" placeholder="+212 6 00 00 00 00"
                    value={formData.phone} onChange={handleChange} icon="fa-phone" />
                  <Field label="Adresse email" name="email" type="email" placeholder="email@exemple.com"
                    value={formData.email} onChange={handleChange} error={errors.email} icon="fa-envelope" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <PasswordField label="Mot de passe" name="password" value={formData.password}
                    onChange={handleChange} error={errors.password} show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
                  <Field label="Confirmer" name="confirmPassword" type="password" placeholder="••••••••"
                    value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} icon="fa-lock" />
                </div>
              </>
            )}

            {/* ── ENTREPRISE — inscription ── */}
            {isSignup && userType === 'entreprise' && (
              <>
                {/* Ligne 1 : responsable */}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Prénom du responsable" name="firstName" placeholder="Mohamed"
                    value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                  <Field label="Nom du responsable" name="lastName" placeholder="Alaoui"
                    value={formData.lastName} onChange={handleChange} />
                </div>

                {/* Ligne 2 : raison sociale + RC */}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Raison sociale" name="companyName" placeholder="Ma Société SARL"
                    value={formData.companyName} onChange={handleChange} error={errors.companyName} icon="fa-building" />
                  <Field label="N° Registre de Commerce" name="registrationNumber" placeholder="RC-123456"
                    value={formData.registrationNumber} onChange={handleChange} error={errors.registrationNumber} icon="fa-hashtag" />
                </div>

                {/* Ligne 3 : secteur + nb véhicules */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Secteur d'activité
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                        <i className="fa-solid fa-briefcase text-sm"></i>
                      </span>
                      <select name="sector" value={formData.sector} onChange={handleChange}
                        className={`w-full pl-10 pr-8 py-3 rounded-xl border text-sm text-gray-700 outline-none appearance-none transition-all focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 ${
                          errors.sector ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
                        }`}>
                        <option value="">Sélectionnez</option>
                        {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs pointer-events-none"></i>
                    </div>
                    {errors.sector && <p className="text-red-500 text-xs mt-1">{errors.sector}</p>}
                  </div>
                  <Field label="Nombre de véhicules" name="fleetSize" type="number" placeholder="Ex : 5"
                    value={formData.fleetSize} onChange={handleChange} icon="fa-car" />
                </div>

                {/* Ligne 4 : adresse + ville */}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Adresse" name="address" placeholder="123 Rue Exemple"
                    value={formData.address} onChange={handleChange} icon="fa-location-dot" />
                  <Field label="Ville" name="city" placeholder="Casablanca"
                    value={formData.city} onChange={handleChange} icon="fa-city" />
                </div>

                {/* Ligne 5 : téléphone + email */}
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Téléphone" name="phone" type="tel" placeholder="+212 6 00 00 00 00"
                    value={formData.phone} onChange={handleChange} icon="fa-phone" />
                  <Field label="Adresse email" name="email" type="email" placeholder="email@exemple.com"
                    value={formData.email} onChange={handleChange} error={errors.email} icon="fa-envelope" />
                </div>

                {/* Ligne 6 : mots de passe */}
                <div className="grid grid-cols-2 gap-3">
                  <PasswordField label="Mot de passe" name="password" value={formData.password}
                    onChange={handleChange} error={errors.password} show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
                  <Field label="Confirmer" name="confirmPassword" type="password" placeholder="••••••••"
                    value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} icon="fa-lock" />
                </div>
              </>
            )}

            {/* ── CONNEXION ── */}
            {!isSignup && (
              <>
                <Field label="Adresse email" name="email" type="email" placeholder="email@exemple.com"
                  value={formData.email} onChange={handleChange} error={errors.email} icon="fa-envelope" />
                <PasswordField label="Mot de passe" name="password" value={formData.password}
                  onChange={handleChange} error={errors.password} show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 accent-[#228B22] rounded" />
                    <span className="text-sm text-gray-500">Se souvenir de moi</span>
                  </label>
                  <button type="button" className="text-sm text-[#228B22] font-semibold hover:underline">
                    Mot de passe oublié ?
                  </button>
                </div>
              </>
            )}

            {/* Bouton submit */}
            <button type="submit" disabled={isLoading}
              className="w-full bg-[#228B22] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#1a6b1a] transition-all shadow-md mt-1 disabled:opacity-60 flex items-center justify-center gap-2">
              {isLoading ? (
                <><i className="fa-solid fa-circle-notch fa-spin"></i> Chargement...</>
              ) : isSignup ? (
                <><i className="fa-solid fa-user-plus"></i> Créer mon compte</>
              ) : (
                <><i className="fa-solid fa-right-to-bracket"></i> Se connecter</>
              )}
            </button>
          </form>

          {/* Switch mode */}
          <p className="text-center text-sm text-gray-400 mt-6">
            {isSignup ? 'Vous avez déjà un compte ? ' : 'Pas encore membre ? '}
            <button onClick={() => switchMode(!isSignup)} className="text-[#228B22] font-bold hover:underline">
              {isSignup ? 'Se connecter' : "S'inscrire gratuitement"}
            </button>
          </p>

          {/* Badge sécurité */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-300 text-xs">
            <i className="fa-solid fa-shield-halved text-[#228B22]"></i>
            <span>Données protégées — Conforme Sharia & RGPD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Champ input réutilisable ────────────────────────────────────── */
function Field({
  label, name, type = 'text', placeholder, value, onChange, error, icon,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; icon?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
            <i className={`fa-solid ${icon} text-sm`}></i>
          </span>
        )}
        <input
          type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-xl border text-sm text-gray-700 outline-none transition-all focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 ${
            error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* ── Champ mot de passe avec toggle ─────────────────────────────── */
function PasswordField({
  label, name, value, onChange, error, show, onToggle,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; show: boolean; onToggle: () => void;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
          <i className="fa-solid fa-lock text-sm"></i>
        </span>
        <input
          type={show ? 'text' : 'password'} name={name} placeholder="••••••••"
          value={value} onChange={onChange}
          className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm text-gray-700 outline-none transition-all focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 ${
            error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
          }`}
        />
        <button type="button" onClick={onToggle}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition">
          <i className={`fa-solid ${show ? 'fa-eye-slash' : 'fa-eye'} text-sm`}></i>
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
