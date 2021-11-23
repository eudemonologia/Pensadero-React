import styled from "styled-components";

export const Contenedor = styled.figure`
  margin: 0;
  display: flex;
  gap: 8px;
  padding: 0;
    >img {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
  >figcaption {
    >h4 {
      margin: 0;
    }

    >h5 {
      margin: 0;
      font-weight: 300;
    }
  }
`;