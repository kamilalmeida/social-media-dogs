import styled from "styled-components";
import img from "../../assets/usuario.svg";

export const Container = styled.header`
  width: 100%;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);

  position: fixed;
  z-index: 100;
  background: #fff;
  top: 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;

    height: 4rem;
  }

  nav a {
    color: #333;
  }

  .logo {
    padding: 0.5rem 0;
  }
  .login:after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${img}) no-repeat center center;
    margin-left: 0.5rem;
  }
`;
