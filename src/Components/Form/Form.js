import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADDARTICLE",
      payload: article,
    });

    setArticle({
      title:"",
      body:""
    })
  };

  const handleInput = (e) => {
    if (e.target.classList.contains("inp-title")) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    } else if (e.target.classList.contains("inp-body")) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    }
  };
  console.log(article);

  return (
    <form onSubmit={handleForm}>
      <div className="form-group mx-sm-5 mb-2">
        <h1>Ecrire un article</h1>

        <label htmlFor="title">Titre</label>
        <input
          onInput={handleInput}
          value={article.title}
          type="text"
          id="title"
          className="form-control inp-title"
          placeholder="Entrez votre nom"
        />
      </div>
      <div className="form-group mx-sm-5 mb-2">
        <label htmlFor="article">Votre article</label>
        <textarea
          onInput={handleInput}
          value={article.body}
          id="article"
          placeholder="Votre article"
          className="form-control inp-body"
        />
      </div>
      <div className="form-check">
        <button className="btn btn-primary">Envoyer l'article</button>
      </div>
    </form>
  );
}
