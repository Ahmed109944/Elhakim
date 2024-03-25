import "./carsuel.css";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel
      autoplay={true}
      prevArrow={() => false}
      nextArrow={() => false}
      transition={{
        duration: 1,
        type: "tween",
      }}
      autoplayDelay={6000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative w-full image-carousel-container">
        <img
          src="/src/assets/carousel-1.jpg"
          alt="image 1"
          className="w-full h-full"
        />
        <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Serenity of Smiles
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Just as the forest’s gentle whisper calms the soul, so does the
              serenity of smiles in our clinic.&nbsp; It’s not merely the
              aesthetics of a healthy grin that touches lives, but that
              intangible warmth that emanates from a compassionate heart,
              renewing spirits with each patient we meet.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Get Appointments
              </Button>
              <Button size="lg" color="white" variant="text">
                Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full image-carousel-container">
        <img
          src="/src/assets/carousel-11.jpg"
          alt="image 1"
          className="w-full h-full"
        />
        <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Harmony of Healing{" "}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Our clinic stands as a beacon of benevolence, where the glow of
              genuine smiles illuminates the path to wellness. Beyond the
              science of medicine lies the art of care, painting hope on the
              canvas of recovery, guiding each soul to the masterpiece of their
              health
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Get Appointments
              </Button>
              <Button size="lg" color="white" variant="text">
                Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full image-carousel-container">
        <img
          src="/src/assets/carousel-2.jpg"
          alt="image 2"
          className="w-full h-full"
        />
        <div className="absolute inset-0 grid items-center w-full h-full bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Tapestry of Trust{" "}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Woven into the fabric of our practice is the tapestry of trust,
              stitched with the threads of sincere smiles. Each interaction is
              more than a procedure; it’s a promise of comfort, a patchwork of
              professionalism and kindness, enveloping patients in the quilt of
              quality care
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Get Appointments
              </Button>
              <Button size="lg" color="white" variant="text">
                Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
