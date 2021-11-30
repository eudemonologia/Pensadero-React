import styled from "styled-components";

export const Textarea = ({
  size,
  label,
  name,
  id,
  placeholder,
  defaultValue,
}) => {
  let heightInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <Contenedor size={size}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        onInput={heightInput}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></textarea>
    </Contenedor>
  );
};

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > label {
    ${({ size }) => {
      switch (size) {
        case "modal":
          return ``;
        case "page":
        default:
          return `
            font-weight: bold;
            font-size: 1.2rem;
            `;
      }
    }}
  }
  > textarea {
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
`;
