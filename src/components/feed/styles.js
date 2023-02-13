import styled from "styled-components";
import img from "../../assets/visualizacao.svg";
export const Container = styled.div`
  .listphoto {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;

    @media (max-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .photo:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;

    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  .photo img {
    grid-area: 1/1;
  }

  li.photo {
    display: grid;

    border-radius: 0.3rem;
    overflow: hidden;
    cursor: pointer;
  }

  .photo img {
    grid-area: 1/1;
  }
  .views {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1rem;
    text-align: center;

    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
  }
  .views:before {
    content: "";
    width: 16px;
    height: 10px;
    margin-right: 0.25rem;
    background: url(${img}) no-repeat;
    display: inline-block;
  }
  .photo:hover .views {
    display: flex;
  }

  .modal {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;

    @media (max-width: 40rem) {
      padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
  }
`;
