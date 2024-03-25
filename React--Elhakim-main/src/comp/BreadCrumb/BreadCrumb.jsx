import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  const { pathname } = location;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <nav className="py-4 bg-blue-500 text-white p-5">
      <ol className="list-none flex">
        <li className="flex items-center">
          <FontAwesomeIcon icon={faHouse} className="mr-2 mb-1" />
          <Link to="/">Home</Link>
          {/* <span className="mx-2">/</span> */}
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <Link to={`/${pathSegments.slice(0, index + 1).join("/")}`}>
              {segment}
            </Link>
          </li>
        ))}
      </ol>
      <h1 className="text-white text-xl uppercase font-semibold mt-2 tracking-widest">
        {pathSegments[pathSegments.length - 1]}
      </h1>
    </nav>
  );
}
