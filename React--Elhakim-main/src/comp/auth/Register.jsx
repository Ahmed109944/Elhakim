import FormSignup from "./FormSignup.jsx";

export default function Register() {
  return (
    <div
      className="min-h-screen "
    //   style={{ backgroundImage: "" }}
    >
      <div className="container mx-auto container-signup">
        <div className="flex flex-col w-10/12 mx-auto overflow-hidden bg-white lg:flex-row lg:w-8/12 rounded-xl">
          <div className="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2">
            <img
              src="/src/assets/dentist-clinic.svg"
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full px-12 py-16 lg:w-1/2">
            <FormSignup />
          </div>
        </div>
      </div>
    </div>
  );
}
