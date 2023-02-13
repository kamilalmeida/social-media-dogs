import styled from "styled-components";

export const PhotoPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margim-bottom: 2rem;

  #img {
    margin-bottom: 1rem;
  }
  .preview {
    border-radius: 1rem;
    background-size: cover;
    background-postion: center center;
  }
  .preview:after {
    content: "";
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;
