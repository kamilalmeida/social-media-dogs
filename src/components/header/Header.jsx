import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import * as C from "./styles";
import { UserContext } from "../../UserContext";

export default function Header() {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <C.Container>
      <nav>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <C.LinkLogin>
            <Link to="/conta">
              {data.nome}
              <button onClick={userLogout}>Sair</button>
            </Link>
          </C.LinkLogin>
        ) : (
          <C.LinkLogin>
            <Link to="/login">Criar / Login</Link>
          </C.LinkLogin>
        )}
      </nav>
    </C.Container>
  );
}
