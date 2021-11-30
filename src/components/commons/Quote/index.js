import styled from "styled-components";

export const Quote = ({ texto, autor }) => {
  return (
    <Contenedor>
      <blockquote>{'"' + texto + '"'}</blockquote>
      <figcaption>{autor}</figcaption>
    </Contenedor>
  );
};

const Contenedor = styled.figure`
  margin: 0;
  > blockquote {
    margin: 0;
    font-size: 1rem;
  }

  > figcaption {
    margin: 0.5rem 0;
    text-align: right;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
