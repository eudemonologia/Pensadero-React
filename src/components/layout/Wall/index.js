import React from "react";
import {Contenedor} from "./style";
import {ThinkCard} from "../../commons/ThinkCard";
import {Articles} from "../../../articles";

export const Wall = () => {
return (
    <Contenedor>
        <header>
            <div>
                <h2>Inicio</h2>
                <i className="bi bi-list"></i>
            </div>
            <hr/>
        </header>
        {Articles.map((Article, key)=>
            <>
                <ThinkCard article={Article}/>
                <hr/>
            </>)}
    </Contenedor>
)
}