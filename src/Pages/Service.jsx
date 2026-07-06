import ServicesSection from "../Components/ServicesSection";
import Testimonails from "../Components/Testimonails";

import PagesHeader from "../Components/PagesHeader";
import SevicesBg from "../assets/HeaderAllPages/service.jpg";

export default function Service() {
  return (
    <div>
      <div className="mb-10">
        <PagesHeader bgImage={SevicesBg} title="Al Karimee Travels Services " />
      </div>
      <div className="container">
        <ServicesSection />
        <Testimonails />
      </div>
    </div>
  );
}
