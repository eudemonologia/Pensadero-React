import React from "react";
import { Contenedor } from "./style";

export const SearchBar = (props) => {

    return (
        <Contenedor>
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Buscar"/>
        </Contenedor>
    )
}