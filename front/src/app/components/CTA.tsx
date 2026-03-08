import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Phone, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à assurer votre véhicule ?
            </h2>
            <p className="text-lg text-blue-100">
              Contactez-nous dès aujourd'hui pour obtenir votre devis personnalisé gratuit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="size-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="size-8" />
              </div>
              <h3 className="font-semibold mb-2">Par téléphone</h3>
              <p className="text-blue-100 text-sm mb-2">01 23 45 67 89</p>
              <p className="text-blue-200 text-xs">Lun-Ven: 9h-19h, Sam: 9h-17h</p>
            </div>

            <div className="text-center">
              <div className="size-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="size-8" />
              </div>
              <h3 className="font-semibold mb-2">Par email</h3>
              <p className="text-blue-100 text-sm">contact@smart-economie.fr</p>
              <p className="text-blue-200 text-xs">Réponse sous 24h</p>
            </div>

            <div className="text-center">
              <div className="size-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="size-8" />
              </div>
              <h3 className="font-semibold mb-2">Notre agence</h3>
              <p className="text-blue-100 text-sm">123 Avenue des Champs-Élysées</p>
              <p className="text-blue-100 text-sm">75008 Paris</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Demande de devis
            </h3>
            
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Nom et prénom"
                className="w-full"
              />
              
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
              />
              
              <Input
                type="tel"
                placeholder="Téléphone"
                className="w-full"
              />
              
              <Button type="submit" className="w-full" size="lg">
                Recevoir mon devis gratuit
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Sans engagement - Réponse sous 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}