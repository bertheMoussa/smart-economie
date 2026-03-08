import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Votre assurance auto intelligente
            </h1>
            
            <p className="text-lg text-gray-600">
              Chez Smart-Economie, nous protégeons votre véhicule avec des solutions d'assurance 
              sur mesure, des tarifs compétitifs et un service client d'excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Obtenir un devis gratuit
                <ArrowRight className="size-5" />
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759509326921-4ac86913cc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnN1cmFuY2UlMjBhdXRvfGVufDF8fHx8MTc3Mjk4OTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Voiture assurée avec Smart-Economie"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}