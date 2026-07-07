import { useState } from "react";
import PagesHeader from "../Components/PagesHeader";
import GalleryBg from "../assets/HeaderAllPages/gallery.jpeg";
import Testimonails from "../Components/Testimonails";

import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";
import img7 from "../assets/gallery/7.jpeg";
import img8 from "../assets/gallery/8.jpeg";
import img9 from "../assets/gallery/9.jpeg";
import img10 from "../assets/gallery/10.jpeg";
import img11 from "../assets/gallery/11.jpeg";
// import img12 from "../assets/gallery/12.jpeg";
import img13 from "../assets/gallery/13.jpeg";
import img14 from "../assets/gallery/14.jpeg";
import img15 from "../assets/gallery/15.jpeg";
import img16 from "../assets/gallery/16.jpeg";
import img17 from "../assets/gallery/17.jpeg";
import img18 from "../assets/gallery/18.jpeg";
import img19 from "../assets/gallery/19.jpeg";

export default function Gallery() {
  return (
    <div className="bg-white">
      <div className="mb-20">
        <PagesHeader bgImage={GalleryBg} title="Hajj & Umrah Gallery" />
      </div>

      <GalleryGrid />
      <Testimonails />
    </div>
  );
}

function GalleryGrid() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="pb-20 overflow-hidden">
      <div className="mx-auto px-4 container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-semibold text-golden text-sm uppercase tracking-[0.25em]">
            Our Memories
          </span>

          <h2 className="mt-4 font-bold text-black text-3xl md:text-6xl">
            Beautiful Moments From
            <span className="text-main"> Sacred Journeys</span>
          </h2>

          <p className="mt-5 font-light text-charcol leading-7">
            Explore the unforgettable memories of our pilgrims during Hajj,
            Umrah, and Ziyarat journeys.
          </p>
        </div>

        {/* Masonry Gallery */}

        <div className="gap-6 space-y-6 columns-1 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative shadow-lg rounded-[30px] overflow-hidden break-inside-avoid cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="bg-white/90 px-6 py-3 rounded-full font-semibold text-main">
                  View Image
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview */}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 p-5"
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="shadow-2xl rounded-3xl max-w-5xl max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}
