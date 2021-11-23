import React from "react";
import { Contenedor } from "./style";
import { SearchBar } from "../../commons/SearchBar";
import Pensamiento from "../../commons/Pensamiento";
import { Pensamientos } from "../../../articles";

export const Thinks = () => {
  return (
    <Contenedor>
      <SearchBar />
      <h3>Pensamiento del día</h3>
      {Pensamientos.map((pensamiento, key) => (
        <>
          <Pensamiento pensamiento={pensamiento} />
        </>
      ))}
    </Contenedor>
  );
};
