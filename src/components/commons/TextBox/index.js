import React from "react";
import { Contenedor } from "./style";
import {Button} from "../Button";

export const TextBox = (props) => {

    let heightInput = (e) => {
        e.target.style.height = "auto";
        console.log(e.target.scrollHeight);
        e.target.style.height = e.target.scrollHeight+"px";
    }

    return (
        <Contenedor>
            <label htmlFor="email">📧 Tu correo:
            <input type="email" id="email" placeholder="tunombre@tucorreo.com"/></label>
            <label htmlFor="mensaje">🙌 Tu mensaje:
            <textarea onInput={heightInput} id="mensaje" placeholder={props.placeholder} /></label>
            <Button size="" mensaje="Enviar" onClick={(e)=> e.preventDefault()} />
        </Contenedor>
    )
}