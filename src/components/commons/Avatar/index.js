import React from "react";
import { Contenedor } from "./style";

export const Avatar = ({url, alt, name, userName}) => {
    return (
        <Contenedor>
            <img src={url} alt={alt}/>
            <figcaption>
                <h4>{name}</h4>
                <h5>{userName}</h5>
            </figcaption>
        </Contenedor>
    )
}