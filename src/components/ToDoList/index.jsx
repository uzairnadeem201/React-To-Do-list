import "./styles.css";
import ToDoItem from "../ToDoItem";
import { useToDoContext } from "../../Providers";

const ToDoList = () => {
  const tasks = useToDoContext().tasks;

  return (
    <div className="todolist">
      <h1>Notes</h1>
      <div className="todolist__items">
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
