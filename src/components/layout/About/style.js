import styled from "styled-components";

export const Contenedor = styled.main`
  display: flex;
  flex-direction: column;
  width: 598px;
  border-right: 1px solid rgba(100,100,100, 0.4);
  overflow-y: scroll;

  >header{
    background-color: black;
    position: sticky;
    top: 0;
  }

  h2 {
    margin: 8px 16px;
    letter-spacing: 2px;
    font-size: 1.5rem;
    box-sizing: border-box;
  }
    
  hr {
    border: none;
    border-top: 1px solid rgba(100,100,100, 0.4);
    width: 100%;
    margin: 0;
  }
  p {
    margin: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;