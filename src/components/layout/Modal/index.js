import React from "react";

import { Contenedor } from "./style";

export const Modal = ({ titulo, active, toggle, children }) => {
  const onClick = (event) => {
    if (event.target.id === "modal") toggle();
  };

  return (
    <>
      {active && (
        <Contenedor id="modal" onClick={onClick}>
          <main>
            <header>
              <h3>{titulo}</h3>
              <button onClick={toggle}>X</button>
            </header>
            <hr />
            <section>{children}</section>
          </main>
        </Contenedor>
      )}
    </>
  );
};
