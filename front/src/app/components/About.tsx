import { Card, CardContent } from "./ui/card";
import { Shield, Users, Award, TrendingDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyOTI1MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipe Smart-Economie"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Qui sommes-nous ?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">Smart-Economie</span> est un acteur majeur 
                de l'assurance automobile. Notre mission est simple : 
                offrir à nos clients une protection optimale pour leur véhicule à des tarifs justes et transparents.
              </p>
              <p>
                Nous combinons l'expertise d'une compagnie d'assurance traditionnelle avec l'innovation 
                technologique pour vous proposer des solutions modernes, simples et accessibles en ligne.
              </p>
              <p>
                Notre engagement : vous accompagner à chaque étape, du devis à la gestion des sinistres, 
                avec une équipe de conseillers dédiés disponibles 7j/7.
              </p>
            </div>
          </div>
        </div>

        {/* Chiffres clés */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Smart-Economie en chiffres
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">120K+</div>
              <div className="text-gray-600">Clients fidèles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Assistance disponible</div>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nos valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="size-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Confiance</h4>
                <p className="text-gray-600 text-sm">
                  Une relation transparente basée sur l'honnêteté et l'intégrité.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="size-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="size-8 text-[#228B22]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Économie</h4>
                <p className="text-gray-600 text-sm">
                  Les meilleurs tarifs sans compromis sur la qualité de service.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="size-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="size-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Proximité</h4>
                <p className="text-gray-600 text-sm">
                  Une équipe à votre écoute, disponible et réactive à tout moment.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="size-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="size-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Un service de qualité supérieure pour votre satisfaction totale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
