import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPhoto } from "../../assets/feed.svg";
import { ReactComponent as GoOut } from "../../assets/sair.svg";
import { ReactComponent as AddPhoto } from "../../assets/adicionar.svg";
import { ReactComponent as Stats } from "../../assets/estatisticas.svg";

import { useMedia } from "../../Hooks/useMedia";

export function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);

  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          className={`mobileButton ${mobileMenu && "mobileButtonActive"}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
        ></button>
      )}

      <nav
        className={`${mobile ? "navMobile" : "navbar"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
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
      </nav>
    </>
  );
}
