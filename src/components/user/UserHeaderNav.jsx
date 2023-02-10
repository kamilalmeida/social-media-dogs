import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPhoto } from "../../assets/feed.svg";
import { ReactComponent as GoOut } from "../../assets/sair.svg";
import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Stats } from "../../assets/estatisticas.svg";
import * as C from "./styles";
import { useMedia } from "../../Hooks/useMedia";

export function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMeu] = React.useState(false);
  console.log(mobileMenu);
  return (
  <C.ContainerMenu>
      {mobile && (
        <button
          className="ButtonActived"
          mobileMenu={mobileMenu}
          onClick={() => setMobileMeu(!mobileMenu)}
          aria-label="Menu"
        ></button>
      )}

      <C.NavBar>
        <NavLink to="/conta" end>
          <MyPhoto />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="postar">
          <AddPhoto />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={userLogout}>
          <GoOut />
          {mobile && "Sair"}
        </button>
      </C.NavBar>
  </C.ContainerMenu>
  );
}
