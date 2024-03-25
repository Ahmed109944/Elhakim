import { Outlet } from "react-router-dom";

import NavbarCrr from "../navbar/NavbarCrr.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {
  return (
    <>
      <NavbarCrr />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
