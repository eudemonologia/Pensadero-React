import styled from "styled-components";

export const Input = ({
  label,
  type,
  name,
  id,
  placeholder,
  defaultValue,
  size,
  onKeyDown,
  onChange,
  required,
}) => {
  return (
    <Contenedor size={size}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        size={size}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onKeyDown={onKeyDown}
        onChange={onChange}
        required={required}
      />
    </Contenedor>
  );
};

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${({ size }) => {
    switch (size) {
      case "modal":
        return ``;
      case "page":
      default:
        return ``;
    }
  }}
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
  > input {
    border: none;
    outline: none;
    overflow: hidden;
    font-weight: bold;
    font-size: 1rem;
    font-family: var(--primaryFont);
    ${({ size }) => {
      switch (size) {
        case "modal":
          return `
            background-color: inherit;
            color: white;
        `;
        case "page":
        default:
          return `
            min-height: 24px;
            padding: 8px 16px;
            color: var(--primaryColor);
            border-radius: 8px;
          `;
      }
    }}
  }
`;
