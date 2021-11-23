import styled from "styled-components";

export const Contenedor = styled.button`
  background-color: var(--primaryColor);
  border: none;
  color: white;
  font-size: ${props => props.size === "big"? "1rem": "0.75rem"};
  font-weight: ${props => props.size === "big"? "700": "400"};
  text-transform: uppercase;
  letter-spacing: 2px;
  height: ${props => {
      switch (props.size){
        case "big":
            return "48px";
        case "medium":
            return "40px";
        default: return "32px"
      }
  }};
  padding: 0 32px;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;