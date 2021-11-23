import React, {useState} from "react";
import {Button} from "../../commons/Button/index";
import {Contenedor} from "./style";
import {ListaOption} from "./Lista";
import {UserOption} from "./UserOption";
import {Modal} from "../Modal";





export const Menu = () => {
    const [activeModal, setActiveModal] = useState(false);

    const toggle = () => {
        setActiveModal(!activeModal)
    }


    return(
      <Contenedor>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQEBvaQCjOPuuA/profile-displayphoto-shrink_200_200/0/1627940208135?e=1638403200&v=beta&t=uQ2EhQW5qb1mm-OWPwjRtNvmoiHPYubJ4v-nIutQVMo" alt="Foto de Cristian Diego Góngora Pabón" />
          <h1>Cristian Diego<br/>
          Góngora Pabón</h1>
          <p>UX DESIGNER & WEB DEVELOPER</p>
          <ListaOption/>
          <Button size="big" mensaje="Contactar" onClick={toggle} />
          <Modal active={activeModal} toggle={toggle}/>
          <UserOption/>
      </Contenedor>
  )
}