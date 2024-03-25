import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./RouterConfig.jsx";

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
