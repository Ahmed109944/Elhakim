import { Outlet } from "react-router-dom";
import { SideBarPatient } from "../sideBar/SideBarPatient.jsx";
import BreadCrumb from "../BreadCrumb/BreadCrumb.jsx";
export default function LayoutPatient() {
  return (
    <>
      <BreadCrumb />
      <div className="flex justify-between w-full p-7">
        <SideBarPatient />
        <div className="w-full ps-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
