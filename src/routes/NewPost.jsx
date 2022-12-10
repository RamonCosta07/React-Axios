// CSS
import "./NewPost.css";
// Axios
import blogFetch from "../axios/config";
// Hooks
import { useState } from "react";
// React Router Dom
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };
    await blogFetch.post("/posts", {
      body: post,
    });
    navigate('/');
  };

  return (
    <div className="new-post">
      <h2>Inserir Novo Post</h2>
      <form onSubmit={createPost}>
        <div className="form-control">
          <label htmlFor="title">Título </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo </label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo do Post"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Publicar" id="btn" />
      </form>
    </div>
  );
};

export default NewPost;
