/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UnAuthorized from "../comp/UnAuthorized/UnAuthorized.jsx";

export default function GurdDR(props) {
  const { token } = useSelector((state) => state);
  const { userInfo } = useSelector((state) => state);

  const isStateEmpty = selectIsStateEmpty(token);

  if (!isStateEmpty && userInfo.role == "doctor") {
    if (userInfo.approved) return <>{props.children}</>;
    else return <UnAuthorized />;
  } else if ((!isStateEmpty, userInfo.role == "user")) return <UnAuthorized />;
  else {
    return <Navigate to={"/auth/login"} />;
  }
}
export const selectIsStateEmpty = (state) => {
  const stateKeys = Object.keys(state).filter((key) => key !== "_persist");

  return stateKeys.length === 0;
};
