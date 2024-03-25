import { LandingBecomeDR } from "./LandingBecomeDR.jsx";
import "./BecomeDoctor.css";
import FormBecomeDR from "./FormBecomeDR.jsx";
export default function BecomeDoctor() {
  return (
    <div>
      <div className="mb-3 overflow-hidden bg-black/75 h-96 top-become-doctor">
        {" "}
        <LandingBecomeDR />
      </div>
      <div className="flex justify-center py-10">
        <FormBecomeDR />
      </div>
    </div>
  );
}
