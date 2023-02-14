import React from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import * as Comp from "./styles";

export function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  console.log(modalPhoto);
  return (
    <Comp.Container>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </Comp.Container>
  );
}
