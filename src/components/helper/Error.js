import React from "react";
import * as C from "./styles";

export default function Error({ error }) {
  if (!error) return null;
  return <C.MessageError>{error}</C.MessageError>;
}
