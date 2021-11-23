import React from "react";
import {Contenedor, CountBox, Header, IconBar} from "./style";

export const ThinkCard = ({article}) => {
    return (
        <Contenedor>
            <article>
                <Titulos header={article.header}/>
                <Content content={article.content}/>
                {article.interactions && (
                    <ButtonBar interactions={article.interactions}/>
                )}
            </article>
        </Contenedor>
    )
}

export const Titulos = ({header}) => {
  return (
      <Header>
          <div>
              <h5>{header.tema}</h5>
              <time dateTime={header.fecha}>{header.fecha}</time>
          </div>
          <h4>{header.titulo}</h4>
      </Header>
  )
}

export const Content = ({content}) => {
    return(
        <>
            <p>{content.text}</p>
            {content.imgUrl && (
                <img src={content.imgUrl} alt={content.imgAlt}/>
            ) }
        </>
    )
}

export const ButtonBar = ({interactions}) => {
  return (
      <IconBar>
          <Contador type="like" count={interactions.likes}/>
          <Contador type="share" count={interactions.shares}/>
      </IconBar>
  )
}

export const Contador = ({type, count}) => {
    if (type === "like"){
        type = 'bi bi-heart';
    } else if (type === "share"){
        type = 'bi bi-share';
    }
  return(
      <CountBox>
          <i className={type}></i>
          <p>{count}</p>
      </CountBox>
  )
}