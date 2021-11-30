import styled from "styled-components";

export const Chip = ({ children, close, onClick }) => {
  return (
    <Contenedor>
      {children}{" "}
      {close && (
        <span aria-label="button" onClick={onClick}>
          x
        </span>
      )}
    </Contenedor>
  );
};

const Contenedor = styled.h6`
  margin: 0;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: var(--primaryColor);
  min-width: fit-content;
  > span {
    cursor: pointer;
    color: var(--secondaryColor);
    font-size: 12px;
    font-weight: bold;
    padding: 0 6px 3px 6px;
    border-radius: 50%;
    margin-left: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      color: var(--primaryColor);
      background-color: white;
    }
  }
`;
