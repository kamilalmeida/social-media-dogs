import styled, { keyframes } from "styled-components";
import img from "../../assets/visualizacao-black.svg";

export const PhotoContent = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background: #fff;
  display: grid;

  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  animation: ScaleUp 0.3s forwards;

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

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .author a:hover {
    text-decoration: underline;
  }

  .viewsphoto:before {
    display: inline-block;
    content: "";
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${img});
  }

  .atributtes {
    display: flex;
    font-size: 1.2rem;
    margin: 1rem 0 2rem 0;
    font-weight: bold;
  }
  .atributtes li {
    margin-right: 2rem;
  }
  .atributtes li:before {
    content: "";
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;

export const BaseAnimation = styled.div`
  opacity: 0;
  transform: scale(0.8);
  animation: AnimeLeft 0.3s forwards;
`;

export const FadeInAnimation = keyframes`
to {
    opacity:initial;
    transform:initial;
} 
`;

export const Scaleup = styled(PhotoContent)`
  animation-name: ${FadeInAnimation};
`;
