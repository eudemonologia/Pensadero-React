import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { ThinkCard } from "../../../commons/ThinkCard";

export const Wall = ({ isLoggedIn }) => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/publicaciones/categorias/1").then(
      (res) => {
        setArticulos(res.data);
        setLoading(false);
      }
    );
  }, [setArticulos, loading]);

  if (loading) {
    return (
      <ThinkCard
        articulo={{
          titulo: "Cargando...",
          contenido: "Trayendo los mejores artículos del mundo...",
        }}
      />
    );
  } else {
    return (
      <Contenedor>
        {articulos.map((articulo) => (
          <div key={articulo.id}>
            <ThinkCard
              idCategoria="1"
              isLoggedIn={isLoggedIn}
              loading={loading}
              setLoading={setLoading}
              articulo={articulo}
              cabecera
              autoria
              interacciones
            />
            <hr />
          </div>
        ))}
      </Contenedor>
    );
  }
};

const Contenedor = styled.section``;
