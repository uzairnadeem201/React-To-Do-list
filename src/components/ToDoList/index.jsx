import "./styles.css";
import ToDoItem from "../ToDoItem";

const ToDoList = () => {
  return (
    <div className="todolist">
      <h1>Notes</h1>
      <div className="todolist__items">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
};

export default ToDoList;
