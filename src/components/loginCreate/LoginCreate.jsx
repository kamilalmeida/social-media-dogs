import React from "react";
import * as C from "../../styles/global";
import * as Comp from "../loginForm/styles";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import { useFetch } from "../../Hooks/useFetch";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { loading, error, request } = useFetch();
  
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <C.AnimeLeft>
      <Comp.Title>Cadastre-se</Comp.Title>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </C.AnimeLeft>
  );
}
