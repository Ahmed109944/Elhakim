/* eslint-disable react/prop-types */
import { StickyScroll } from "../../../ui/sticky-scroll-reveal.jsx";

export function StickyScrollRevealDemo({ bookingData }) {
  const content = bookingData.map((booking, index) => {
    return {
      description: booking,
      content: (
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={`/src/assets/scroll-${index + 1}.svg`}
            width={300}
            height={300}
            className="object-cover w-full h-full"
            alt="linear board demo"
          />
        </div>
      ),
    };
  });
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
