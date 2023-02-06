import React from "react";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../Hooks/UseForm";
import { TOKEN_POST } from "../../api";
import { USER_GET } from "../../api";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUser(token);
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });
    console.log(url);
    const response = await fetch(url, options);
    const json = await response.json();
    window.localStorage.setItem("token", json.token);
    console.log(json);
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>

      <Link to="criar">Cadastro</Link>
    </section>
  );
}
