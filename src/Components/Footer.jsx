import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-main mt-32 text-white">
      <div className="relative container">
        <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-3xl -translate-y-1/2">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-8 p-8 lg:px-12 lg:py-10">
            <div>
              <span className="font-semibold text-golden uppercase tracking-[3px]">
                Newsletter
              </span>

              <h2 className="mt-2 font-heading font-bold text-main text-3xl">
                Stay Updated
              </h2>

              <p className="mt-3 max-w-lg text-charcol">
                Subscribe to receive exclusive Hajj, Umrah and travel offers
                directly in your inbox.
              </p>
            </div>

            <form className="flex bg-white border border-gray-200 rounded-full w-full max-w-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 outline-none text-charcol"
              />

              <button className="flex items-center gap-2 bg-golden hover:brightness-95 px-8 font-semibold text-main transition">
                Subscribe
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="-mt-8 pb-10 container">
        <div className="flex lg:flex-row flex-col justify-between gap-16 pb-14 border-white/10 border-b">
          <div className="max-w-sm">
            <img
              src={logo}
              alt="Air Guide Travel"
              className="h-16 object-contain"
            />

            <p className="mt-6 text-white/75 leading-8">
              Air Guide Travel Pakistan is your trusted partner for Hajj, Umrah,
              Ziyarat and international travel services with professional
              guidance and years of experience.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="flex justify-center items-center hover:bg-golden border border-white/20 rounded-full w-11 h-11 hover:text-main transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex justify-center items-center hover:bg-golden border border-white/20 rounded-full w-11 h-11 hover:text-main transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex justify-center items-center hover:bg-golden border border-white/20 rounded-full w-11 h-11 hover:text-main transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-8 font-heading font-semibold text-golden text-xl">
              Quick Contact
            </h3>

            <div className="space-y-8">
              <div>
                <p className="font-semibold">CEO</p>

                <p className="mt-1 text-white/70">Raza A. Mamdani</p>

                <a
                  href="tel:+923008234673"
                  className="flex items-center gap-2 mt-2 text-white/80 hover:text-golden transition"
                >
                  <FaPhoneAlt className="text-sm" />
                  +92 300 8234673
                </a>
              </div>

              <div>
                <p className="font-semibold">Hajj & Umrah</p>

                <p className="mt-1 text-white/70">Raza Mamdani</p>

                <a
                  href="tel:+923002163601"
                  className="flex items-center gap-2 mt-2 text-white/80 hover:text-golden transition"
                >
                  <FaPhoneAlt className="text-sm" />
                  +92 300 2163601
                </a>
              </div>

              <div>
                <p className="font-semibold">Ziyarat</p>

                <p className="mt-1 text-white/70">Mohsin Nayani</p>

                <a
                  href="tel:+923212221961"
                  className="flex items-center gap-2 mt-2 text-white/80 hover:text-golden transition"
                >
                  <FaPhoneAlt className="text-sm" />
                  +92 321 2221961
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-8 font-heading font-semibold text-golden text-xl">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/75">
              {[
                "Home",
                "About Us",
                "Hajj Packages",
                "Umrah Packages",
                "Ziyarat",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:pl-2 hover:text-golden transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center gap-6 py-6 text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Air Guide Travel Pakistan. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/devsyedhaider"
              target="_blank"
              className="hover:text-golden transition"
            >
              Designed by DevSyedHaider
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
