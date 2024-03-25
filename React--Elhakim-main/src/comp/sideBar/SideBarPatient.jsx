import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  MapPinIcon,
  CalendarIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function SideBarPatient() {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <Card className="border-slate-500/50 rounded-md border-2 max-w-[20rem] p-4 h-[500px]  sticky top-14 ">
      <div className="p-4 mb-2 text-center">
        <Avatar
          src={`http://localhost:3000/upload/${userInfo.photo}`}
          alt="avatar"
          size="xxl"
          className=""
        />
        <h3 className="pt-2 font-bold text-black">{userInfo.name}</h3>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/patient/dashboard"}>Dashboard</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <MagnifyingGlassCircleIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/search-doctor"}>Serarch Doctor</Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/patient/profile-settings"}> Profile Settings</Link>
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="w-5 h-5" />
          </ListItemPrefix>
          <Link to={"/patient/change-password"}> Change Password</Link>
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
