import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import * as C from "./styles";

export default function Header() {
  return (
    <C.Container>
      <nav>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <C.LinkLogin>
          <Link to="/login">Criar / Login</Link>
        </C.LinkLogin>
      </nav>
    </C.Container>
  );
}
