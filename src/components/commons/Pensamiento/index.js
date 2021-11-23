import { Contenedor } from "./style";

function Pensamiento({ pensamiento }) {
  return (
    <Contenedor>
      <blockquote>{'"' + pensamiento.texto + '"'}</blockquote>
      <figcaption>{pensamiento.autor}</figcaption>
    </Contenedor>
  );
}

export default Pensamiento;
