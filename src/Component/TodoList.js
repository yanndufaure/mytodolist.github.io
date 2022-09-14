import React from "react";
import TemplateTask from "./TemplateTask";
import task from "./Task.json";
import AddNew from "./AddNew";

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
      <div className="todo_list" key={task["id"]}>
        {task["task"].map((tasks) => (
          <TemplateTask my_input={tasks} />
        ))}
      </div>
      <AddNew />
    </div>
  );
}

export default TodoList;
