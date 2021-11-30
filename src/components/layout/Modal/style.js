import styled from "styled-components";

export const Contenedor = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  > main {
    margin: 8px 16px;
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 500px;
    border-radius: 16px;

    > header {
      margin: 0;
      padding: 24px;
      display: flex;
      align-items: center;

      > h3 {
        margin: 0;
      }

      > button {
        margin-left: auto;
        width: fit-content;
        height: fit-content;
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;
      }
    }

    > section {
      padding: 24px;
    }
  }
`;
