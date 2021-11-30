import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchBar } from "../../commons/SearchBar";
import { Pensamiento } from "../../containers/Pensamiento";
import Axios from "axios";
import { Quote } from "../../commons/Quote";
import { Button } from "../../basics/Button";
import { Formulario } from "../../containers/Formulario";
import { Input } from "../../basics/Input";
import { Textarea } from "../../basics/Textarea";

export const Thinks = ({ isLoggedIn }) => {
  const [pensamientos, setPensamientos] = useState([]);
  const [loadingPensamientos, setLoadingPensamientos] = useState(true);

  useEffect(() => {
    try {
      Axios.get(
        process.env.REACT_APP_API_URL + "/api/pensamientos/aleatorios"
      ).then((res) => {
        if (res.data.length > 0) {
          setPensamientos(res.data);
          setLoadingPensamientos(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [loadingPensamientos, setLoadingPensamientos]);

  const handleSubmitPensamiento = (e) => {
    e.preventDefault();
    const data = {
      texto: e.target.texto.value,
    };
    if (e.target.autor.value > 0) {
      data.autor = e.target.autor.value;
    }
    Axios.post(
      process.env.REACT_APP_API_URL + "/api/pensamientos/crear",
      data
    ).then(() => {
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
          <p>Cargando pensamientos...</p>
        </Pensamiento>
      ) : (
        pensamientos.map((pensamiento) => (
          <Pensamiento key={pensamiento.id}>
            <Quote texto={pensamiento.texto} autor={pensamiento.autor} />
            {isLoggedIn && (
              <>
                <hr />
                <Button
                  bg="none"
                  width="full"
                  onClick={() => {
                    Axios.delete(
                      `${process.env.REACT_APP_API_URL}/api/pensamientos/id/${pensamiento.id}`
                    );
                    setLoadingPensamientos(true);
                  }}
                >
                  ELIMINAR
                </Button>
              </>
            )}
          </Pensamiento>
        ))
      )}
      <Pensamiento>
        <Button width="full" bg="none" onClick={handleMasPensamientos}>
          + PENSAMIENTOS
        </Button>
      </Pensamiento>
    </Contenedor>
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
