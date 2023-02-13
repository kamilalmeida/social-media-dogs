import React from "react";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "../../Hooks/useForm";
import * as C from "../../styles/global";
import * as Comp from "./styles";
import Error from "../helper/Error";

import { UserContext } from "../../UserContext";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate())
      userLogin(username.value, password.value);
  }

  return (
    <section>
      <C.AnimeLeft>
        <Comp.Title>Login</Comp.Title>
        <Comp.Container>
          <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Entrar</Button>
            )}
            <Error error={error} />
          </form>
          <Link to="/login/perdeu" className="lostpassword">
            Perdeu a senha
          </Link>
          <div className="register">
            <h2 className="subtitle">Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            {loading ? (
              <Button>
                <Link to="criar">Cadastrando...</Link>
              </Button>
            ) : (
              <Button>
                <Link to="criar">Cadastro</Link>
              </Button>
            )}
          </div>
        </Comp.Container>
      </C.AnimeLeft>
    </section>
  );
}
