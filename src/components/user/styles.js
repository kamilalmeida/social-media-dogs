import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-colunms: 1fr auto;
  aling-items: center;
  margin-botton: 2rem;
  position: relative;
`;

export const Container = styled.section`
  margin-left: 2rem;
`;

export const ContainerMenu = styled.div`
  background: red;
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transiotion: 0.1s;
    cursor: pointer;
    border: none;
  }
  .ButtonActived {
  }
`;

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  margin: 1rem 0 0 2rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transiotion: 0.1s;
    cursor: pointer;
    border: none;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: #ffbb11c7;
    box-shadow: 0 0 0 3px #eee;
  }
`;

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transiotion: 0.1s;
  cursor: pointer;
  border: none;

  &:after {
    content: "";
    background: red;
    display: block;
    height: 2px;
    width: 1.2rem;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
  }
  &:after {
    transform: ${({ mobileMenu }) =>
      mobileMenu ? "rotate(90deg)" : "rotate(0)"};
    width: 4px;
  }

  &:focus,
  &:hover {
    outline: none;
    color: #fff;
    background: #fea;
  }
`;

export const MobileButtonActive = styled(MobileButton)`
  &:after {
  }
`;
