export default function Home() {
  return (
    <div className="bg-[#f0f4f8] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-white overflow-hidden shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl flex items-stretch">
          <div className="w-1/2 py-10 pr-10 flex flex-col justify-center relative z-10">
            <h2 className="text-5xl font-bold text-[#0a2342] mb-6 leading-tight tracking-tight">
              Une Assurance
              <br />
              Éthique pour Tous
            </h2>
            <div>
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition text-lg tracking-wide">
                Souscription rapide
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            {/* Simple placeholder background mimicking the team image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            >
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-5 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-3 gap-6 divide-x divide-gray-100">
            <div className="flex items-start gap-4 p-4">
              <div className="text-blue-800 text-4xl mt-1 drop-shadow-sm relative">
                <i className="fa-solid fa-handshake-angle text-green-600"></i>
                <i className="fa-solid fa-star text-blue-800 text-sm absolute -top-1 -right-2"></i>
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg leading-tight mb-1">
                  Valeurs éthiques
                  <br />
                  mises en avant
                </h3>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  Transparency, Sharia-compliance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-green-600 text-4xl mt-1 drop-shadow-sm flex items-center relative">
                <i className="fa-solid fa-hand-holding-dollar text-blue-900"></i>
                <div className="absolute -top-3 right-0 flex gap-1">
                  <i className="fa-solid fa-circle-dollar-to-slot text-green-500 text-sm"></i>
                  <i className="fa-solid fa-circle-dollar-to-slot text-green-500 text-sm"></i>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg leading-tight mb-1">
                  Cagnotte
                  <br />
                  communautaire
                </h3>
                <p className="text-xs text-gray-500 font-medium tracking-wide">Cagnotte communautaire</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 pl-10">
              <div className="text-blue-900 text-4xl mt-1 drop-shadow-sm relative">
                <i className="fa-solid fa-credit-card"></i>
                <i className="fa-solid fa-circle-dollar-to-slot text-green-500 text-sm absolute -bottom-2 -right-2 bg-white rounded-full"></i>
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg leading-tight mb-1">
                  Paiement
                  <br />
                  participatif
                </h3>
                <p className="text-xs text-gray-500 font-medium tracking-wide">Paiement participatif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-6 bg-[#f0f4f8] flex-grow">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-900 text-3xl flex-shrink-0 relative">
              <i className="fa-solid fa-hands-holding"></i>
              <i className="fa-solid fa-shield-check text-green-500 text-base absolute top-1.5 right-1.5"></i>
              <div className="absolute -top-1.5 -right-1.5 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                <i className="fa-solid fa-check"></i>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#0a2342] text-lg mb-1">Gestion des sinistres</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Sample toun teus saanter uon sample
                <br />
                processo de gestion des sinistres.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-green-500 hover:shadow-md transition">
            <h3 className="font-bold text-green-600 text-base mb-3">Member Spotlight</h3>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 text-lg border-2 border-green-200">
                <i className="fa-solid fa-users"></i>
              </div>
              <span className="font-bold text-[#0a2342] text-base">Cagnotte communautaire</span>
            </div>

            <div className="mt-1 text-xs font-semibold text-gray-700 flex justify-between mb-1.5">
              <span>Community goal</span>
              <span className="text-gray-500">
                $250 <span className="text-gray-400">/ 850 goal</span>
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="bg-green-500 h-2 rounded-full rounded-r-none" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
