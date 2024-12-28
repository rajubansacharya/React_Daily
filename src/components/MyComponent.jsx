import React, { useState } from "react";


function MyComponent() {
  const [addList, setAddList] = useState([]);
  const [enteredData, setEnteredData] = useState("");

  function addDataInList() {
    if (enteredData.trim()) {
      setAddList([...addList, enteredData]);
      setEnteredData("");
    }
  }

  function enterdDataField(event) {
    setEnteredData(event.target.value);
  }

  function deleteEnteredData(index) {
    setAddList(addList.filter((_, i) => i !== index));
  }

  return (
    <div className="todo-container">
      <h1 className="todo-header">TO-DO LIST</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          placeholder="Enter your task here"
          value={enteredData}
          onChange={enterdDataField}
        />
        <button className="todo-add-button" onClick={addDataInList}>
          Add
        </button>
      </div>
      <div className="todo-list-container">
        {addList.map((item, index) => (
          <div className="todo-item" key={index}>
            <span className="todo-task">{item}</span>
            <button
              className="todo-delete-button"
              onClick={() => deleteEnteredData(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
