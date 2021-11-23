import styled from "styled-components";

export const Contenedor = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 16px;
  min-width: 200px;
  >label {
    display: flex;
    flex-direction: column;
    gap: 8px;
      >input {
        background-color: inherit;
        border: none;
        font-weight: bold;
        font-size: 1rem;
        font-family: var(--primaryFont);
        color: white;
        overflow: hidden;
        outline: none;
      }
      >textarea {
        background-color: inherit;
        min-height: 5rem;
        border: none;
        font-weight: bold;
        font-family: var(--primaryFont);
        font-size: 1rem;
        resize: none;
        color: white;
        overflow: hidden;
        outline: none;
      }
  }
  
  >button {
    align-self: flex-end;
  }
`;