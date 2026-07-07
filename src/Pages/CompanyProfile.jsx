import PagesHeader from "../Components/PagesHeader";
import companyProfileBg from "../assets/HeaderAllPages/company.jpeg";

export default function CompanyProfile() {
  return (
    <div>
      <div className="mb-20">
        <PagesHeader bgImage={companyProfileBg} title="Company Profile" />
      </div>
      <div className="container"></div>
    </div>
  );
}
