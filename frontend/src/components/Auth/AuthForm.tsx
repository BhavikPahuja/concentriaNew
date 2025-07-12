import { useState } from "react";
import AuthHeader from "./AuthHeader";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import ToggleMode from "./ToggleMode";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-6/12 bg-white p-8 rounded-2xl shadow-xl">
      <AuthHeader isLogin={isLogin} />
      <form className="space-y-4">
        {!isLogin && <InputField type="text" placeholder="Full Name" />}
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton label={isLogin ? "Login" : "Sign Up"} />
      </form>
      <ToggleMode isLogin={isLogin} toggle={() => setIsLogin(!isLogin)} />
    </div>
  );
}