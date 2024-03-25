import { createBrowserRouter } from "react-router-dom";
import Home from "./comp/Home/Home.jsx";
import Layout from "./comp/Layout/Layout.jsx";
import LayoutDR from "./comp/Layout/LayoutDR.jsx";
import MYPAtient from "./comp/DR/MYpatient/MYPAtient.jsx";
import Appointments from "./comp/DR/Appointments/Appointments.jsx";
import LayoutPatient from "./comp/Layout/LayoutPatient.jsx";
import PatientDashboard from "./comp/Patient/patient-dashboard/PatientDashboard.jsx";
import ChangePassword from "./comp/Patient/ChangePassword/ChangePassword.jsx";
import SerarchDR from "./comp/Patient/SearchDr/SerarchDR.jsx";
import LoginPage from "./comp/auth/LoginPage.jsx";
import Register from "./comp/auth/Register.jsx";
import ServiceMain from "./comp/Services/ServiceMain.jsx";
import BecomeDoctor from "./comp/BecomeDoctor/BecomeDoctor.jsx";
import Appointment from "./comp/Patient/GetAppintemnt/Appointment/Appointment.jsx";
import ProfileSetting from "./comp/Patient/ProfileSetting/ProfileSetting.jsx";
import ProfileSettings from "./comp/DR/ProfileSettings/ProfileSettings";
import Today from "./comp/DR/DoctorDashboard/Today/Today";
import Upcoming from "./comp/DR/DoctorDashboard/Upcoming/Upcoming.jsx";
import DoctorDashboard from "./comp/DR/DoctorDashboard/DoctorDashboard.jsx";
import ChangePasswordDr from "./comp/DR/ChangePassword/ChangePasswordDr";
import GurdDR from "./Gurd/GurdDR.jsx";
import GurdPatient from "./Gurd/GurdPatient.jsx";
import AboutMe from "./comp/DR/AboutME/Aboutme.jsx";
import AddPrescription from "./comp/DR/AddPrescription/AddPrescription";
import Prescription from "./comp/DR/Prescription/Prescription";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/become-doctor",
        element: (
          <GurdPatient>
            {" "}
            <BecomeDoctor />
          </GurdPatient>
        ),
      },
      {
        path: "services",
        element: <ServiceMain />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
      {
        path: "get-appintemnt/:doctor_id",
        element: (
          <GurdPatient>
            <Appointment />
          </GurdPatient>
        ),
      },
      {
        path: "get-appintemnt",
        element: (
          <GurdPatient>
            <Appointment />
          </GurdPatient>
        ),
      },

      {
        path: "/doctor",
        element: (
          <GurdDR>
            {" "}
            <LayoutDR />
          </GurdDR>
        ),
        children: [
          {
            path: "add-prescription/:booking/:user/:doctor",
            element: <AddPrescription />,
          },
          {
            path: "patients-list",
            element: <MYPAtient />,
          },
          {
            path: "appointments",
            element: <Appointments />,
          },
          {
            path: "profile-settings",
            element: <ProfileSettings />,
          },
          {
            path: "change-password",
            element: <ChangePasswordDr />,
          },

          {
            path: "dashboard",
            element: <DoctorDashboard />,
            children: [
              {
                index: true,

                element: <Today />,
              },
              {
                path: "upcoming",
                element: <Upcoming />,
              },
            ],
          },
        ],
      },
      {
        path: "doctor-profile/:id",
        element: <AboutMe />,
      },
      {
        path: "search-doctor",
        element: <SerarchDR />,
      },
      {
        path: "/patient",
        element: (
          <GurdPatient>
            <LayoutPatient />
          </GurdPatient>
        ),
        children: [
          // {
          //   path: "print-prescription/:id",
          //   element: <Prescription />,
          // },
          {
            path: "dashboard",
            element: <PatientDashboard />,
          },
          {
            path: "profile-settings",
            element: <ProfileSetting />,
          },

          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
]);
