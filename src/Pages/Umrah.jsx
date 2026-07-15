import PagesHeader from "../Components/PagesHeader";
import UmrahBg from "../assets/HeaderAllPages/umrah.webp";

export default function Umrah() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={UmrahBg}
          title="Al Karimee Travels Umrah Packages"
        />
      </div>
      <div className="container"></div>
    </div>
  );
}
