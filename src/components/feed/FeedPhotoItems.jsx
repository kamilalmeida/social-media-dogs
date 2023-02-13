import React from "react";

export function FeedPhotosItems({ photo, setModalPhoto }) {
  console.log(photo);
  return (
    <li className="photo" onClick={() => setModalPhoto(photo)}>
      <img src={photo.src} alt={photo.title} />
      <span className="views">{photo.acessos}</span>
    </li>
  );
}
