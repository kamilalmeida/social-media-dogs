import React from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import * as Comp from "./styles";

export function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <Comp.Container>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </Comp.Container>
  );
}
