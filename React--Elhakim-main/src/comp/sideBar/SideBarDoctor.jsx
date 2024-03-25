/* eslint-disable no-unused-vars */
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export function DoctorSidebar() {
  const userInfo = useSelector((state) => state.userInfo);
  const doctorId = "1";
  function fetchDr() {}
  return (
    <Card className="overflow-auto rounded-lg w-full border-slate-500/50 border-2 p-4  sticky top-14 pt-5 h-[600px]">
      <div className="p-4 mb-2 text-center">
        <Avatar
          src={`http://localhost:3000/upload/${userInfo.photo}`}
          alt="avatar"
          size="xxl"
          className=""
        />
        <h3 className="pt-2 font-bold text-black">Dr. {userInfo.name}</h3>
      </div>
      <List>
        <ListItem className="mx-auto text-center">
          <ListItemPrefix>
            <PresentationChartBarIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/doctor/dashboard"}>Dashboard</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/doctor/patients-list"}>My Patients</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <CalendarIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/doctor/appointments"}>Appointments</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/doctor/profile-settings"}>Profile Settings</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FontAwesomeIcon icon={faLock} className="ml-1" />
          </ListItemPrefix>
          <Link to={"/doctor/change-password"}>Change Password</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/"}>Logout</Link>
        </ListItem>
      </List>
    </Card>
  );
}
