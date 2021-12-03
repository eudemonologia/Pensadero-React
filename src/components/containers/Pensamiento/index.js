import styled from "styled-components";

export const Pensamiento = ({ children, onClick }) => {
  return <Contenedor onClick={onClick}>{children}</Contenedor>;
};

const Contenedor = styled.div`
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: var(--secundaryColor);
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;
