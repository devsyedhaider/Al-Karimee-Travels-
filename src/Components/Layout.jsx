import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsappButton";

import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
