import styled from "styled-components";

export const Contenedor = styled.form`
  display: flex;
  gap: 8px;
  background-color: var(--secundaryColor);
  padding: 8px 16px;
  border-radius: 9999px;
  >input{
    background-color: inherit;
    border: none;
    color: white;
    outline: none;
    font-size: 0.75rem;
  }
`;