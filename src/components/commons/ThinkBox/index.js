import React from "react";
import {TextBox} from "../TextBox";
import styled from "styled-components";


export const ThinkBox = ({toggle}) => {
    return(
        <Box>
            <header>
                <h3>Encantado de conocerte 🤗</h3>
                <button onClick={toggle}>X</button>
            </header>
            <hr/>
            <main>
                <TextBox placeholder="Deja aquí tu mensaje"/>
            </main>
        </Box>
    )
}

export const Box = styled.div`
  margin: 8px 16px;
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 500px;
  border-radius: 16px;
  
  >header {
    margin: 0;
    padding: 24px;
    display: flex;
    align-items: center;
    
    >h3 {
      margin: 0;
    }
    
    >button {
      margin-left: auto;
      width: fit-content;
      height: fit-content;
      background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
  
  >main{
    margin: 0;
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
`;