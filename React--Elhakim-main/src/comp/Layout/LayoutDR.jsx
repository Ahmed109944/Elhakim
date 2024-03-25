import { Outlet } from "react-router-dom";
import { DoctorSidebar } from "../sideBar/SideBarDoctor";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
export default function LayoutDR() {
  return (
    <>
      <BreadCrumb />
      <div className="flex flex-wrap justify-around w-full p-3 md:flex-nowrap">
        <div className="mt-5 w-full xl:w-[300px]">
          <DoctorSidebar />
        </div>

        <div className="ml-2 mt-5 w-full xl:w-[1200px]">
          
          <Outlet />
        </div>
      </div>
    </>
  );
}
