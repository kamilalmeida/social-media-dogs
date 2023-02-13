import React from "react";
import * as C from "../../styles/global";
import * as Comp from "./styles";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "../../Hooks/useForm";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../api";
import Error from "../helper/Error";
import { useNavigate } from "react-router-dom";

export function PhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, request, loading } = useFetch();
  console.log(data);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <C.AnimeLeft>
      <Comp.PhotoPost>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Peso" type="text" name="peso" {...peso} />
          <Input label="Idade" type="text" name="idade" {...idade} />
          <input type="file" name="img" id="img" onChange={handleImgChange} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
        <div>
          {img.preview && (
            <div
              className="preview"
              style={{ backgroundImage: `url(${img.preview})` }}
            ></div>
          )}
        </div>
      </Comp.PhotoPost>
    </C.AnimeLeft>
  );
}
