import React, { useState } from "react";
import { Button } from "../../basics/Button/index";
import { Contenedor } from "./style";
import { ListaOption } from "./Lista";
import { UserOption } from "./UserOption";
import { Modal } from "../Modal";
import { Formulario } from "../../containers/Formulario";
import { Input } from "../../basics/Input";
import { Textarea } from "../../basics/Textarea";
import { Botonera } from "../../containers/Botonera";
import fotoPerfil from "../../../Assets/images/Foto-perfil.jpg";
import { contactoServices } from "../../../services/contacto";

export const Menu = ({ setIsLoggedIn, isLoggedIn, setUser }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const toggleModal = () => {
    setActiveModal(!activeModal);
  };

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("user_web_up_token");
    setIsLoggedIn(false);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      mensaje: e.target.mensaje.value,
    };
    contactoServices.enviarMail(data).then((res) => {
      console.log(res);
      setMensajeEnviado(true);
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 3000);
    });
  };

  return (
    <Contenedor>
      <img src={fotoPerfil} alt="Foto de Cristian Diego Góngora Pabón" />
      <h1>
        Cristian Diego
        <br />
        Góngora Pabón
      </h1>
      <p>UX DESIGNER & WEB DEVELOPER</p>
      <ListaOption />
      {!isLoggedIn && (
        <Button size="big" onClick={toggleModal}>
          Contactar
        </Button>
      )}
      <Modal
        titulo="Encantado de conocerte 🤗"
        active={activeModal}
        toggle={toggleModal}
      >
        {mensajeEnviado ? (
          <>
            <p>¡Gracias por contactarme, te responderé lo antes posible!</p>
            <Botonera direction="column">
              <Button flex="end" onClick={toggleModal}>
                Cerrar
              </Button>
            </Botonera>
          </>
        ) : (
          <Formulario method="post" onSubmit={handleSubmitEmail}>
            <Input
              size="modal"
              label="Tu correo:"
              type="email"
              name="email"
              placeholder="tunombre@tucorreo.com"
            />
            <Textarea
              size="modal"
              label="Tu mensaje:"
              name="mensaje"
              id="mensaje"
              placeholder="Deja aquí tu mensaje"
            />
            <Button size="big">Enviar</Button>
          </Formulario>
        )}
      </Modal>
      <UserOption isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </Contenedor>
  );
};
