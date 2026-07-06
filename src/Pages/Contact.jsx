import PagesHeader from "../Components/PagesHeader";
import ContactBg from "../assets/HeaderAllPages/contact.jpg";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <div className="mb-10 md:mb-20">
        <PagesHeader
          bgImage={ContactBg}
          title="Al Karimee Travels Contact Us "
        />
      </div>
      <div className="container">
        <ContactUs />
        <ContactMap />
      </div>
    </div>
  );
}

function ContactUs() {
  return (
    <section className="pb-20 md:pb-30">
      <div className="mx-auto px-4 container">
        <div className="items-start gap-12 grid lg:grid-cols-2">
          <div>
            <div className="mb-10">
              <h2 className="font-bold text-gray-900 text-4xl md:text-5xl">
                Contact <span className="text-main">Us</span>
              </h2>
              <p className="mt-5 max-w-xl font-light text-charcol text-md md:text-base">
                Feel free to reach out for Hajj, Umrah and travel inquiries. We
                are here 24/7 to assist you with quick response.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="flex items-start gap-6">
                <MapPin className="mt-2 w-6 h-6 text-main" />
                <div>
                  <h3 className="mb-1 font-semibold text-main text-lg uppercase">
                    Office Address
                  </h3>
                  <p className="font-light text-charcol md:text-[15px] text-sm">
                    New Abadi Kot Abdullah, Batapur Lahore
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/923022471111"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-6 hover:opacity-80 transition"
              >
                <MessageCircle className="mt-2 w-6 h-6 text-main" />
                <div>
                  <h3 className="mb-1 font-semibold text-main text-lg uppercase">
                    Call / WhatsApp
                  </h3>
                  <p className="text-charcol">0302-2471111</p>
                </div>
              </a>

              <a
                href="mailto:alkarimee@hotmail.com"
                className="flex items-start gap-6 hover:opacity-80 transition"
              >
                <Mail className="mt-2 w-6 h-6 text-main" />
                <div>
                  <h3 className="mb-1 font-semibold text-main text-lg uppercase">
                    Email Us
                  </h3>
                  <p className="text-charcol">alkarimee@hotmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-xl p-6 md:p-10 border border-gray-100 rounded-3xl">
            <h3 className="mb-6 font-semibold text-gray-900 text-2xl">
              Send Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 border border-gray-200 focus:border-main rounded-xl outline-none w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-gray-200 focus:border-main rounded-xl outline-none w-full"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-200 focus:border-main rounded-xl outline-none w-full"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="px-4 py-3 border border-gray-200 focus:border-main rounded-xl outline-none w-full"
              />

              <button className="bg-main hover:brightness-95 py-3 rounded-xl w-full font-semibold text-white transition cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMap() {
  return (
    <div className="mx-auto mt-16 px-4 container">
      <div className="bg-white shadow-xl border border-gray-100 rounded-3xl overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="font-bold text-gray-900 text-3xl md:text-5xl">
            Our <span className="text-main">Location</span>
          </h3>
          <p className="mt-2 font-light text-[14px] text-charcol d:text-lg">
            Furqan street, Bata Gate No.3, opp. HBL Bank,
          </p>
        </div>

        <iframe
          title="map"
          className="rounded-2xl w-full h-67.5 md:h-112.5"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Furqan%20Street%2C%20Bata%20Gate%20No.3%2C%20Batapur%20Lahore&z=17&output=embed"
        />
      </div>
    </div>
  );
}
