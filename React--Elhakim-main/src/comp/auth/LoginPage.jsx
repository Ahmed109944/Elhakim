import FormSignin from "./FormLogin.jsx";

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-10/12 mx-auto bg-white lg:flex-row-reverse lg:w-8/12 rounded-xl">
        <div className="w-full px-12 py-16 lg:w-1/2">
          <FormSignin />
        </div>
        <div className="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2">
          <img
            src="/src/assets/15634559_5599982.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
