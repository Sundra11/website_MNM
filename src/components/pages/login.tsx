import MainImage from "../../assets/Bg-hero.jpg";
import { LoginForm } from "../login-form";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -50, opacity: 0 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  className="min-h-screen bg-white"
>
      <div className="flex flex-1 w-full min-h-screen">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-black/40"></div>
          <img src={MainImage} alt="" className="h-full object-cover" />
        </div>
        <div className="items-center w-full">
          <LoginForm className="max-w-md mx-auto my-auto mt-20" />
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
