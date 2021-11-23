import React, {useState} from "react";
import {Contenedor} from "./style";
import {ThinkCard} from "../../commons/ThinkCard";
import {Articles} from "../../../articles";


let info = {
    header:{
        tema: "Instrucciones",
        titulo: "¿Qué es esto? 👀",
        fecha: "∞ - ∞ - ∞",
    },
    content: {
        text: "Estás en una caja de sorpresas, solo te falta conocer la contraseña... pero cuidado, hay caminos que quizás no quieres conocer 😱",
    }}

export const Secrets = () => {
    const [contenido, setContenido] = useState("")

    const pressEnter = ({keyCode, target}) => {
        let value = target.value.toLowerCase().trim()
        if(keyCode === 13){
            console.log("Buh!")
            if(value === "linkedin"){
                window.location = "https://www.linkedin.com/in/cristiangongora/"
            } else if (value === "articles"){
                setContenido(Articles.map((Article, key)=>
                <>
                    <ThinkCard article={Article}/>
                    <hr/>
                </>))
            } else {

                setContenido(<p align="center">¡Tus ojos no lo verán! 👹</p>)
            }
        target.value = "";
        }
    }

    return (
        <Contenedor>
            <header>
            <h2>Secretos</h2>
            <hr/>
            </header>
            <ThinkCard article={info} />
            <input type="text" placeholder="Contraseña" onKeyUp={pressEnter}/>
            <sub>Apretá enter cuando estés listo 😈</sub>
            <hr/>
            <div>{contenido}</div>
        </Contenedor>
    )

}