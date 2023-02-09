import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Spectral", georgia;
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0 2rem 2rem;
  position: relative;
  z-index: 1;

  &&:after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Container = styled.div`
  margin-bottom: 2rem;
  max-width: 50rem;
  padding: 2rem;
`;

export const ButtonLostPassword = styled.span`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
  margin-left: 2rem;

  &:after {
    content: "";
    height: 2px;
    width: 100%;
    background: #666;
    display: block;
  }
`;

export const Register = styled.div`

  margin: 4rem 0 0 2rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  h2 {
    font-family: "Spectral", georgia;
    line-height: 1;
    font-size: 2rem;
  }

  h2::after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
  }
`;
