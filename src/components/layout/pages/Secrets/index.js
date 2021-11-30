import React, { useState } from "react";
import styled from "styled-components";
import { ThinkCard } from "../../../commons/ThinkCard";
import { Input } from "../../../basics/Input";

let info = {
  titulo: "¿Qué es esto?",
  contenido:
    "Estás en una caja de sorpresas, solo te falta conocer la contraseña... pero cuidado, hay caminos que quizás no quieres conocer 😱",
};

export const Secrets = () => {
  const [contenido, setContenido] = useState("");

  const pressEnter = ({ keyCode, target }) => {
    let value = target.value.toLowerCase().trim();
    if (keyCode === 13) {
      console.log("Buh!");
      if (value === "linkedin") {
        window.location = "https://www.linkedin.com/in/cristiangongora/";
      } else {
        setContenido(<p align="center">¡Tus ojos no lo verán! 👹</p>);
      }
      target.value = "";
    }
  };

  return (
    <Contenedor>
      <ThinkCard articulo={info} />
      <Input type="text" placeholder="Palabra Secreta" onKeyDown={pressEnter} />
      <small>Apretá enter cuando estés listo 😈</small>
      <hr />
      <div>{contenido}</div>
    </Contenedor>
  );
};

const Contenedor = styled.section`
  display: flex;
  flex-direction: column;
  input {
    margin: 8px 16px;
  }

  small {
    margin: 0 16px 16px;
    font-family: var(--primaryFont);
  }
`;
