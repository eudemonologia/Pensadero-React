import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import { ThinkCard } from "../../../commons/ThinkCard";

export const About = ({ isLoggedIn }) => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      process.env.REACT_APP_API_URL + "/api/publicaciones/categorias/3"
    ).then((res) => {
      setArticulos(res.data);
      setLoading(false);
    });
  }, [setArticulos, loading]);

  if (loading) {
    return (
      <ThinkCard
        articulo={{
          titulo: "Cargando...",
          contenido: "Trayendo la mejor información sobre mí...",
        }}
      />
    );
  } else {
    return (
      <Contenedor>
        {articulos.map((articulo) => (
          <div key={articulo.id}>
            <ThinkCard
              idCategoria="2"
              isLoggedIn={isLoggedIn}
              loading={loading}
              setLoading={setLoading}
              articulo={articulo}
            />
            <hr />
          </div>
        ))}
      </Contenedor>
    );
  }
};

const Contenedor = styled.section``;
