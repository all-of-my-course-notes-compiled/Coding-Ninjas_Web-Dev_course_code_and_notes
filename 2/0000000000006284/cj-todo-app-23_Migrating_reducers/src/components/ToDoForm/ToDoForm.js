import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../../redux/actions/todoActions";

import styles from "./ToDoForm.module.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(addTodo(todoText));
  };

  return (
    <div className={styles.container}>
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;