import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
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
    email: '', password: '', confirmPassword: '', firstName: '', lastName: '',
    companyName: '', phone: '', registrationNumber: '', sector: '', fleetSize: '', address: '', city: '',
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await login(formData.email, formData.password, userType);
      navigate(userType === 'particulier' ? '/dashboard/particulier' : '/dashboard/entreprise');
    } catch {
      setErrors({ general: "Identifiants incorrects. Veuillez réessayer." });
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
    <div className="min-h-screen flex border-b-4 border-gray-200">

      {/* ── Panneau gauche — Brand ────────────────────────────────────── */}
      <div className="hidden lg:flex lg:w-2/5 bg-[#0a2342] flex-col justify-between p-12 relative overflow-hidden shrink-0">

        {/* Cercles décoratifs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-20 -left-16 w-56 h-56 rounded-full bg-[#228B22]/10 pointer-events-none" />
        <div className="absolute top-1/2 -right-10 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <Shield className="size-8 text-[#C9A227]" />
          <span className="text-white font-extrabold text-xl tracking-tight">
            Smart-<span className="text-[#C9A227]">Economie</span>
          </span>
        </Link>

        {/* Contenu central */}
        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#228B22] mb-4 block">
            Assurance Solidaire & Éthique
          </span>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Rejoignez une<br />
            communauté qui<br />
            <span className="text-[#228B22]">prend soin de vous</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            Protection auto éthique et transparente.<br />Sans cotisation mensuelle.
          </p>

          {/* Features — fond vert + icône blanche, uniforme */}
          <div className="space-y-4">
            {[
              { icon: 'fa-ban',           text: 'Zéro cotisation mensuelle'  },
              { icon: 'fa-scale-balanced',text: '100 % Finance éthique'      },
              { icon: 'fa-users',         text: 'Entraide solidaire'          },
              { icon: 'fa-shield-halved', text: 'Couverture immédiate'        },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#228B22] flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${item.icon} text-white text-sm`}></i>
                </div>
                <span className="text-white/70 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bas */}
        <p className="text-white/20 text-xs relative z-10">
          © {new Date().getFullYear()} Smart-Économie — Tous droits réservés
        </p>
      </div>

      {/* ── Panneau droit — Formulaire ───────────────────────────────── */}
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-white overflow-y-auto py-10">
        <div className="w-full px-4 md:px-12">

          {/* Logo mobile */}
          <Link to="/" className="flex lg:hidden items-center gap-2 mb-8 justify-center">
            <Shield className="size-7 text-[#C9A227]" />
            <span className="font-extrabold text-[#0a2342] text-lg">
              Smart-<span className="text-[#C9A227]">Economie</span>
            </span>
          </Link>

          {/* Formulaire — sans carte, plein espace */}
          <div>

            {/* En-tête */}
            <div className="mb-7">
              <h1 className="text-2xl font-extrabold text-[#0a2342]">
                {isSignup ? 'Créer un compte' : 'Bon retour !'}
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                {isSignup
                  ? 'Rejoignez la communauté Smart-Économie'
                  : 'Connectez-vous à votre espace membre'}
              </p>
            </div>

            {/* Tabs Connexion / Inscription */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              {[{ label: 'Connexion', val: false }, { label: 'Inscription', val: true }].map(({ label, val }) => (
                <button
                  key={label}
                  onClick={() => switchMode(val)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isSignup === val
                      ? 'bg-[#0a2342] text-white shadow-sm'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Sélecteur de compte — fond coloré → icône blanche */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Type de compte
              </p>
              <div className="grid grid-cols-2 gap-3">
                {(['particulier', 'entreprise'] as UserType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      userType === type
                        ? 'border-[#0a2342] bg-[#0a2342]/5'
                        : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      userType === type ? 'bg-[#0a2342]' : 'bg-gray-200'
                    }`}>
                      <i className={`fa-solid ${type === 'particulier' ? 'fa-user' : 'fa-building'} text-sm text-white`}></i>
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${userType === type ? 'text-[#0a2342]' : 'text-gray-400'}`}>
                        {type === 'particulier' ? 'Particulier' : 'Entreprise'}
                      </p>
                      <p className="text-xs text-gray-400">
                        {type === 'particulier' ? 'Usage personnel' : 'Usage professionnel'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Erreur générale */}
            {errors.general && (
              <div className="mb-5 flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                <i className="fa-solid fa-circle-exclamation shrink-0"></i>
                {errors.general}
              </div>
            )}

            {/* ── Formulaire ─────────────────────────────────────────── */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Particulier — inscription */}
              {isSignup && userType === 'particulier' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Prénom" name="firstName" placeholder="Mohamed"
                      value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                    <Field label="Nom" name="lastName" placeholder="Alaoui"
                      value={formData.lastName} onChange={handleChange} error={errors.lastName} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Téléphone" name="phone" type="tel" placeholder="+212 6 00 00 00"
                      value={formData.phone} onChange={handleChange} icon="fa-phone" />
                    <Field label="Email" name="email" type="email" placeholder="email@exemple.com"
                      value={formData.email} onChange={handleChange} error={errors.email} icon="fa-envelope" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <PasswordField label="Mot de passe" name="password" value={formData.password}
                      onChange={handleChange} error={errors.password} show={showPassword}
                      onToggle={() => setShowPassword(!showPassword)} />
                    <Field label="Confirmer" name="confirmPassword" type="password" placeholder="••••••••"
                      value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} icon="fa-lock" />
                  </div>
                </>
              )}

              {/* Entreprise — inscription */}
              {isSignup && userType === 'entreprise' && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Prénom responsable" name="firstName" placeholder="Mohamed"
                      value={formData.firstName} onChange={handleChange} error={errors.firstName} />
                    <Field label="Nom responsable" name="lastName" placeholder="Alaoui"
                      value={formData.lastName} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Raison sociale" name="companyName" placeholder="Ma Société SARL"
                      value={formData.companyName} onChange={handleChange} error={errors.companyName} icon="fa-building" />
                    <Field label="N° Registre de Commerce" name="registrationNumber" placeholder="RC-123456"
                      value={formData.registrationNumber} onChange={handleChange} error={errors.registrationNumber} icon="fa-hashtag" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <SelectField label="Secteur d'activité" name="sector" value={formData.sector}
                      onChange={handleChange} error={errors.sector} options={sectors} />
                    <Field label="Nb véhicules" name="fleetSize" type="number" placeholder="Ex : 5"
                      value={formData.fleetSize} onChange={handleChange} icon="fa-car" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Adresse" name="address" placeholder="123 Rue Exemple"
                      value={formData.address} onChange={handleChange} icon="fa-location-dot" />
                    <Field label="Ville" name="city" placeholder="Casablanca"
                      value={formData.city} onChange={handleChange} icon="fa-city" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Téléphone" name="phone" type="tel" placeholder="+212 6 00 00 00"
                      value={formData.phone} onChange={handleChange} icon="fa-phone" />
                    <Field label="Email" name="email" type="email" placeholder="email@exemple.com"
                      value={formData.email} onChange={handleChange} error={errors.email} icon="fa-envelope" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <PasswordField label="Mot de passe" name="password" value={formData.password}
                      onChange={handleChange} error={errors.password} show={showPassword}
                      onToggle={() => setShowPassword(!showPassword)} />
                    <Field label="Confirmer" name="confirmPassword" type="password" placeholder="••••••••"
                      value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} icon="fa-lock" />
                  </div>
                </>
              )}

              {/* Connexion */}
              {!isSignup && (
                <>
                  <Field label="Adresse email" name="email" type="email" placeholder="email@exemple.com"
                    value={formData.email} onChange={handleChange} error={errors.email} icon="fa-envelope" />
                  <PasswordField label="Mot de passe" name="password" value={formData.password}
                    onChange={handleChange} error={errors.password} show={showPassword}
                    onToggle={() => setShowPassword(!showPassword)} />
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="checkbox" checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 accent-[#228B22] rounded" />
                      <span className="text-sm text-gray-500">Se souvenir de moi</span>
                    </label>
                    <button type="button" className="text-sm text-[#228B22] font-semibold hover:underline">
                      Mot de passe oublié ?
                    </button>
                  </div>
                </>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#228B22] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#1a6b1a] transition-all shadow-sm mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
              >
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

          </div>

          {/* Badge sécurité */}
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs">
            <i className="fa-solid fa-shield-halved text-[#228B22]"></i>
            <span>Données protégées — Finance éthique & RGPD</span>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Champ input ─────────────────────────────────────────────────── */
function Field({
  label, name, type = 'text', placeholder, value, onChange, error, icon,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; icon?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
            <i className={`fa-solid ${icon} text-sm`}></i>
          </span>
        )}
        <input
          type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
          className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 rounded-xl border text-sm text-gray-700 outline-none transition-all
            focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 bg-white
            ${error ? 'border-red-300' : 'border-gray-200'}`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* ── Select ──────────────────────────────────────────────────────── */
function SelectField({
  label, name, value, onChange, error, options,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string; options: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
          <i className="fa-solid fa-briefcase text-sm"></i>
        </span>
        <select name={name} value={value} onChange={onChange}
          className={`w-full pl-10 pr-8 py-3 rounded-xl border text-sm text-gray-700 outline-none appearance-none transition-all
            focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 bg-white
            ${error ? 'border-red-300' : 'border-gray-200'}`}>
          <option value="">Sélectionnez</option>
          {options.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xs pointer-events-none"></i>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* ── Champ mot de passe ──────────────────────────────────────────── */
function PasswordField({
  label, name, value, onChange, error, show, onToggle,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; show: boolean; onToggle: () => void;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
          <i className="fa-solid fa-lock text-sm"></i>
        </span>
        <input
          type={show ? 'text' : 'password'} name={name} placeholder="••••••••"
          value={value} onChange={onChange}
          className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm text-gray-700 outline-none transition-all
            focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/10 bg-white
            ${error ? 'border-red-300' : 'border-gray-200'}`}
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
