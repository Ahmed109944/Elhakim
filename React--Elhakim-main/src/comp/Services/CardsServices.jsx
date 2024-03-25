import { HoverEffect } from "../ui/card-hover-effect";
import servicesPhotos from "../../assets/Services/servicesPhotos.js";
export function CardsServices() {
  return (
    <div className="px-8 mx-auto max-w-7xl">
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    q: "Lost a tooth?",
    service: "DENTAL SERVICES",
    description:
      "Offering a full range of treatments to restore your smile, from preventive care to complex dental reconstructions.",
    image: servicesPhotos.dentalServices,
  },
  {
    q: "Looking for a permanent tooth replacement?",
    service: "IMPLANTS",
    description:
      "Dental implants provide a durable and natural-looking solution for missing teeth, enhancing both function and aesthetics.",
    image: servicesPhotos.implants,
  },
  {
    q: "Want to enhance your smile?",
    service: "COSMETIC DENTISTRY",
    description:
      "Transform your smile with our cosmetic dentistry services, including professional whitening, veneers, and more.",
    image: servicesPhotos.cosmeticDentist,
  },
  {
    q: "Need to fill the gap?",
    service: "DENTAL BRIDGES",
    description:
      "Bridges can seamlessly fill the space left by missing teeth, restoring your smile and bite with a fixed solution.",
    image: servicesPhotos.dentalBridg,
  },
  {
    q: "Is your tooth damaged?",
    service: "CROWNS",
    description:
      "Preserve and strengthen a damaged tooth with a crown, custom-made to match your natural teeth for a seamless look.",
    image: servicesPhotos.crown,
  },
  {
    q: "Seeking a clear alternative to braces?",
    service: "INVISALIGN",
    description:
      "Invisalign offers a discreet way to straighten teeth using clear aligners, tailored to fit your lifestyle.",
    image: servicesPhotos.invisalign,
  },
  // {
  //   q: "Want a flawless smile?",
  //   service: "PORCELAIN VENEERS",
  //   description:
  //     "Porcelain veneers can correct a variety of dental imperfections, giving you a beautiful, long-lasting smile.",
  //   image: servicesPhotos.veneers,
  // },
  // {
  //   q: "Looking for a brighter smile?",
  //   service: "TEETH WHITENING",
  //   description:
  //     "Our teeth whitening services can remove stains and discoloration, giving you a whiter, more radiant smile.",
  //   image: servicesPhotos.teethWhitening,
  // },
];
