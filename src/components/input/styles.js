import styled from "styled-components";

export const Input = styled.input`
  display: block;
  font-size: 1rem;
  border: 1px solid #eee;
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
  p {
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;
