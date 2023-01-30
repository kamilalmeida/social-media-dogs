import React from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";

export default function Header() {
  return (
    <C.Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Criar/Login</Link>
      </nav>
    </C.Container>
  );
}
