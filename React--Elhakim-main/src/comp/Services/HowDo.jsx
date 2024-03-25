import { LayoutGrid } from "../ui/layout-grid";

export function HowDo() {
  return (
    <div className="w-full  pt-3 py-20 h-[50rem]">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-cyan-300">What we do</p>
      <p className="text-4xl font-normal text-cyan-300">WE CARE ABOUT YOU</p>
      <p className="max-w-lg mx-auto text-base font-normal text-cyan-300">
        Our clinic prioritizes your health and well-being, ensuring that every
        visit is met with compassion and attention to your individual needs
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-cyan-800">What we do</p>
      <p className="text-4xl font-normal text-cyan-500">WE CARE ABOUT YOU</p>
      <p className="max-w-lg mx-auto text-base font-normal text-cyan-300">
        Receive expert guidance on maintaining and improving your health, with
        personalized recommendations tailored to your unique medical history and
        lifestyle
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-cyan-300">We offer professional</p>
      <p className="text-4xl font-normal text-cyan-300">Medical Services</p>
      <p className="max-w-lg mx-auto text-base font-normal text-cyan-300">
        Benefit from a wide array of professional healthcare services, ranging
        from preventive care to specialized treatments, all designed to support
        your overall health
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-cyan-300">What we do</p>
      <p className="text-4xl font-normal text-cyan-300">Health Education</p>
      <p className="max-w-lg mx-auto text-base font-normal text-cyan-300">
        Empower yourself with knowledge as we provide health education resources
        to help you make informed decisions about your care and lifestyle.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/src/assets/chair.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/src/assets/carousel-1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/src/assets/carousel-2.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/src/assets/carousel-11.jpg",
  },
];
