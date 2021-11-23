import styled from "styled-components";

export const Contenedor = styled.main`
  display: flex;
  flex-direction: column;
  width: 598px;
  border-right: 1px solid rgba(100, 100, 100, 0.4);
  overflow-y: scroll;

  > header {
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

  p {
    margin: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  input {
    min-height: 24px;
    padding: 8px 16px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    font-family: var(--primaryFont);
    color: var(--primaryColor);
    overflow: hidden;
    outline: none;
    margin: 8px 16px;
    border-radius: 8px;
  }

  sub {
    margin: 0 16px 16px;
    font-family: var(--primaryFont);
  }
`;