import { useState, useEffect } from "react";
import styled from "styled-components";
import { ThinkCard } from "../../../commons/ThinkCard";
import { publicacionesServices } from "../../../../services/publicaciones";

export const About = ({ isLoggedIn, user }) => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      publicacionesServices.getByCategoriaId(3).then((res) => {
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
              user={user}
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
