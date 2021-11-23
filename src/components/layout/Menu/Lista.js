import React from "react";
import {Item} from "./style"
import {Lista} from "./style"
import {NavLink} from "react-router-dom";

const webMap = [{
    name:"Inicio",
    icon:{
        default:"bi bi-house-door",
        active: "bi bi-house-door-fill"
        },
    path:"/"
    }, {
    name:"Porfolio",
    icon:{
        default: "bi bi-laptop",
        active: "bi bi-laptop-fill"
    },
    path:"/porfolio"
    }, {
    name: "Secretos",
    icon: {
        default: "bi bi-bookmark",
        active: "bi bi-eye-fill"
    },
    path: "/secretos"
    }, {
    name: "Sobre mi",
    icon: {
        default: "bi bi-person",
        active: "bi bi-person-fill"
    },
    path: "/sobre-mi"
}]

export  const ListaOption = () => {
  return(
      <Lista>
          {webMap.map(({name, icon, path}, key)=><IconOption key={key} text={name} icon={icon} path={path} />)}
      </Lista>
  )
}

export const IconOption = ({text, icon, path}) => {
    return(
        <Item>
            <NavLink exact to={path}>
                <i className={icon.active}></i>
                <p>{text}</p>
            </NavLink>
        </Item>
    )
}