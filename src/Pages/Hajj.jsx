import PagesHeader from "../Components/PagesHeader";
import HajjBg from "../assets/header/img2.jpg";

export default function Hajj() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader
          bgImage={HajjBg}
          title="Al Karimee Travels Hajj Packages"
        />
      </div>
      <div className="container"></div>
    </div>
  );
}
