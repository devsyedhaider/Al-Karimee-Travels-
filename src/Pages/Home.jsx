import hajjImg from "../assets/home/hajj.avif";
import UmrahImg from "../assets/home/umrah.avif";
import { Link } from "react-router-dom";
import Testimonails from "../Components/Testimonails";

import { ArrowRight, Plane, Globe2, Landmark, MapPinned } from "lucide-react";

import iraqImg from "../assets/home/iraqImg.jpg";
import visaImg from "../assets/home/visaImg.jpg";
import ziyaratImg from "../assets/home/ziyaratImg.jpg";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mt-5 md:mt-5">
        <TravelSection />
        <ServicesSection />
        <Testimonails />
      </div>
    </div>
  );
}

function TravelSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold text-golden text-xs sm:text-sm uppercase tracking-[3px]">
            Trusted Hajj & Umrah Experts
          </p>

          <h2 className="mt-4 font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
            The Leading Hajj & Umrah <br className="hidden md:block" />
            Travel <span className="text-main">Company in Pakistan</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-charcol text-sm sm:text-base leading-7">
            Safe, comfortable and spiritually fulfilling Hajj & Umrah packages
            designed with care for your peace of mind.
          </p>
        </div>

        <div className="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-16">
          {/* Hajj */}
          <div className="group relative shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all hover:-translate-y-2 duration-500">
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
                className="inline-flex justify-center items-center bg-white hover:bg-gray-900 mt-5 px-5 py-3 rounded-lg w-full sm:w-auto font-semibold text-main hover:text-white text-sm transition"
              >
                Explore Packages
              </Link>
            </div>
          </div>

          {/* Umrah */}
          <div className="group relative shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all hover:-translate-y-2 duration-500">
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
                className="inline-flex justify-center items-center bg-white hover:bg-gray-900 mt-5 px-5 py-3 rounded-lg w-full sm:w-auto font-semibold text-main hover:text-white text-sm transition"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 md:mt-16 max-w-3xl text-center">
          <h4 className="font-semibold text-main text-2xl sm:text-3xl">
            Travel Once — Remember Forever
          </h4>

          <p className="mt-4 text-charcol text-sm sm:text-base leading-7">
            We handle every detail of your Hajj and Umrah journey—from flights
            and accommodation to transportation—so you can focus entirely on
            your spiritual experience with complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Customized Umrah Packages",
    description:
      "Luxury Umrah packages with premium accommodation, transport and complete guidance.",
    image: UmrahImg,
    icon: Plane,
    link: "/umrah",
  },
  {
    title: "Customized Iraq Packages",
    description:
      "Visit the holy shrines of Iraq with professionally organized travel services.",
    image: iraqImg,
    icon: Landmark,
    link: "/iraq",
  },
  {
    title: "International Travel & Visa",
    description:
      "International tours, visa processing and worldwide travel planning.",
    image: visaImg,
    icon: Globe2,
    link: "/visa",
  },
  {
    title: "Group Ziyarat Packages",
    description:
      "Group Ziyarat tours with experienced guides and premium facilities.",
    image: ziyaratImg,
    icon: MapPinned,
    link: "/ziyarat",
  },
];

function ServicesSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto px-4 container">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="font-bold text-golden text-xs sm:text-sm uppercase tracking-[3px]">
            Our Services
          </p>

          <h2 className="mt-4 font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            A Range of Travel Services
            <br className="hidden md:block" />
            <span className="text-main">For Your Memorable Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-charcol text-sm sm:text-base leading-7">
            Discover premium travel experiences designed with comfort,
            reliability and complete peace of mind for every journey.
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all hover:-translate-y-2 duration-500"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-75 sm:h-95 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                <div className="top-4 sm:top-6 left-4 sm:left-6 absolute flex justify-center items-center bg-white/20 backdrop-blur-lg rounded-2xl w-11 sm:w-14 h-11 sm:h-14">
                  <Icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>

                <div className="bottom-4 sm:bottom-6 absolute inset-x-4 sm:inset-x-6">
                  <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 border border-white/20 rounded-2xl">
                    <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-gray-200 text-xs sm:text-sm leading-6">
                      {service.description}
                    </p>

                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 hover:gap-3 mt-4 sm:mt-5 font-semibold text-white text-sm sm:text-base transition-all duration-300"
                    >
                      Explore Service
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
