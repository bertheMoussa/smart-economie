import { useState } from 'react';

const faqs = [
  {
    q: 'Quel est le délai de réponse ?',
    a: 'Nous traitons toutes les demandes sous 24 à 48 heures ouvrées. Pour les urgences, appelez directement notre ligne dédiée.',
  },
  {
    q: 'Comment modifier mon adhésion ?',
    a: 'Connectez-vous à votre espace membre et accédez à la section "Profil & paramètres" pour modifier vos informations ou changer de formule.',
  },
  {
    q: 'Comment déclarer un sinistre ?',
    a: 'Rendez-vous dans la section "Sinistres" de votre espace membre, ou appelez notre assistance 24/7 pour une prise en charge immédiate.',
  },
  {
    q: 'Ce service est-il disponible le week-end ?',
    a: 'Notre ligne téléphonique est ouverte du lundi au samedi de 9h à 19h. Par email, nous répondons 7j/7 dans un délai de 24h.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0a2342] py-14">
        <div className="container mx-auto px-8 max-w-6xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#228B22] bg-[#228B22]/15 px-4 py-1.5 rounded-full mb-5">
            Support
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight">
            Nous sommes là pour vous
          </h1>
          <p className="text-white/65 text-base max-w-xl leading-relaxed">
            Une question sur votre adhésion, un sinistre à déclarer ou simplement besoin d'un conseil ?
            Notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      {/* ── 3 cartes de contact ──────────────────────────────────────── */}
      <section className="bg-[#f8fafc] py-10 border-b border-gray-100">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-phone',        title: 'Téléphone', main: '+22 535 257 390',            sub: 'Lun – Sam : 9h à 19h' },
              { icon: 'fa-envelope',     title: 'Email',     main: 'contact@smart-economie.com', sub: 'Réponse sous 24h'     },
              { icon: 'fa-location-dot', title: 'Bureau',    main: 'Smart-Économie HQ',          sub: '123 Rue de la Solidarité, Ville' },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a2342] flex items-center justify-center shrink-0">
                  <i className={`fa-solid ${c.icon} text-white text-sm`}></i>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{c.title}</p>
                  <p className="font-bold text-[#0a2342] text-sm mb-0.5">{c.main}</p>
                  <p className="text-xs text-gray-400">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulaire + FAQ ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Formulaire */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">Message</span>
              <h2 className="text-2xl font-extrabold text-[#0a2342] mt-1 mb-6">Envoyez-nous un message</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Prénom</label>
                    <input
                      type="text"
                      placeholder="Karim"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#228B22]/40 focus:border-[#228B22] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nom</label>
                    <input
                      type="text"
                      placeholder="Benali"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#228B22]/40 focus:border-[#228B22] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="karim@exemple.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#228B22]/40 focus:border-[#228B22] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#228B22]/40 focus:border-[#228B22] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Sujet</label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#228B22]/40 focus:border-[#228B22] transition bg-white">
                    <option value="">Choisissez un sujet</option>
                    <option>Question générale</option>
                    <option>Adhésion & formules</option>
                    <option>Déclaration de sinistre</option>
                    <option>Support technique</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message</label>
                  <textarea
                    placeholder="Décrivez votre demande..."
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#228B22]/40 focus:border-[#228B22] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#228B22] text-white font-bold py-3 rounded-xl hover:bg-[#1a6b1a] transition flex items-center justify-center gap-2 text-sm"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#228B22]">FAQ</span>
              <h2 className="text-2xl font-extrabold text-[#0a2342] mt-1 mb-6">Questions fréquentes</h2>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-semibold text-[#0a2342] text-sm">{faq.q}</span>
                      <i className={`fa-solid fa-chevron-down text-gray-400 text-xs transition-transform duration-200 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bloc horaires */}
              <div className="mt-8 bg-[#f8fafc] rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#228B22]/10 flex items-center justify-center">
                    <i className="fa-solid fa-clock text-[#228B22] text-sm"></i>
                  </div>
                  <h3 className="font-bold text-[#0a2342] text-sm">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    { j: 'Lundi – Vendredi', h: '9h00 – 19h00' },
                    { j: 'Samedi',            h: '9h00 – 13h00' },
                    { j: 'Dimanche',          h: 'Fermé' },
                  ].map((row) => (
                    <div key={row.j} className="flex justify-between">
                      <span className="text-gray-500">{row.j}</span>
                      <span className={`font-semibold ${row.h === 'Fermé' ? 'text-red-500' : 'text-[#0a2342]'}`}>{row.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
