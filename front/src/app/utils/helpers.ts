/**
 * Utility functions for Smart-Économie Frontend
 */

/**
 * Format a price with currency
 */
export function formatPrice(amount: number, currency: string = '€'): string {
  return `${amount}${currency}`;
}

/**
 * Format a date in French
 */
export function formatDateFR(date: Date | string): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Format a phone number
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }
  return phone;
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10;
}

/**
 * Get status badge color and label
 */
export function getClaimStatusInfo(status: string): {
  color: string;
  label: string;
  icon: string;
} {
  const statusMap: Record<
    string,
    { color: string; label: string; icon: string }
  > = {
    pending: {
      color: 'yellow',
      label: 'En attente',
      icon: 'fa-clock',
    },
    processing: {
      color: 'blue',
      label: 'En cours de traitement',
      icon: 'fa-spinner',
    },
    approved: {
      color: 'green',
      label: 'Approuvé',
      icon: 'fa-check',
    },
    rejected: {
      color: 'red',
      label: 'Rejeté',
      icon: 'fa-times',
    },
    paid: {
      color: 'green',
      label: 'Payé',
      icon: 'fa-money-bill',
    },
  };

  return statusMap[status] || { color: 'gray', label: status, icon: 'fa-info' };
}

/**
 * Get plan color class
 */
export function getPlanColorClass(
  color: string
): { bg: string; text: string; border: string } {
  const colorMap: Record<string, { bg: string; text: string; border: string }> =
    {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-500',
        border: 'border-blue-500',
      },
      green: {
        bg: 'from-green-500 to-green-600',
        text: 'text-green-500',
        border: 'border-green-500',
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-500',
        border: 'border-purple-500',
      },
      red: {
        bg: 'from-red-500 to-red-600',
        text: 'text-red-500',
        border: 'border-red-500',
      },
    };

  return (
    colorMap[color] || {
      bg: 'from-gray-500 to-gray-600',
      text: 'text-gray-500',
      border: 'border-gray-500',
    }
  );
}

/**
 * Truncate text to a maximum length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Get query parameter from URL
 */
export function getQueryParam(param: string): string | null {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}

/**
 * Storage helpers
 */
export const storage = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string) => localStorage.setItem(key, value),
  remove: (key: string) => localStorage.removeItem(key),
  getJSON: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  setJSON: (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

/**
 * API request helper
 */
export async function apiCall<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}
