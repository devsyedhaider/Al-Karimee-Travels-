import PagesHeader from "../Components/PagesHeader";
import Testimonials from "../Components/Testimonails";
import MoraBg from "../assets/HeaderAllPages/mora.jpeg";

import img1 from "../assets/certificates/certificate1.jpg";
import img2 from "../assets/certificates/certificate2.jpg";
import img3 from "../assets/certificates/certificate3.jpg";
import Awards from "../Components/Awards";

export default function Mora() {
  return (
    <div>
      <div className="">
        <PagesHeader
          bgImage={MoraBg}
          title="Al Karimee Travels Mora Package "
        />
      </div>

      <div>
        <Awards
          badge="Our Achievements"
          title="Documents of Ministry"
          highlight=" of Religious Affairs"
          description="Our achievements and industry-recognized certifications reflect our commitment to excellence, professionalism, and trusted travel services."
          certificates={[img1, img2, img3]}
          sectionClass="bg-gray-50 py-20"
          imageClass="h-80 w-full object-cover"
        />
        <Testimonials />
      </div>
    </div>
  );
}
