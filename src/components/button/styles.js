import styled from "styled-components";

export const Btn = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  min-width: 8rem;
  transition: 0.1;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
