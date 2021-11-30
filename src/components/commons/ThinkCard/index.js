import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../../basics/Button";
import { Botonera } from "../../containers/Botonera";
import { Modal } from "../../layout/Modal";
import { Formulario } from "../../containers/Formulario";
import { Input } from "../../basics/Input";
import { Textarea } from "../../basics/Textarea";
import { Contenedor, CountBox, Header, IconBar, AdminBarBox } from "./style";

export const ThinkCard = ({
  idCategoria,
  setArticulos,
  isLoggedIn,
  loading,
  setLoading,
  articulo,
  cabecera,
  autoria,
  interacciones,
}) => {
  const [autor, setAutor] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (autoria) {
      Axios.get(
        "http://localhost:3000/api/usuarios/id/" + articulo.id_usuario
      ).then((res) => {
        setAutor(res.data);
      });
    }
  }, [autoria, articulo.id_usuario, loading]);

  useEffect(() => {
    if (cabecera) {
      Axios.get(
        "http://localhost:3000/api/publicaciones/id/" + articulo.id + "/tags"
      ).then((res) => {
        setTags(res.data);
      });
    }
  }, [cabecera, articulo.id, loading]);

  return (
    <Contenedor>
      <article>
        <Titulos
          cabecera={cabecera}
          tags={tags}
          titulo={articulo.titulo}
          fecha={articulo.fecha_creacion}
        />
        <p dangerouslySetInnerHTML={{ __html: articulo.contenido }}></p>
        {articulo.imagen && <img src={articulo.imagen} alt={articulo.titulo} />}
        {autoria && <cite>{autor.nombre + " " + autor.apellido}</cite>}
        {articulo.likes >= 0 && (
          <ButtonBar
            idCategoria={idCategoria}
            tags={tags}
            interacciones={interacciones}
            id={articulo.id}
            likes={articulo.likes}
            shares={articulo.shares}
            isLoggedIn={isLoggedIn}
            setLoading={setLoading}
            articulo={articulo}
            setArticulos={setArticulos}
          />
        )}
      </article>
    </Contenedor>
  );
};

export const Titulos = ({ cabecera, tags, titulo, fecha }) => {
  return (
    <Header>
      {cabecera && (
        <div>
          {tags.length > 0 &&
            tags.map((tag) => <h5 key={tag.id}>{tag.nombre}</h5>)}
          <time dateTime={fecha}>{fecha.substr(0, 10)}</time>
        </div>
      )}
      <h4>{titulo}</h4>
    </Header>
  );
};

export const ButtonBar = ({
  idCategoria,
  tags,
  articulo,
  interacciones,
  setArticulos,
  setLoading,
  isLoggedIn,
  id,
  likes,
  shares,
}) => {
  const [actualLikes, setActualLikes] = useState(likes);
  const [actualshares, setActualShares] = useState(shares);

  const hadleLikes = () => {
    Axios.get(
      "http://localhost:3000/api/publicaciones/id/" + id + "/sumarlikes"
    ).then((res) => {
      setActualLikes(res.data.likes);
    });
  };

  const hadleShares = () => {
    setActualShares(actualshares + 1);
  };

  return (
    <IconBar>
      {interacciones && (
        <>
          <Contador type="like" count={actualLikes} onClick={hadleLikes} />
          <Contador type="share" count={actualshares} onClick={hadleShares} />
        </>
      )}
      {isLoggedIn && (
        <AdminBar
          idCategoria={idCategoria}
          id={id}
          tags={tags}
          articulo={articulo}
          setArticulos={setArticulos}
          setLoading={setLoading}
        />
      )}
    </IconBar>
  );
};

export const Contador = ({ type, count, onClick }) => {
  const [clickeable, setClickeable] = useState(true);
  const [icon, setIcon] = useState("");
  const hadleClick = (e) => {
    if (clickeable) {
      onClick();
      if (type === "like") {
        setClickeable(false);
        setIcon(icon + "-fill");
      }
    }
  };

  useEffect(() => {
    if (type === "like") {
      setIcon("bi bi-heart");
    } else if (type === "share") {
      setIcon("bi bi-share");
    }
  }, [type]);

  return (
    <CountBox onClick={hadleClick}>
      <i className={icon}></i>
      <p>{count}</p>
    </CountBox>
  );
};

export const AdminBar = ({ idCategoria, tags, articulo, setLoading, id }) => {
  const [activeModalEliminar, setActiveModalEliminar] = useState(false);
  const [activeModalModificar, setActiveModalModificar] = useState(false);

  const toggleModalEliminar = () => {
    setActiveModalEliminar(!activeModalEliminar);
  };

  const toggleModalModificar = () => {
    setActiveModalModificar(!activeModalModificar);
  };

  const handleEliminar = () => {
    try {
      Axios.get(
        "http://localhost:3000/api/publicaciones/id/" + id + "/eliminar"
      ).then((res) => {
        console.log(res);
        toggleModalEliminar();
        Axios.get(
          "http://localhost:3000/api/publicaciones/categorias/" + idCategoria
        ).then((res) => {
          setLoading(true);
          setLoading(false);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitModificar = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("titulo", e.target.titulo.value);
    data.append("contenido", e.target.contenido.value);
    if (e.target.imagen.files[0]) {
      data.append("imagen", e.target.imagen.files[0]);
      console.log(data.get("imagen"));
    }
    try {
      Axios.post(
        "http://localhost:3000/api/publicaciones/id/" + id + "/modificar",
        data,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      ).then((res) => {
        if (!res.data.error) {
          console.log(res.data);
          Axios.delete(
            "http://localhost:3000/api/publicaciones/id/" + id + "/tags"
          ).then((res) => {
            console.log(res.data);
            Axios.post(
              "http://localhost:3000/api/publicaciones/id/" + id + "/tags",
              {
                tags: e.target.tags.value.split(", "),
              }
            ).then((res) => {
              console.log(res.data);
              setLoading(true);
              setLoading(false);
            });
          });
        } else if (res.data.error) {
          alert(res.data.error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminBarBox>
      <Button width="fit" bg="none" onClick={toggleModalEliminar}>
        Eliminar
      </Button>
      <Modal
        titulo="Eliminar publicación"
        active={activeModalEliminar}
        toggle={toggleModalEliminar}
      >
        <p>¿Está seguro que quiere eliminar esta publicacion?</p>
        <Botonera justify="flex-end">
          <Button width="fit" onClick={handleEliminar}>
            Eliminar
          </Button>
          <Button width="fit" bg="outlined" onClick={toggleModalEliminar}>
            Cancelar
          </Button>
        </Botonera>
      </Modal>
      <Button width="fit" bg="none" onClick={toggleModalModificar}>
        Modificar
      </Button>
      <Modal
        titulo="Modificar publicación"
        active={activeModalModificar}
        toggle={toggleModalModificar}
      >
        <Formulario
          action="http://localhost:3000/api/publicaciones/crear"
          method="post"
          onSubmit={handleSubmitModificar}
        >
          <Input
            size="modal"
            label="Titulo:"
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Escribe aquí el título"
            defaultValue={articulo.titulo}
          />
          <Input
            size="modal"
            label="Tags: "
            type="text"
            name="tags"
            id="tags"
            placeholder="Escribe aquí los tags (Ej: Tag1, Tag2, Tag3)"
            defaultValue={tags.map((tag) => tag.nombre).join(", ")}
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
            onChange
            defaultValue={articulo.contenido}
          ></Textarea>
          <Button size="big" type="submit">
            Actualizar
          </Button>
        </Formulario>
      </Modal>
    </AdminBarBox>
  );
};
