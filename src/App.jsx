import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import CompanyProfile from "./Pages/CompanyProfile";
import Contact from "./Pages/Contact";
import Hajj from "./Pages/Hajj";
import Umrah from "./Pages/Umrah";
import Service from "./Pages/Service";
import Mora from "./Pages/Mora";
import Ziarat from "./Pages/Ziarat";
import Gallery from "./Pages/Gallery";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/companyprofile" element={<CompanyProfile />} />
          <Route path="/hajj" element={<Hajj />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/Ziarat" element={<Ziarat />} />
          <Route path="/service" element={<Service />} />
          <Route path="/mora" element={<Mora />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
