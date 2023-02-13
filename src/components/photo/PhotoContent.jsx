import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import * as Comp from "../loginForm/styles";
import { PhotoComments } from "./PhotoComments";

export function PhotoContent({ data }) {
  const { photo, comments } = data;
  return (
    <C.PhotoContent>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="viewsphoto">{photo.acessos}</span>
          </p>
          <Comp.Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Comp.Title>
          <ul className="atributtes">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade == 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
        <PhotoComments id={photo.id} />
      </div>
    </C.PhotoContent>
  );
}
