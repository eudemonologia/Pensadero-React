import React from "react";
import {Contenedor} from "./style";
import {cv} from "../../../articles";
import {ThinkCard} from "../../commons/ThinkCard";

export const About = () => {
    return (
        <Contenedor>
            <header>
            <h2>Sobre Mi</h2>
            <hr/>
            </header>
            {cv.map((Article, key)=>
                <>
                    <ThinkCard article={Article}/>
                    <hr/>
                </>)}
        </Contenedor>
    )

}