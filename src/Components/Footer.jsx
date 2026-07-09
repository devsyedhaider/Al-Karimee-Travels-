import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { FooterLinks } from "../Data/data";
import { Link } from "react-router-dom";
import logo from "../assets/footerlogo.png";

import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "../animations";

const Footer = () => {
  return (
    <footer className="bg-main mt-32 text-white">
      <div className="relative container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-3xl -translate-y-1/6 md:-translate-y-1/4"
        >
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

            <form className="flex sm:flex-row flex-col gap-2 sm:gap-0 sm:bg-white sm:border sm:border-gray-200 sm:rounded-full w-full max-w-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white sm:bg-transparent px-5 py-3 md:py-4 border border-gray-200 sm:border-0 rounded-lg sm:rounded-none outline-none text-charcol"
              />

              <button className="bg-main hover:brightness-95 px-6 md:px-8 py-3 md:py-4 rounded-lg sm:rounded-none w-full sm:w-auto font-semibold text-white transition">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="-mt-8 pb-10 container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex lg:flex-row flex-col justify-between gap-16 pb-14 border-white/10 border-b"
        >
          <motion.div variants={fadeLeft} className="max-w-sm">
            <img
              src={logo}
              alt="Al Karimee Travel"
              className="h-26 object-contain"
            />

            <p className="mt-6 text-white/75 leading-8">
              Air Guide Travel Pakistan is your trusted partner for Hajj, Umrah,
              Ziyarat and international travel services with professional
              guidance and years of experience.
            </p>

            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                href="https://www.facebook.com/people/Al-Karimee-Travels-Tours-Pvt-Ltd/61550221046678/"
                target="_blank"
                className="flex justify-center items-center hover:bg-golden border border-white/20 rounded-full w-11 h-11 hover:text-main transition duration-300"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  rotate: -8,
                }}
                href="https://wa.me/03022471111"
                target="_blank"
                className="flex justify-center items-center hover:bg-golden border border-white/20 rounded-full w-11 h-11 hover:text-main transition duration-300"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-8 font-heading font-semibold text-golden text-xl">
              Quick Contact
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: "CEO",
                  phone: "+92 300 8234673",
                },
                {
                  title: "Hajj & Umrah",
                  phone: "+92 300 2163601",
                },
                {
                  title: "Ziyarat",
                  phone: "+92 321 2221961",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="font-semibold">{item.title}</p>

                  <p className="mt-1 text-white/70">Hussnain Raza</p>

                  <a
                    href={`tel:${item.phone}`}
                    className="flex items-center gap-2 mt-2 text-white/80 hover:text-golden transition"
                  >
                    <FaPhoneAlt className="text-sm" />
                    {item.phone}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeRight}>
            <h3 className="mb-8 font-heading font-semibold text-golden text-xl">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/75">
              {FooterLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-golden transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex lg:flex-row flex-col justify-between items-center gap-6 py-6 text-white/60 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Al Karimee Travel Pakistan. All Rights
            Reserved.
          </p>

          <a
            href="https://github.com/devsyedhaider"
            target="_blank"
            className="hover:text-golden transition"
          >
            Designed by DevSyedHaider
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
