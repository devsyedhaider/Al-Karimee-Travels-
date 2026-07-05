import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Hajj from "./Pages/Hajj";
import Umrah from "./Pages/Umrah";
import Ziarat from "./Pages/Ziarat";
import CompanyProfile from "./Pages/CompanyProfile";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/hajj" element={<Hajj />} />
        <Route path="/umrah" element={<Umrah />} />
        <Route path="/ziarat" element={<Ziarat />} />
      </Routes>
    </>
  );
}
