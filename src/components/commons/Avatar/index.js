import styled from "styled-components";

export const Avatar = ({ url, alt, name, userName }) => {
  return (
    <Contenedor>
      <img src={url} alt={alt} />
      <figcaption>
        <h4>{name}</h4>
        <h5>{userName}</h5>
      </figcaption>
    </Contenedor>
  );
};

const Contenedor = styled.figure`
  margin: 0;
  display: flex;
  gap: 8px;
  padding: 0;
  > img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
  > figcaption {
    > h4 {
      margin: 0;
    }

    > h5 {
      margin: 0;
      font-weight: 300;
    }
  }
`;
