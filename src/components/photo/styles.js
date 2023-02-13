import styled from "styled-components";

export const PhotoContent = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background: #fff;
  display: grid;
  opacity:0;
  transform: scale(.8);

  @keyfremes scaleup{

  }

  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;

  .details {
    padding: 2rem 2rem 0 2rem;
  }
  .img {
    grid-row: 1/4;
  }
  .comments {
    padding: 0 2rem;
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    .img {
      grid-row: 1;
    }
  }
`;