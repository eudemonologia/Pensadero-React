import styled from "styled-components";

export const Botonera = ({
  children,
  direction,
  justify,
  margin,
  gap,
  wrap,
}) => {
  return (
    <Contenedor
      direction={direction}
      justify={justify}
      margin={margin}
      gap={gap}
      wrap={wrap}
    >
      {children}
    </Contenedor>
  );
};

const Contenedor = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : "8px")};
  padding-top: 16px;
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "wrap")};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  margin: ${({ margin }) => (margin === "page" ? "16px" : "")};
`;
