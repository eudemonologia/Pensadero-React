import React from "react";
import {Contenedor} from "./style";
import {ThinkCard} from "../../commons/ThinkCard";
import {Porfolio} from "../../../articles";

export const Portfolio = () => {
    return (
        <Contenedor>
            <header>
            <h2>Porfolio</h2>
            <hr/>
            </header>
            {Porfolio.map((Article, key)=>
                <>
                    <ThinkCard article={Article}/>
                    <hr/>
                </>)}
        </Contenedor>
    )

}