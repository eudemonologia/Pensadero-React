import { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Botonera } from "../Botonera";

export const MainPage = ({ userId, setIsLoggedIn, titulo, children }) => {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };

  useEffect(() => {
    Axios.get(
      process.env.REACT_APP_API_URL +
        "/api/usuarios/id/" +
        userId +
        "/isconnected",
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    ).then((res) => {
      setIsLoggedIn(res.data);
      console.log("Esta conectado: " + res.data);
    });
  }, [setIsLoggedIn, userId]);

  return (
    <Contenedor>
      <header>
        <div>
          <h2>{titulo}</h2>
          <i onClick={handleMenuMobile} className="bi bi-list"></i>
        </div>
        {menuMobile && (
          <>
            <hr />
            <ul>
              <li>
                <NavLink
                  onClick={handleMenuMobile}
                  exact
                  to="/"
                  activeClassName="active"
                >
                  <i className="bi bi-house-door-fill"></i>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleMenuMobile}
                  exact
                  to="/porfolio"
                  activeClassName="active"
                >
                  <i className="bi bi-laptop-fill"></i>
                  Porfolio
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleMenuMobile} exact to="/secretos">
                  <i className="bi bi-eye-fill"></i>
                  Secretos
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleMenuMobile} exact to="/sobre-mi">
                  <i className="bi bi-person-fill"></i>
                  Sobre mí
                </NavLink>
              </li>
            </ul>
            <Botonera gap="16px" justify="center">
              <a href="https://www.linkedin.com/in/cristiangongora/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/tecnoaforismos">
                <i className="bi bi-twitter"></i>
              </a>
            </Botonera>
            <p>Todos los derechos reservados.</p>
          </>
        )}
        <hr />
      </header>
      {children}
    </Contenedor>
  );
};

const Contenedor = styled.main`
  display: flex;
  flex-direction: column;
  width: 598px;
  border-right: 1px solid rgba(100, 100, 100, 0.4);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  > header {
    background-color: black;
    position: sticky;
    top: 0;

    > div {
      display: flex;
      > i {
        margin: 8px 16px 8px auto;
        font-size: 24px;
        cursor: pointer;
        @media (min-width: 764px) {
          display: none;
        }
      }
      > h2 {
        margin: 8px 16px;
        letter-spacing: 2px;
        font-size: 1.5rem;
        box-sizing: border-box;
      }
    }
    > ul {
      margin: 16px 32px;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
      > li {
        display: flex;
        justify-content: center;
        list-style: none;
        > a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          > i {
            margin-right: 16px;
          }
        }
        > .active {
          color: var(--primaryColor);
          font-weight: bold;
        }
      }
    }
    > p {
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;
