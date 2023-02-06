import React from "react";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../Hooks/UseForm";
import { TOKEN_POST } from "../../api";
import { USER_GET } from "../../api";
import { UserContext } from "../../UserContext";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
 

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
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
