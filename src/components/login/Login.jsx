import { Routes, Route } from "react-router-dom";
import LoginForm from "../loginForm/LoginForm";
import LoginCreate from "../loginCreate/LoginCreate";
import LoginPasswordLost from "../passwordLost/LoginPasswordLost";
import LoginPasswordReset from "../passwordReset/LoginPasswordReset";

export default function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
