import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Button } from "../../basics/Button";
import { Botonera } from "../../containers/Botonera";

export const UserOption = ({ isLoggedIn, handleLogout }) => {
  const history = useHistory();
  const handleClickAdmin = () => {
    history.push("/admin");
  };
  return (
    <Contenedor>
      <Botonera gap="16px">
        <a href="https://www.linkedin.com/in/cristiangongora/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://twitter.com/tecnoaforismos">
          <i className="bi bi-twitter"></i>
        </a>
      </Botonera>
      <p>Todos los derechos reservados.</p>
      {isLoggedIn && (
        <Button width="full" onClick={handleClickAdmin}>
          Admin
        </Button>
      )}
      {isLoggedIn && (
        <Button width="full" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      )}
    </Contenedor>
  );
};

export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: auto;
  padding: 8px 16px;
  i {
    font-size: 24px;
  }
  a {
    color: var(--primaryColor);
    &:hover {
      color: var(--secondaryColor);
    }
    &:focus {
      color: var(--secondaryColor);
    }
    &:active {
      color: var(--secondaryColor);
    }
  }
`;
