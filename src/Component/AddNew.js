import React, { useEffect, useState } from "react";

function AddNew() {
  // eslint-disable-next-line no-unused-vars
  const [task, setTask] = useState(false);

  useEffect(() => {
    getTask();
  }, []);

  function getTask() {
    fetch(`http://localhost:3000/TodoList.json`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setTask(data);
      });
  }

  function createTask() {
    let id = prompt("entrer id");
    let title = prompt("entrer un titre");
    let description = prompt("entrer une description");

    fetch(`http://localhost:3000/TodoList.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        description,
      }),
    })
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        alert(data);
        getTask();
      }, []);
  }

  function deleteTask() {
    let id = prompt("Entrer id");

    fetch(`http://localhost:3000/TodoList.json/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
        getTask();
      });
  }
  return (
    <div>
      <button className="Ajouter" onClick={createTask}>
        Ajouter
      </button>
      <button className="supprimer" onClick={deleteTask}>
        supprimer
      </button>
    </div>
  );
}

export default AddNew;
