import hajjImg from "../assets/home/hajj.webp";
import UmrahImg from "../assets/home/umrah.webp";
import { Link } from "react-router-dom";
import Testimonails from "../Components/Testimonails";
import ServicesSection from "../Components/ServicesSection";
import Header from "../Components/Header";
import GallerySection from "../Components/GallerySection";

import Animate from "../animations/ Animate";
import { fadeUp, fadeLeft, fadeRight } from "../animations";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="mt-5 md:mt-5">
        <TravelSection />
        <ServicesSection />
        <GallerySection />
        <Testimonails />
      </div>
    </div>
  );
}

function TravelSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 container">
        <Animate variants={fadeUp} className="mx-auto max-w-4xl text-center">
          <p className="font-bold text-golden text-xs sm:text-sm uppercase tracking-[3px]">
            Trusted Hajj & Umrah Experts
          </p>

          <h2 className="mt-4 font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
            The Leading Hajj & Umrah
            <br className="hidden md:block" />
            Travel <span className="text-main">Company in Pakistan</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-charcol text-sm sm:text-base leading-7">
            Safe, comfortable and spiritually fulfilling Hajj & Umrah packages
            designed with care for your peace of mind.
          </p>
        </Animate>

        <div className="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-16">
          <Animate
            variants={fadeLeft}
            className="group relative shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all hover:-translate-y-2 duration-500"
            whileHover={{ y: -10 }}
          >
            <img
              src={hajjImg}
              alt="Hajj"
              className="w-full h-70 sm:h-80 md:h-90 lg:h-100 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent" />

            <div className="bottom-5 sm:bottom-7 absolute inset-x-5 sm:inset-x-7 text-white">
              <span className="inline-flex bg-main px-3 py-1.5 rounded-full font-medium text-xs">
                Spiritual Journey
              </span>

              <h3 className="mt-3 font-bold text-2xl sm:text-3xl tracking-wide">
                HAJJ PACKAGES
              </h3>

              <p className="mt-2 max-w-md text-gray-200 text-sm leading-6">
                Premium guided Hajj experience with full support and comfort for
                a peaceful spiritual journey.
              </p>

              <Link
                to="/hajj"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex justify-center items-center bg-white hover:bg-gray-900 mt-5 px-5 py-3 rounded-lg w-full sm:w-auto font-semibold text-main hover:text-white text-sm transition"
              >
                Explore Packages
              </Link>
            </div>
          </Animate>

          <Animate
            variants={fadeRight}
            className="group relative shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all hover:-translate-y-2 duration-500"
            whileHover={{ y: -10 }}
          >
            <img
              src={UmrahImg}
              alt="Umrah"
              className="w-full h-70 sm:h-80 md:h-90 lg:h-100 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent" />

            <div className="bottom-5 sm:bottom-7 absolute inset-x-5 sm:inset-x-7 text-white">
              <span className="inline-flex bg-main px-3 py-1.5 rounded-full font-medium text-xs">
                Affordable Comfort
              </span>

              <h3 className="mt-3 font-bold text-2xl sm:text-3xl tracking-wide">
                UMRAH PACKAGES
              </h3>

              <p className="mt-2 max-w-md text-gray-200 text-sm leading-6">
                Comfortable, affordable Umrah packages with premium services and
                complete travel assistance.
              </p>

              <Link
                to="/umrah"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex justify-center items-center bg-white hover:bg-gray-900 mt-5 px-5 py-3 rounded-lg w-full sm:w-auto font-semibold text-main hover:text-white text-sm transition"
              >
                Explore Packages
              </Link>
            </div>
          </Animate>
        </div>

        <Animate
          variants={fadeUp}
          delay={0.2}
          className="mx-auto mt-12 md:mt-16 max-w-3xl text-center"
        >
          <h4 className="font-semibold text-main text-2xl sm:text-3xl">
            Travel Once — Remember Forever
          </h4>

          <p className="mt-4 text-charcol text-sm sm:text-base leading-7">
            We handle every detail of your Hajj and Umrah journey—from flights
            and accommodation to transportation—so you can focus entirely on
            your spiritual experience with complete peace of mind.
          </p>
        </Animate>
      </div>
    </section>
  );
}
