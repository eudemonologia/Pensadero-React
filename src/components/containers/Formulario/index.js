import styled from "styled-components";

export const Formulario = ({ size, children, action, method, onSubmit }) => {
  return (
    <Contenedor size={size} action={action} method={method} onSubmit={onSubmit}>
      {children}
    </Contenedor>
  );
};

const Contenedor = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  min-width: 200px;
  margin: ${({ size }) => (size === "page" ? "16px" : "")};

  > button {
    margin-top: 1rem;
  }
`;
