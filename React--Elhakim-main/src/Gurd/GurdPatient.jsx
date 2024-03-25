/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function GurdPatient(props) {
  const { token } = useSelector((state) => state);
  const { userInfo } = useSelector((state) => state);

  const isStateEmpty = selectIsStateEmpty(token);

  if ((!isStateEmpty, userInfo.role == "user")) {
    return <>{props.children}</>;
  } else {
    return <Navigate to={"/auth/login"} />;
  }
}
export const selectIsStateEmpty = (state) => {
  const stateKeys = Object.keys(state).filter((key) => key !== "_persist");

  return stateKeys.length === 0;
};
