import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { usuariosServices } from "../../../../services/usuarios";
import { Button } from "../../../basics/Button";
import { Input } from "../../../basics/Input";
import { Textarea } from "../../../basics/Textarea";
import { Formulario } from "../../../containers/Formulario";
import { Select } from "../../../basics/Select";
import { ThinkCard } from "../../../commons/ThinkCard";
import { Chip } from "../../../basics/Chip";
import { Botonera } from "../../../containers/Botonera";
import { Modal } from "../../Modal";
import { publicacionesServices } from "../../../../services/publicaciones";
import { categoriasServices } from "../../../../services/categorias";
import { tagsServices } from "../../../../services/tags";

export const Admin = ({ isLoggedIn, setIsLoggedIn, user, setUser }) => {
  const [categorias, setCategorias] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    usuariosServices
      .postConectar(e.target.email.value, e.target.password.value)
      .then((res) => {
        console.log(res);
        setError("");
        localStorage.setItem("user_web_up_token", JSON.stringify(res.data));
        setUser(res.data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setError("Usuario o contraseña incorrectos");
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  const handleSubmitPublicar = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("id_usuario", user.id);
    data.append("id_categoria", e.target.categoria.value);
    data.append("titulo", e.target.titulo.value);
    data.append("contenido", e.target.contenido.value);
    data.append("status", 1);

    if (e.target.imagen.files[0]) {
      data.append("imagen", e.target.imagen.files[0]);
    }

    publicacionesServices
      .postPublicacion(data, e.target.tags.value, user)
      .then((res) => {
        setTimeout(() => {
          history.push("/");
        }, 500);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      categoriasServices.getAll().then((res) => {
        setCategorias(res);
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      tagsServices.getAll().then((res) => {
        setTags(res);
        setLoadingTags(false);
      });
    }
  }, [isLoggedIn, tags]);

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
              <Tag
                key={tag.id}
                tag={tag}
                setLoadingTags={setLoadingTags}
                user={user}
              />
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

const Tag = ({ tag, setLoadingTags, user }) => {
  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = () => {
    setActiveModal(!activeModal);
  };

  const handleEliminarTag = (e) => {
    e.preventDefault();
    tagsServices.deleteTagById(tag.id, user).then((res) => {
      console.log(res);
      setLoadingTags(true);
    });
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
