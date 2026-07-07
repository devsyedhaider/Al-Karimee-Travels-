import PagesHeader from "../Components/PagesHeader";
import MoraBg from "../assets/HeaderAllPages/mora.jpeg";

export default function Mora() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={MoraBg}
          title="Al Karimee Travels Mora Package "
        />
      </div>

      <div className="container"></div>
    </div>
  );
}
