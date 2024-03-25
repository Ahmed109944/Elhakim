import React from "react";
import {
  PowerIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { removeToken } from "../../ReduxTK/Slices/tokenSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../ReduxTK/Store.js";
import { removeuserInfo } from "../../ReduxTK/Slices/userInfoSlice.js";
// eslint-disable-next-line react/prop-types
export default function ProfileMenu() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const link = userInfo.role === "doctor" ? "/doctor/" : "/patient/";
  const profileMenuItems = [
    {
      label: "Profile Settings",
      icon: Cog6ToothIcon,
    },
    {
      label: "Change Password",
      icon: UserCircleIcon,
    },

    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeToken());
    dispatch(removeuserInfo());
    persistor
      .purge()
      .then(() => {
        navigate("/auth/login");
        console.log("Purge of persistent state completed");
      })
      .catch((error) =>
        console.error("Purge of persistent state failed", error)
      );
  };
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={`http://localhost:3000/upload/${userInfo.photo}`}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label === "Sign Out" ? (
                  <Link onClick={handleSignOut}> {label}</Link>
                ) : (
                  <Link to={link + label.toLowerCase().replace(/ /g, "-")}>
                    {" "}
                    {label}
                  </Link>
                )}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
