import styled from "styled-components";

export const Contenedor = styled.section`
  margin: 16px 16px;
  display: flex;
  gap: 8px;
  box-sizing: border-box;
  > article {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;

    > p {
      margin: 0;
    }

    > img {
      width: 100%;
      border-radius: 16px;
    }
    > cite {
      font-size: 12px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
  > h4 {
    margin: 0;
    font-size: 1.5rem;
  }
  > div {
    display: flex;
    gap: 4px;
    align-items: center;
    > h5 {
      margin: 0;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: var(--primaryColor);
    }
    > time {
      margin-left: auto;
    }
  }
`;

export const IconBar = styled.footer`
  display: flex;
  gap: 24px;
`;

export const CountBox = styled.div`
  display: flex;
  gap: 8px;

  > p {
    margin: 0;
  }
`;

export const AdminBarBox = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
  > p {
    margin: 0;
  }
`;
