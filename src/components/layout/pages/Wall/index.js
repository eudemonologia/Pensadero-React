import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThinkCard } from "../../../commons/ThinkCard";
import { publicacionesServices } from "../../../../services/publicaciones";

export const Wall = ({ isLoggedIn, user }) => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      publicacionesServices.getByCategoriaId(1).then((res) => {
        setArticulos(res);
        setLoading(false);
      });
    }
  }, [loading]);

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
              user={user}
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
