import React from "react";
import { UserContext } from "../../UserContext";
import { PhotoCommentsForm } from "./PhotoCommentsForm";

export function PhotoComments({ id }) {
  const { login } = React.useContext(UserContext);
  return <div>{login && <PhotoCommentsForm id={id} />}</div>;
}
