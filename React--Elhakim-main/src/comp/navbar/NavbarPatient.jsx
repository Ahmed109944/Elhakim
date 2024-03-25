import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import ProfileMenu from "./ProfileMenue.jsx";

import { Link } from "react-router-dom";

function NavList() {
  return (
    <List className="p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium "
      >
        {" "}
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to={"/services"} className="flex items-center">
            Services
          </Link>
        </ListItem>
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/patient/dashboard">Dashboard</Link>
        </ListItem>
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to={"/get-appintemnt"}>Get Appintemnt</Link>
        </ListItem>
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Link to="/search-doctor">Search Doctor</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarPatient() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full max-w-full py-2">
      <div className="flex items-start justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            ElHaKiM
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <div className="hidden gap-2 lg:flex">
          <Typography
            as="span"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <ListItem className="flex items-center gap-2 pr-4">
              <Link to="/become-doctor">Become a Doctor ?</Link>
            </ListItem>
          </Typography>
          <ProfileMenu />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex items-center w-full gap-2 flex-nowrap lg:hidden">
          <Typography
            as="span"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              <Link to="/search-doctor">Search Doctor</Link>
            </ListItem>
          </Typography>
          <ProfileMenu role="patient" />
        </div>
      </Collapse>
    </Navbar>
  );
}
