import PagesHeader from "../Components/PagesHeader";
import ZairatBg from "../assets/HeaderAllPages/zairat.webp";
import Testimonials from "../Components/Testimonails";

import { ArrowRight } from "lucide-react";
import { ZairatGroups } from "../Data/data";

export default function Ziarat() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={ZairatBg}
          title="Al Karimee Travels Ziarat Packages "
        />
      </div>
      <div>
        <ZairatGroupsSection />
        <Testimonials />
      </div>
    </div>
  );
}

function ZairatGroupsSection() {
  return (
    <section className="pb-15">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-bold text-black text-4xl sm:text-5xl md:text-6xl">
            Ziarat <span className="text-main">Groups</span>
          </h2>

          <p className="mt-5 font-light text-charcol">
            Explore our latest Zairat group packages and view complete brochure
            images.
          </p>
        </div>

        <div
          className={`gap-8 grid grid-cols-1 ${
            ZairatGroups.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
          }`}
        >
          {ZairatGroups.map((item, index) => (
            <div key={index} className="group">
              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white shadow-md border border-gray-200 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-125 object-cover group-hover:scale-105 transition duration-500"
                />
              </a>

              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-main hover:bg-primary mt-6 px-6 py-3 rounded-xl w-full font-semibold text-white transition duration-300"
              >
                More Details
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
