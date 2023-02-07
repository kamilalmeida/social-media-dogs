import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../loginForm/LoginForm";
import LoginCreate from "../loginCreate/LoginCreate";
import LoginPasswordLost from "../passwordLost/LoginPasswordLost";
import LoginPasswordReset from "../passwordReset/LoginPasswordReset";
import { UserContext } from "../../UserContext";

export default function Login() {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
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
