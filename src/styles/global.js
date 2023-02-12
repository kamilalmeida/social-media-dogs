import styled, { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  padding-top: 4rem;
  color: #333;
  
  font-family: Helvetica, Arial, sans-serif;
}

h1, h2,h3, h4,p {
  margin:0px;
  }
  ul, li{
    list-style:none;
    padding:0px;
    margin:0px;
  }
  button, input{
    display:block;
    font-size:1rem;
    font-family:Helvetica, Arial, sans-serif;
    color:#333;

  }
  img {
    display:block;
    max-width:100%;
  }
  a {
    color:#333;
    text-decoration:none;
  }
.containerglobal {
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}
`;

export const BaseAnimation = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: AnimeLeft 0.3s forwards;
`;
const FadeInAnimation = keyframes`  
  to { 
    opacity: 1;
    transform: initial;
   }
   
  from { 
    opacity: 0; 
  }

`;

export const AnimeLeft = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;
