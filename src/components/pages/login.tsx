import MainImage from "../../assets/Bg-hero.jpg";
import { LoginForm } from "../login-form";

const Login = () => {
  return (
    <div className="flex flex-1 w-full min-h-screen">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/40"></div>
        <img src={MainImage} alt="" className="h-full object-cover" />
      </div>
      <div className="items-center w-full">
        <LoginForm className="max-w-md mx-auto my-auto mt-20" />
      </div>
    </div>
  );
};

export default Login;
