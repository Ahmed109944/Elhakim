import "./about.css";

const AboutMe = () => {
  return (
    <div className="max-w-4xl py-8 mx-auto">
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">About Me</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="mb-8 m">
        <h2 className="mb-4 text-2xl font-bold">Education</h2>
        <ul className="ml-6 list-disc experience-list ">
          <li className="flex ">
            <div className="right-section col-1">
              <div className="circle-before"></div>
            </div>
            <div className="col 4">
              American Dental Medical University - BDS (1998 - 2003)
            </div>
          </li>
          <li className="flex ">
            <div className="right-section col-1">
              <div className="circle-before"></div>
            </div>
            <div className="col 4">
              American Dental Medical University - MDS (2003 - 2005)
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Work & Experience</h2>
        <ul className="ml-6 list-disc experience-list ">
          <li className="flex ">
            <div className="right-section col-1">
              <div className="circle-before"></div>
            </div>
            <div className="col-4">
              Glowing Smiles Family Dental Clinic (2010 - Present) - 5 years
            </div>
          </li>
          <li className="flex ">
            <div className="right-section col-1">
              <div className="circle-before"></div>
            </div>
            <div className="col-4">
              comfort Care Dental Clinic (2007 - 2010) - 3 years
            </div>
          </li>
          <li className="flex ">
            <div className="right-section col-1">
              <div className="circle-before"></div>
            </div>
            <div className="col-4">
              Dream Smile Dental Practice (2005 - 2007) - 2 years
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Awards</h2>
        <div className="space-y-4 experience-list ">
          <div>
            <div className="flex">
              <div className="right-section col-1">
                <div className="circle-before"></div>
              </div>
              <p className="font-bold ">July 2019 - Humanitarian Award</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="right-section col-1">
                <div className="circle-before"></div>
              </div>
              <p className="font-bold">
                March 2011 - Certificate for International Volunteer Service
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
          </div>
          <div>
            <div className="flex">
              <div className="right-section col-1">
                <div className="circle-before"></div>
              </div>
              <p className="font-bold">
                May 2008 - The Dental Professional of The Year Award
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Services</h2>
        <ul className="flex ml-6 list-disc space-around">
          <li className="col-3">Tooth cleaning</li>
          <li className="col-3">Root Canal Therapy</li>
          <li className="col-3">Implants</li>
          <li className="col-3">Composite Bonding</li>
          <li className="col-3">Fissure Sealants</li>
          <li className="col-3">Surgical Extractions</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Specializations</h2>
        <ul className="flex ml-6 list-disc space-around">
          <li className="col-6">Children Care</li>
          <li className="col-6">Dental Care</li>
          <li className="col-6">Oral and Maxillofacial Surgery</li>
          <li className="col-6">Orthodontist</li>
          <li className="col-6">Periodontist</li>
          <li className="col-6">Prosthodontics</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
