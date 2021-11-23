import React from "react";
import {ThinkBox} from "../../commons/ThinkBox";
import {Contenedor} from "./style";

export const Modal = ({active, toggle}) => {

    const onClick = (event) => {
        if (event.target.id === "modal") toggle()
    }

    return(
        <>
            {active && (
                <Contenedor id="modal" onClick={onClick}>
                    <ThinkBox toggle={toggle}/>
                </Contenedor>
            )}
        </>
    )
}