import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  margin:0px;
  padding-top: 4rem;
  color: #333;
  --type-firts: Helvetica, Arial, sans-serif;
  font-family: Helvetica, Arial, sans-serif;
}
h1, h2,h3, h4,p{
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
  img{
    display:block;
    max-width:100%;
  }
  a{
    text-decoration:none;
  }
`;
