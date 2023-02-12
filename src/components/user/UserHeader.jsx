import React from "react";
import { useLocation } from "react-router-dom";
import * as C from "../loginForm/styles";
import * as Component from "./styles";

import { UserHeaderNav } from "./UserHeaderNav";

export function UserHeader() {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    console.log("1");
    const { pathname } = location;
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [location]);

  return (
    <header className="header">
      <C.Title>{title}</C.Title>
      <UserHeaderNav />
    </header>
  );
}
