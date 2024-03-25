import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  IconCheck,
  IconLockCancel,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function LocatinCard() {
  return (
    <Card
      color="cyan"
      variant="gradient"
      className="w-full max-w-[20rem] p-3 rounded-none  h-[400px] absolute top-0 left-9"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-2 text-center border-b rounded-none pb-9 border-white/10"
      >
        <Typography
          variant="h5"
          color="white"
          className="flex justify-center font-normal "
        >
          <span className="text-3xl">WORKING HOURS</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0 pl-5">
        <ul className="flex flex-col gap-4 ">
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <IconCheck />
            </span>
            <Typography className="font-normal">
              Sun - Wed: 9am - 7pm
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <IconCheck />
            </span>
            <Typography className="font-normal"> Thu : 11am - 7pm</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <IconLockCancel />
            </span>
            <Typography className="font-normal">Fri - Sat: Closed</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="p-0 mt-3">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-3 text-center rounded-none border-white/10"
        >
          <Typography
            color="white"
            className="flex justify-center gap-1 mt-1 font-normal "
          >
            <span className="text-2xl">CONTACT DETAILS</span>
          </Typography>
        </CardHeader>
        <ul className="flex flex-col gap-4 pl-5">
          <li className="flex items-center gap-4">
            <span className="p-1 ">
              <IconMapPin />
            </span>
            <Typography className="font-normal">
              <Link
                target="_blank"
                className="hover:text-cyan-900"
                to="https://maps.app.goo.gl/hjVtFGDJTY3bT9Vg7"
              >
                El Omraniya, Giza
              </Link>
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 ">
              <IconMail />
            </span>
            <Typography className="font-normal">
              {" "}
              <a
                className="hover:text-cyan-900"
                href="mailto:Elhakim@gmail.com"
              >
                Elhakim@gmail.com
              </a>
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1">
              <IconPhone />
            </span>
            <Typography className="font-normal hover:text-cyan-900">
              +2010326549
            </Typography>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
