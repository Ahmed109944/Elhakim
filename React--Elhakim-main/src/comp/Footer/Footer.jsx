import "./Footer.css";
import FooterCol from "./FooterCol";

import {
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

const Footer = () => {
  const ourAddress = [{ name: "El Omraniya, Giza", link: "//google.com/map" }];
  const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
  ];
  const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
  ];
  return (
    <footer className="flex items-center justify-center clear-both py-5 bg-gray-100 footer-area">
      <div className="container">
        <div className="flex flex-row justify-around mb-5 bottom-4">
          {/* <FooterCol key={1} menuTitle={""} menuItems={noNamed} /> */}
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="flex justify-center mt-4">
              <li className="mx-2">
                <a href="//facebook.com" className="text-blue-600">
                  {/* Icon component */}
                  <IconBrandFacebookFilled />
                </a>
              </li>
              <li className="mx-2">
                <a href="//instagram.com" className="text-blue-600">
                  {/* Icon component */}
                  <IconBrandTwitterFilled />
                </a>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <h6 className="text-lg font-semibold">Call Now</h6>
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                +2010326549
              </button>
            </div>
          </FooterCol>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
