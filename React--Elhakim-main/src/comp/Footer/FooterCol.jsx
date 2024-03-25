/* eslint-disable react/prop-types */
import "./FooterCol.css";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="md:w-3/12">
      <h6
        style={{
          color: "#1CC7C1",
          fontWeight: "800",
          fontSize: "1.1rem",
          paddingBottom: "20px",
        }}
      >
        {" "}
        {props.menuTitle ? props.menuTitle : <br />}{" "}
      </h6>

      <ul className="list-none">
       
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link className="text-cyan-500" to={item.link}>
              {" "}
              {item.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
