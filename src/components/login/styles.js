import styled from "styled-components";
import img from "../../assets/login.jpg";

export const Login = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &:before {
    content: "";
    display: block;
    background: url(${img}) no-repeat center center / cover;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
    &:before {
      display: none;
    }
  }
`;

export const Forms = styled.div`
  max-width: 40rem;
  padding: 1rem;

  @media (max-width: 40rem) {
   max-width:100%;
    
  }
`;
