import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

import PagesHeader from "../Components/PagesHeader";
import companyProfileBg from "../assets/HeaderAllPages/company.jpeg";
import { StatsData } from "../Data/data";
import ServiceSection from "../Components/ServicesSection";
import Testimonails from "../Components/Testimonails";
import CEOIMG from "../assets/Ceo/CEOIMG.jpeg";

import certificate1 from "../assets/certificates/certificate1.jpg";
import certificate2 from "../assets/certificates/certificate2.jpg";
import certificate3 from "../assets/certificates/certificate3.jpg";

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 30));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <>
      {count} {value.includes("+") && "+"} {value.includes("%") && "%"}
    </>
  );
}
export default function CompanyProfile() {
  return (
    <div className="bg-white">
      <div className="mb-20">
        <PagesHeader bgImage={companyProfileBg} title="Company Profile" />
      </div>

      <CompanyProfileSection />
      <CeoSection />
      <AwardsSection />
      <ServiceSection />
      <Testimonails />
    </div>
  );
}

function CompanyProfileSection() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto px-4 container">
        <div className="items-center gap-10 lg:gap-14 grid lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="font-semibold text-golden text-xs sm:text-sm uppercase tracking-[0.2em]">
              About Al Karimee Travels
            </span>

            <h2 className="mt-4 font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Creating Meaningful
              <span className="text-main"> Spiritual Journeys</span>
            </h2>

            <p className="mt-5 sm:mt-7 font-light text-charcol text-base sm:text-lg leading-7 sm:leading-8">
              Al Karimee Travels is dedicated to providing reliable Hajj, Umrah,
              and Ziyarat services with comfort, guidance, and complete travel
              support.
            </p>

            <p className="mt-4 sm:mt-5 font-light text-charcol text-base leading-7 sm:leading-8">
              We believe every pilgrim deserves a peaceful and memorable
              spiritual journey. Our experienced team manages every detail with
              honesty and professionalism.
            </p>
          </div>

          <div className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 rounded-[30px] sm:rounded-[40px] rotate-6 scale-105"></div>

            <img
              src={companyProfileBg}
              alt="Al Karimee Travels"
              className="z-10 relative shadow-2xl rounded-[10px] w-full h-72 sm:h-96 lg:h-112.5 object-cover"
            />
          </div>
        </div>

        <div className="gap-4 sm:gap-6 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-15">
          {StatsData.map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-md hover:shadow-2xl p-6 sm:p-8 border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden text-center transition-all hover:-translate-y-3 duration-500"
            >
              <h3 className="font-bold text-main text-4xl sm:text-5xl group-hover:scale-105 transition-transform duration-500">
                <Counter value={item.number} />
              </h3>

              <p className="mt-3 sm:mt-4 text-black text-sm sm:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CeoSection() {
  return (
    <div className="bg-primary/5 mt-22 p-8 md:p-14 rounded-[45px] overflow-hidden">
      <div className="items-center gap-10 grid lg:grid-cols-2">
        <div className="relative">
          <div className="-top-5 -left-5 absolute bg-primary/20 rounded-full w-24 h-24"></div>

          <img
            src={CEOIMG}
            alt="CEO Al Karimee Travels"
            className="relative shadow-xl mx-auto rounded-[25px] w-full max-w-md h-72 sm:h-96 md:h-112 lg:h-135 object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h2 className="mt-4 font-bold text-main text-3xl md:text-5xl">
            CEO Message
          </h2>

          <div className="relative mt-8">
            <p className="relative mb-5 font-light text-charcol text-base leading-6.5">
              Welcome to Al Karimee Travels, your trusted partner for Hajj,
              Umrah, Ziyarat, and spiritual travel experiences. Our mission is
              to provide every pilgrim with a peaceful, comfortable, and
              memorable journey.
            </p>

            <p className="mb-5 font-light text-charcol text-base leading-6.5">
              With dedication, honesty, and professional services, we take care
              of every detail from travel arrangements and accommodation to
              complete pilgrimage support, allowing our guests to focus on their
              sacred experience.
            </p>

            <p className="font-light text-charcol text-base leading-6.5">
              At Al Karimee Travels, we believe every journey is more than
              travel; it is a blessed experience that creates lifelong memories.
            </p>
          </div>

          <div className="mt-8 pl-5 border-primary border-l-4">
            <h3 className="font-bold text-main text-xl">Hussnain Raza</h3>

            <p className="mt-1 font-semibold text-black">
              CEO, Al Karimee Travels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const certificates = [certificate1, certificate2, certificate3];

function AwardsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-black text-4xl md:text-6xl">
            Awards & <span className="text-main">Certifications</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-light text-charcol text-lg">
            Our achievements and industry-recognized certifications reflect our
            commitment to excellence, professionalism, and trusted travel
            services.
          </p>
        </div>

        <div className="gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-500"
            >
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>

              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="right-4 bottom-4 absolute flex justify-center items-center bg-orange-500 hover:bg-orange-600 shadow-lg rounded-full w-12 h-12 text-white hover:scale-110 transition-all duration-300"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
