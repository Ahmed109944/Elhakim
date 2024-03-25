import { TypewriterEffectSmooth } from "../ui/typewriter-effect.jsx";
import { CardsServices } from "./CardsServices.jsx";
import "./services.css";
import { HowDo } from "./HowDo";

export default function ServiceMain() {
  const words = [
    {
      text: "We provide",
      className: "text-cyan-300",
    },
    {
      text: "custom",
      className: "text-cyan-300",
    },
    {
      text: "services",
      className: "text-cyan-300",
    },
    {
      text: "with",
      className: "text-cyan-300",
    },
    {
      text: "great.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-[30rem] top-services">
        <div className="flex flex-col items-start justify-center w-full h-full p-9">
          <p className="mb-5 text-3xl font-medium text-black ">
            What can we offer you?
          </p>
          <TypewriterEffectSmooth words={words} />

          <h1 className="text-5xl font-bold text-cyan-700">OUR SERVICES</h1>
          <h1 className="mt-5 text-5xl font-medium text-cyan-300">
            Your New <br className="md:hidden" /> Smile <br /> Starts Here
          </h1>
        </div>
      </div>
      <CardsServices />
      <div className="relative pt-2 text-center">
        <h1 className="mx-auto text-5xl font-bold border-b-2 w-fit border-cyan-900 text-cyan-700">
          How we do it?
        </h1>
        <p className="mt-5 text-3xl font-medium text-black">OUR PROCESS</p>
        <HowDo />
      </div>
    </div>
  );
}
