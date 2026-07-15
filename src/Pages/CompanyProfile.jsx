import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import PagesHeader from "../Components/PagesHeader";
import companyProfileBg from "../assets/HeaderAllPages/company.webp";
import { StatsData } from "../Data/data";
import ServiceSection from "../Components/ServicesSection";
import Testimonails from "../Components/Testimonails";
import CEOIMG from "../assets/Ceo/CEOIMG.jpeg";

import img1 from "../assets/certificates/certificate1.webp";
import img2 from "../assets/certificates/certificate2.webp";
import img3 from "../assets/certificates/certificate3.webp";
import Awards from "../Components/Awards";

import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "../animations";

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
      {count}
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
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

      <Awards
        badge="Our Achievements"
        title="Awards &"
        highlight="Certifications"
        description="Our achievements and industry-recognized certifications reflect our commitment to excellence, professionalism, and trusted travel services."
        certificates={[img1, img2, img3]}
        sectionClass="bg-gray-50 py-20"
        imageClass="h-80 w-full object-cover"
      />

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
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
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
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative rounded-[30px] sm:rounded-[40px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[30px] sm:rounded-[40px] rotate-6 scale-105" />

            <img
              src={companyProfileBg}
              alt="Al Karimee Travels"
              className="z-10 relative shadow-2xl rounded-[10px] w-full h-72 sm:h-96 lg:h-112.5 object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-15"
        >
          {StatsData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group bg-white shadow-md hover:shadow-2xl p-6 sm:p-8 border border-gray-100 rounded-2xl sm:rounded-3xl text-center transition-all duration-500"
            >
              <h3 className="font-bold text-main text-4xl sm:text-5xl group-hover:scale-105 transition-transform duration-500">
                <Counter value={item.number} />
              </h3>

              <p className="mt-3 sm:mt-4 text-black text-sm sm:text-base">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CeoSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="bg-primary/5 mt-22 p-8 md:p-14 rounded-[45px] overflow-hidden"
    >
      <div className="items-center gap-10 grid lg:grid-cols-2">
        <motion.div variants={fadeLeft} className="relative">
          <div className="-top-5 -left-5 absolute bg-primary/20 rounded-full w-24 h-24"></div>

          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            src={CEOIMG}
            alt="CEO Al Karimee Travels"
            className="relative shadow-xl mx-auto rounded-[25px] w-full max-w-md h-72 sm:h-96 md:h-112 lg:h-135 object-cover transition duration-500"
          />
        </motion.div>

        <motion.div variants={fadeRight}>
          <h2 className="mt-4 font-bold text-main text-3xl md:text-5xl">
            CEO Message
          </h2>

          <div className="mt-8 text-charcol">
            <p className="mb-5 font-light text-base leading-6.5">
              Welcome to Al Karimee Travels, your trusted partner for Hajj,
              Umrah, Ziyarat, and spiritual travel experiences. Our mission is
              to provide every pilgrim with a peaceful, comfortable, and
              memorable journey.
            </p>

            <p className="mb-5 font-light text-base leading-6.5">
              With dedication, honesty, and professional services, we take care
              of every detail from travel arrangements and accommodation to
              complete pilgrimage support, allowing our guests to focus on their
              sacred experience.
            </p>

            <p className="font-light text-base leading-6.5">
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
        </motion.div>
      </div>
    </motion.div>
  );
}
