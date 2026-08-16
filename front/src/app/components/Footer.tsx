import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0a2342] text-gray-300">


      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 max-w-6xl">

        {/* ── Grille principale ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">

          {/* Colonne 1 — Marque */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="size-7 text-[#C9A227]" />
              <span className="text-lg font-bold text-white">
                Smart-<span className="text-[#C9A227]">Economie</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Assurance auto solidaire — assurance solidaire, éthique et transparente.
              Aucune cotisation mensuelle.
            </p>

            {/* Icônes sociales — fond vert solide + icône blanche, uniforme */}
            <div className="flex gap-3">
              {[
                { icon: 'fa-brands fa-facebook',  href: '#' },
                { icon: 'fa-brands fa-x-twitter', href: '#' },
                { icon: 'fa-brands fa-linkedin',  href: '#' },
                { icon: 'fa-brands fa-instagram', href: '#' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-[#228B22] flex items-center justify-center hover:bg-[#1a6b1a] transition-colors"
                >
                  <i className={`${s.icon} text-white text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 — Nos formules */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Nos formules</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Tiers Simple',  to: '/subscription' },
                { label: 'Tiers Étendu', to: '/subscription' },
                { label: 'Tous Risques', to: '/subscription' },
                { label: 'Comparer',     to: '/subscription' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[#228B22] text-xs"></i>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Liens rapides */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Liens rapides</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Accueil',     to: '/'          },
                { label: 'À propos',    to: '/about'     },
                { label: 'Sinistres',   to: '/claims'    },
                { label: 'Contact',     to: '/contact'   },
                { label: 'Mon espace',  to: '/login'     },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[#228B22] text-xs"></i>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact rapide */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              {[
                { icon: 'fa-phone',        text: '+22 535 257 390'             },
                { icon: 'fa-envelope',     text: 'contact@smart-economie.com'  },
                { icon: 'fa-location-dot', text: '123 Rue de la Solidarité'    },
              ].map((c) => (
                <li key={c.icon} className="flex items-start gap-3">
                  <i className={`fa-solid ${c.icon} text-white text-sm mt-0.5 shrink-0`}></i>
                  <span className="text-gray-400 leading-relaxed">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Pied de page ─────────────────────────────────────────── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Smart-Economie. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-gray-300 transition-colors">CGU</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
