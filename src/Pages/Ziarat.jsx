import PagesHeader from "../Components/PagesHeader";
import ZairatBg from "../assets/HeaderAllPages/zairat.webp";

export default function Ziarat() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={ZairatBg}
          title="Al Karimee Travels Ziarat Packages "
        />
      </div>
      <div className="container"></div>
    </div>
  );
}
