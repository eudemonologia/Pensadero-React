import styled from "styled-components";

export const Contenedor = styled.aside`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  > h2 {
    margin: 8px 0;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }
  > p {
    margin: 0;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
