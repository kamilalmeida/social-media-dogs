import styled from "styled-components";

export const UserNavigation = styled.section`
  .navbar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .navbar a,
  .navbar button,
  .mobileButton {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    transiotion: 0.1s;
    cursor: pointer;
    border: none;
    padding: 0px;
  }

  .navbar a:hover,
  .navbar a:focus,
  .navbar button:hover,
  .navbar button:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #ffbb11bf;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin: 2rem 0;
    position: relative;
  }
  .mobileButton:after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2.5px;
    border-radius: 3px;
    background: currentColor;

    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
  .mobileButton:focus,
  .mobileButton:hover {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;

    color: #fb1;
  }
  .mobileButtonActive:after {
    transform: rotate(90deg);
    width: 4px;
    heigth: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
  .navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    transform: translateX(-10px);
    opacity: 0;
    pointer-event: none;
  }
  .navMobileActive {
    transition: 0.3s;
    opacity: 1;
    z-index: 100;
    pointer-event: inital;
  }

  .navMobile a,
  .navMobile button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
    border: none;
  }
  .navMobile svg {
    margin-right: 0.5rem;
  }
  .navMobile a:hover svg > *,
  .navMobile button:hover svg > * {
    fill: #fb1;
  }
`;
