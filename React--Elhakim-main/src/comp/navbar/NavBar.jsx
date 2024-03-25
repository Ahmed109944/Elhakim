import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function StickyNavbar() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={"/services"} className="flex items-center">
          Services
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="z-10 max-w-full px-4 py-2 rounded-none border-b-gray-200 ron h-max lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            ElHaKiM
          </Typography>
          <div className="hidden mr-4 lg:block">{navList}</div>{" "}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1">
            <Button
              onClick={() => navigate("/auth/login")}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Link to={"auth/login"}>Log In</Link>
            </Button>
            <Button
              onClick={() => navigate("/auth/register")}
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Link to={"auth/register"}>Register</Link>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button
            onClick={() => navigate("/auth/login")}
            fullWidth
            variant="text"
            size="sm"
            className=""
          >
            <Link to={"auth/login"}>Log In</Link>
          </Button>
          <Button
            onClick={() => navigate("/auth/register")}
            fullWidth
            variant="gradient"
            size="sm"
            className=""
          >
            <Link to={"auth/register"}>Sign Up</Link>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
