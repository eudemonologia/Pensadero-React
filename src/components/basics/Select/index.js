import styled from "styled-components";

export const Select = ({ size, label, id, name, list }) => {
  return (
    <Contenedor size={size}>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} name={name}>
        {list.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))}
      </select>
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

  > select {
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
    > option {
      color: black;
      font-weight: bold;
      font-size: 1rem;
      font-family: var(--primaryFont);
    }
  }
`;
