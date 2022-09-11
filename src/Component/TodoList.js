import React from "react";
import "./TodoList.css";

function TodoList() {
  return (
    <div className="todoApp">
      <h1 className="Title">
        Ma liste de choses à faire pour réussir un projet
      </h1>
      <h2 className="subTitle">Que dois-je faire?</h2>
      <p className="Text_subTitle">
        Voici une liste de choses à faire pour bien réussir un projet
      </p>
      <h2 id="list_heading" className="list_heading">
        tâches à faire
      </h2>
      <ul className="todo_list">
        <li className="todos">
          <label className="label">Etudier le projet avant de se lancer</label>
          <p>Fait</p>
        </li>
        <li className="todos">
          <label className="label">Effectuer des recherches</label>
          <p>Fait</p>
        </li>
        <li className="todos">
          <label className="label">Lancer le projet</label>
          <p>Fait</p>
        </li>
        <li className="todos">
          <label className="label">Effectuer des tests</label>
          <p>En cours de réalisation</p>
        </li>
        <li className="todos">
          <label className="label">Faire des commits au bon moment</label>
          <p>En cours de réalisation</p>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
