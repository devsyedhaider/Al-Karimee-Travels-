import PagesHeader from "../Components/PagesHeader";
import Testimonials from "../Components/Testimonails";
import HajjBg from "../assets/header/img2.webp";
import { Hajjpackages } from "../Data/data";
import { Download } from "lucide-react";

export default function Hajj() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={HajjBg}
          title="Al Karimee Travels Hajj Packages"
        />
      </div>
      <div>
        <HajjPackages />
        <Testimonials />
      </div>
    </div>
  );
}

function HajjPackages() {
  return (
    <section className="bg-white pb-15">
      <div className="mx-auto px-5 max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-bold text-black text-5xl md:text-6xl">
            HAJJ <span className="text-main">PACKAGES</span>
          </h2>

          <p className="mt-5 font-light text-charcol leading-7">
            Choose the package that best suits your needs. Download the brochure
            to view complete details, pricing, accommodation, transportation,
            and services included in each package.
          </p>
        </div>

        <div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2">
          {Hajjpackages.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-xl border border-gray-200 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-300"
            >
              <div className="bg-primary px-4 py-4 md:py-5 text-center">
                <h3 className="font-semibold text-main text-xl sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
              </div>

              <div className="bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 sm:h-105 md:h-125 lg:h-150 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <a
                  href={item.pdf}
                  target="_blank"
                  className="flex justify-center items-center gap-2 bg-main hover:bg-primary px-4 py-3 rounded-xl w-full font-semibold text-white transition-colors"
                >
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
