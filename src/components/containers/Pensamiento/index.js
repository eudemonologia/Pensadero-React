import styled from "styled-components";

export const Pensamiento = ({ children }) => {
  return <Contenedor>{children}</Contenedor>;
};

const Contenedor = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--secundaryColor);
`;
