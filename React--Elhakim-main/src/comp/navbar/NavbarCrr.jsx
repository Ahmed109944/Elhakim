import { NavbarPatient } from "./NavbarPatient.jsx";
import { NavbarDr } from "./Navbar-doctor.jsx";
import { StickyNavbar } from "./NavBar.jsx";
import { useSelector } from "react-redux";

export default function NavbarCrr() {
  const { role } = useSelector((state) => state.userInfo);

  if (role === null) {
    return <StickyNavbar />;
  }

  return role === "user" ? (
    <NavbarPatient />
  ) : role === "doctor" ? (
    <NavbarDr />
  ) : (
    <StickyNavbar />
  );
}
