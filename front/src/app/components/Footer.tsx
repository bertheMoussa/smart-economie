import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="size-8 text-blue-400" />
              <span className="text-xl font-semibold text-white">
                Smart-Economie
              </span>
            </div>
            <p className="text-sm mb-4">
              Votre spécialiste de l'assurance auto depuis ...... 
              Protection optimale, tarifs compétitifs et service d'excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-blue-400 transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nos formules</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Informations légales</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conditions générales</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gestion des cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>© 2026 Smart-Economie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}