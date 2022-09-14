import React, { useState } from "react";
import Modal from "react-modal";
import task from "./Task.json";
import "./TodoList.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function TemplateTask(props) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const checked = () => {
    if (isChecked !== true) {
      return <p>Pas encore fait</p>;
    }
    if (isChecked === true) {
      return <p>Fait</p>;
    }
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="todos" key={task.id}>
        <input
          id="todo"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        {props.my_input.title}
        {checked()}
        <div>
          <button className="btnCloseModal" onClick={openModal}>
            Information
          </button>
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <h2 key={"title"}>{props.my_input.title}</h2>
            <form>{props.my_input.description}</form>
            <button className="btnCloseModal" onClick={closeModal}>
              Fermer
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TemplateTask;
