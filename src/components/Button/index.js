import React from "react";
import { ButtonContainer } from "./styles";

function Button({onClick}) {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      Buscar
    </ButtonContainer>
  );
}

export default Button;
