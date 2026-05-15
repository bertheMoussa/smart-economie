export default function Footer() {
  return (
    <footer className="bg-[#0a2342] text-white pt-6 pb-4 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-blue-900/50 pb-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5 tracking-wide">Contact info</h4>
            <p className="text-sm text-gray-300 font-medium flex items-center gap-3 mb-3">
              <i className="fa-solid fa-phone text-blue-400 w-4"></i> +22 535 257 390
            </p>
            <p className="text-sm text-gray-300 font-medium flex items-center gap-3">
              <i className="fa-solid fa-envelope text-blue-400 w-4"></i> dizinn@ecumnnle.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 tracking-wide">Quick Links</h4>
            <ul className="text-sm text-gray-300 font-medium space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Legal Notices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Brand / Ethics */}
          <div className="flex flex-col items-end justify-center text-right">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 tracking-tight leading-tight">
              ASSURANCE
              <br />
              ISLAMIQUE
              <i className="fa-solid fa-star text-yellow-400 text-3xl"></i>
            </h2>

            <div className="border border-blue-800/60 rounded-lg p-3 pt-2 pb-2 inline-block max-w-sm mt-2">
              <p className="text-[10px] text-gray-300 leading-tight">
                Nous nous engageons à un traitement éthique pour tous nos clients.
              </p>
              <p className="text-[10px] text-gray-400 leading-tight">
                We are committed to ethical treatment for all of our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 font-medium">
          <p className="text-xs text-gray-400">
            Copyright © 2022-2023 Sept Global. Ltd. Occlansess t Beaslaminus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
