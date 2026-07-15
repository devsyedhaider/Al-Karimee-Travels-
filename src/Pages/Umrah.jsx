import PagesHeader from "../Components/PagesHeader";
import UmrahBg from "../assets/HeaderAllPages/umrah.webp";
import Testimonials from "../Components/Testimonails";

import { ArrowRight } from "lucide-react";
import { UmrahGroups } from "../Data/data";

export default function Umrah() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={UmrahBg}
          title="Al Karimee Travels Umrah Packages"
        />
      </div>
      <div>
        <UmrahGroupsSection />
        <Testimonials />
      </div>
    </div>
  );
}

function UmrahGroupsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-bold text-black text-5xl md:text-6xl">
            Umrah <span className="text-main">Groups</span>
          </h2>

          <p className="mt-5 font-light text-charcol">
            Explore our latest Umrah group packages and view complete brochure
            images.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {UmrahGroups.map((item, index) => (
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
                className="flex justify-center items-center gap-2 bg-main hover:bg-primary mx-auto mt-6 px-6 py-3 rounded-xl w-full font-semibold text-white transition duration-300"
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
