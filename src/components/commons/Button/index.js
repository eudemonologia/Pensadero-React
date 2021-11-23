import React from "react";
import { Contenedor } from "./style";

export const Button = (props) => {
    return (
      <Contenedor size={props.size} onClick={props.onClick}>
          {props.mensaje}
      </Contenedor>
    )
}