import { Button } from "./ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="size-8 text-blue-600" />
            <span className="text-2xl font-semibold text-gray-900">
              Smart-<span className="text-blue-600">Economie</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </a>
            <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Connexion</Button>
            <Button>Devis gratuit</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#accueil"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a
              href="#apropos"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost">Connexion</Button>
              <Button>Devis gratuit</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}