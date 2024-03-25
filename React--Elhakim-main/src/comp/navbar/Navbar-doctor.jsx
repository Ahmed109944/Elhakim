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
import {
  Bars4Icon,
  GlobeAmericasIcon,
  PhoneIcon,
  SquaresPlusIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import ProfileMenu from "./ProfileMenue.jsx";
import NavListMenu from "./NavList.jsx";

const navListMenuItems = [
  {
    title: "Patients List",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Appointments",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Dashboard",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
];

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
      <NavListMenu navListMenuItems={navListMenuItems} role="doctor" />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarDr() {
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
          <ProfileMenu role="doctor" />
        </div>
      </Collapse>
    </Navbar>
  );
}
