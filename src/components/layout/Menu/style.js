import styled from "styled-components";

export const Contenedor = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-right: 1px solid rgba(100,100,100, 0.4); 
  >img {
    margin-top: 16px;
    border-radius: 50%;
    height: 130px;
    width: 130px;
  }
  
  >h1 {
    margin: 8px 0;
    letter-spacing: 2px;
    font-size: 2rem;
    transition: color 100ms ease-in-out;
    
    &:hover {
      color: var(--primaryColor);
    } 
  }
  
  >p {
    margin: 0;
    font-family: var(--secundaryFont);
    font-size: 1.15rem;
    &:hover {
      color: var(--primaryColor);
    }
  }
  
  @media (max-width: 767px){
    display: none;
  }
`;

export const Item = styled.li`
  
  >a {
    color: inherit;
    font-weight: inherit;
    font-size: 1rem;
    text-decoration: none;
    letter-spacing: 2px;
    display: flex;
    gap: 16px;
    padding: 16px 24px;
    cursor: pointer;
    transition: color 100ms ease-in;
    >p {
      margin: 0;
    }
  }
  
  &:hover {
    width: fit-content;
    background-color: var(--primaryColorHover);
    color: white;
    border-radius: 9999px;
  }
  
  >.active{
      width: fit-content;
      background-color: var(--primaryColorHover);
      color: white;
      font-weight: bold;
      border-radius: 9999px;
    }
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px 0;
  list-style: none;
  padding: 0;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center; 
  margin-top: auto;
  padding: 8px 16px;
`;