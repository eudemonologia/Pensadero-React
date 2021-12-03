import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchBar } from "../../commons/SearchBar";
import { Pensamiento } from "../../containers/Pensamiento";
import { Quote } from "../../commons/Quote";
import { Button } from "../../basics/Button";
import { Formulario } from "../../containers/Formulario";
import { Input } from "../../basics/Input";
import { Textarea } from "../../basics/Textarea";
import { pensamientosServices } from "../../../services/pensamientos";

export const Thinks = ({ isLoggedIn, user }) => {
  const [pensamientos, setPensamientos] = useState([]);
  const [loadingPensamientos, setLoadingPensamientos] = useState(true);

  useEffect(() => {
    if (loadingPensamientos) {
      pensamientosServices.getAleatorios().then((res) => {
        if (res) {
          setPensamientos(res);
          setLoadingPensamientos(false);
        }
      });
    }
  }, [loadingPensamientos]);

  const handleSubmitPensamiento = (e) => {
    e.preventDefault();
    const data = {
      texto: e.target.texto.value,
    };
    if (e.target.autor.value !== "") {
      data.autor = e.target.autor.value;
    }
    pensamientosServices.create(data, user).then((res) => {
      console.log(res);
      e.target.texto.value = "";
      e.target.autor.value = "";
      setLoadingPensamientos(true);
    });
  };

  const handleMasPensamientos = (e) => {
    setLoadingPensamientos(true);
  };

  return (
    <Contenedor>
      <SearchBar />
      <h3>Pensamiento del día</h3>
      {isLoggedIn && (
        <Pensamiento>
          <h4>Nuevo pensamiento</h4>
          <Formulario onSubmit={handleSubmitPensamiento}>
            <Textarea
              size="modal"
              type="text"
              placeholder="Escribe el pensamiento"
              name="texto"
              id="texto"
              label="Pensamiento: "
              required
            />
            <Input
              size="modal"
              type="text"
              placeholder="Escribe el autor"
              name="autor"
              id="autor"
              label="Autor: "
            />
            <Button width="full" bg="none">
              PUBLICAR
            </Button>
          </Formulario>
        </Pensamiento>
      )}
      {loadingPensamientos ? (
        <Pensamiento>
          <p>Cargando grandes pensamientos de nobles autores...</p>
        </Pensamiento>
      ) : (
        pensamientos.map((pensamiento) => (
          <PensamientoQuote
            key={pensamiento.id}
            isLoggedIn={isLoggedIn}
            user={user}
            id={pensamiento.id}
            texto={pensamiento.texto}
            autor={pensamiento.autor}
            setLoadingPensamientos={setLoadingPensamientos}
          />
        ))
      )}
      <Pensamiento onClick={handleMasPensamientos}>
        <Button width="full" bg="none">
          + PENSAMIENTOS
        </Button>
      </Pensamiento>
    </Contenedor>
  );
};

const PensamientoQuote = ({
  isLoggedIn,
  user,
  id,
  texto,
  autor,
  setLoadingPensamientos,
}) => {
  const handleEliminarPensamiento = (e) => {
    e.preventDefault();
    pensamientosServices.deleteById(id, user).then((res) => {
      console.log(res);
      setLoadingPensamientos(true);
    });
  };
  return (
    <Pensamiento key={id}>
      <Quote texto={texto} autor={autor} />
      {isLoggedIn && (
        <>
          <hr />
          <Button bg="none" width="full" onClick={handleEliminarPensamiento}>
            ELIMINAR
          </Button>
        </>
      )}
    </Pensamiento>
  );
};

const Contenedor = styled.aside`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  > h2 {
    margin: 8px 0;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }
  > p {
    margin: 0;
  }
  @media (max-width: 1023px) {
    display: none;
  }

  h4 {
    text-align: center;
    margin-top: 4px;
  }
`;
