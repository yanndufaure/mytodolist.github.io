import React, { useState } from "react";

function TemplateTask(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const checked = () => {
    if (setIsChecked(!isChecked)) {
      return <p className="result1">Fait</p>;
    } else {
      <p className="result2">Pas encore fait</p>;
    }
  };

  return (
    <div>
      <div className="label" key={"id"}>
        <input
          id="todo"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        {props.my_input.title}
        {checked}
      </div>
    </div>
  );
}

export default TemplateTask;
