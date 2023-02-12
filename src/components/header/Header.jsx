import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import * as C from "./styles";
import { UserContext } from "../../UserContext";

export default function Header() {
  const { data } = React.useContext(UserContext);
  return (
    <C.Container>
      <nav className="containerglobal">
        <Link to="/" aria-label="Dogs - Home" className="logo">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className="login">
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className="login">
            Criar / Login
          </Link>
        )}
      </nav>
    </C.Container>
  );
}
