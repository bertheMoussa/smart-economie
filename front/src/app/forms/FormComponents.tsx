import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export function FormInput({ label, placeholder, type = 'text', error, required, ...props }: InputProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-[#228B22]'
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}

export function FormTextArea({
  label,
  placeholder,
  error,
  required,
  rows = 4,
  ...props
}: TextAreaProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-[#228B22]'
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

interface SelectProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
}

export function FormSelect({ label, options, error, required, ...props }: SelectProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-[#228B22]'
        }`}
        {...props}
      >
        <option value="">Sélectionner une option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function FormCheckbox({ label, error, ...props }: CheckboxProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-[#228B22] accent-[#228B22]"
          {...props}
        />
        {label && <label className="text-sm text-gray-700">{label}</label>}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  children: React.ReactNode;
}

export function FormButton({
  variant = 'primary',
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'w-full font-bold py-3 rounded-lg transition disabled:opacity-50';

  const variantClasses = {
    primary: 'bg-[#228B22] text-white hover:bg-[#1a6b1a]',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <i className="fa-solid fa-spinner animate-spin"></i>
          Chargement...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
