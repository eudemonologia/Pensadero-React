import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Axios from "axios";
import { Button } from "../../../basics/Button";
import { Input } from "../../../basics/Input";
import { Textarea } from "../../../basics/Textarea";
import { Formulario } from "../../../containers/Formulario";
import { Select } from "../../../basics/Select";
import { ThinkCard } from "../../../commons/ThinkCard";
import { Chip } from "../../../basics/Chip";
import { Botonera } from "../../../containers/Botonera";
import { Modal } from "../../Modal";

Axios.defaults.withCredentials = true;

export const Admin = ({ isLoggedIn, setSession, userId, setUserId }) => {
  const [categorias, setCategorias] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    Axios.post(
      process.env.REACT_APP_API_URL + "/api/usuarios/conectar",
      {
        email: e.target.email.value,
        password: e.target.password.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (!res.data.error) {
        setError("");
        setUserId(0);
        setUserId(res.data.id);
      } else {
        setError(res.data.error);
      }
    });
  };

  const handleSubmitPublicar = (e) => {
    e.preventDefault();
    try {
      let data = new FormData();
      data.append("id_usuario", userId);
      data.append("id_categoria", e.target.categoria.value);
      data.append("titulo", e.target.titulo.value);
      data.append("contenido", e.target.contenido.value);
      data.append("status", 1);
      if (e.target.imagen.files[0]) {
        data.append("imagen", e.target.imagen.files[0]);
      }

      Axios.post(
        process.env.REACT_APP_API_URL + "/api/publicaciones/crear",
        data,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      ).then((res) => {
        if (!res.data.error) {
          if (e.target.tags.value !== "") {
            let nuevosTags = e.target.tags.value.split(", ");
            try {
              Axios.post(
                process.env.REACT_APP_API_URL +
                  "/api/publicaciones/id/" +
                  res.data.insertId +
                  "/tags",
                {
                  tags: nuevosTags,
                }
              ).then((res) => {
                console.log(res.data);
                history.push("/");
              });
            } catch (error) {
              console.log(error);
            }
          }
          history.push("/");
        }
      });
    } catch (error) {
      console.log(error);
      alert("Error al publicar");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      Axios.get(process.env.REACT_APP_API_URL + "/api/categorias").then(
        (res) => {
          setCategorias(res.data);
        }
      );
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      try {
        Axios.get(process.env.REACT_APP_API_URL + "/api/tags").then((res) => {
          setTags(res.data);
          setLoadingTags(false);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [isLoggedIn, userId, loadingTags]);

  if (isLoggedIn) {
    return (
      <Contenedor>
        <h3>Nueva Publicación</h3>
        <Formulario size="page" onSubmit={handleSubmitPublicar}>
          <Input
            size="modal"
            label="Titulo:"
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Escribe aquí el título"
            required
          />
          <Select
            size="modal"
            label="Categoria:"
            name="categoria"
            id="categoria"
            list={categorias}
          />
          <Input
            size="modal"
            label="Tags: "
            type="text"
            name="tags"
            id="tags"
            placeholder="Escribe aquí los tags (Ej: Tag1, Tag2, Tag3)"
          />
          <Input
            size="modal"
            label="Imagen:"
            type="file"
            name="imagen"
            id="imagen"
          />
          <Textarea
            size="modal"
            label="Contenido: "
            name="contenido"
            id="contenido"
            placeholder="Escribe aquí tu contenido"
            required
          ></Textarea>
          <Button size="big" type="submit">
            Publicar
          </Button>
        </Formulario>
        <hr />
        <ThinkCard
          articulo={{
            titulo: "Tags",
            contenido: "Todos los tags utilizados",
          }}
        />
        <Botonera margin="page" justify="center">
          {loadingTags ? (
            <div>Cargando...</div>
          ) : (
            tags.map((tag) => (
              <Tag key={tag.id} tag={tag} setLoadingTags={setLoadingTags} />
            ))
          )}
        </Botonera>
      </Contenedor>
    );
  } else {
    return (
      <Contenedor>
        <Formulario size="page" onSubmit={handleSubmitLogin}>
          <Input
            label="Tu correo:"
            type="email"
            name="email"
            placeholder="tunombre@tucorreo.com"
            required
          />
          <Input
            label="Tu contraseña:"
            type="password"
            name="password"
            placeholder="******"
            required
          />
          <Button size="big" type="submit">
            Iniciar Sesión
          </Button>
          {error !== "" ? <p>{error}</p> : null}
        </Formulario>
      </Contenedor>
    );
  }
};

const Tag = ({ tag, setLoadingTags }) => {
  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = () => {
    setActiveModal(!activeModal);
  };

  const handleEliminarTag = (e) => {
    e.preventDefault();
    Axios.delete(process.env.REACT_APP_API_URL + "/api/tags/id/" + tag.id).then(
      (res) => {
        if (!res.data.error) {
          console.log(res.data);
          setLoadingTags(true);
        } else {
          console.log(res.data);
        }
      }
    );
  };

  return (
    <Chip key={tag.id} onClick={toggleModal} close>
      {tag.nombre + " : " + tag.num_publicaciones}
      <Modal titulo="Eliminar tag" active={activeModal} toggle={toggleModal}>
        <p>¿Está seguro que quiere eliminar esta publicacion?</p>
        <Botonera justify="flex-end">
          <Button width="fit" onClick={handleEliminarTag}>
            Eliminar
          </Button>
          <Button width="fit" bg="outlined" onClick={toggleModal}>
            Cancelar
          </Button>
        </Botonera>
      </Modal>
    </Chip>
  );
};

const Contenedor = styled.section`
  h3 {
    text-align: center;
  }
`;
