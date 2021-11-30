import styled from "styled-components";

export const Button = ({ width, size, flex, bg, children, type, onClick }) => {
  return (
    <Contenedor
      width={width}
      size={size}
      flex={flex}
      bg={bg}
      type={type}
      onClick={onClick}
    >
      {children}
    </Contenedor>
  );
};

const Contenedor = styled.button`
  color: white;
  font-size: ${({ size }) => (size === "big" ? "1rem" : "0.75rem")};
  font-weight: ${({ size }) => (size === "big" ? "700" : "400")};
  text-transform: uppercase;

  ${({ bg }) => {
    switch (bg) {
      case "fill":
      default:
        return "background-color: var(--primaryColor); border: none;";
      case "outlined":
        return "background-color: transparent; border: 2px solid var(--primaryColor);";
      case "none":
        return "background-color: transparent; border: none;";
    }
  }}
  letter-spacing: 2px;
  height: ${({ size }) => {
    switch (size) {
      case "big":
        return "48px";
      case "medium":
        return "40px";
      default:
        return "32px";
    }
  }};
  width: ${({ width }) => {
    switch (width) {
      case "full":
        return "100%";
      case "fit":
        return "fit-content";
      default:
        return "auto";
    }
  }};
  padding: 0 32px;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  ${({ flex }) => {
    if (flex === "end") {
      return `
      align-self: flex-end;
      `;
    } else if (flex === "center") {
      return `
      align-self: center;
      `;
    } else if (flex === "start") {
      return `
      align-self: flex-start;
      `;
    }
  }}
`;
