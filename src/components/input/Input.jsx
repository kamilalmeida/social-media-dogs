import React from "react";
import * as C from "./styles";

export default function Input({
  label,
  type,
  name,
  onChange,
  value,
  error,
  onBlur,
}) {
  return (
    <C.Wrapper>
      <label htmlFor={name}>{label}</label>
      <C.Input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </C.Wrapper>
  );
}
