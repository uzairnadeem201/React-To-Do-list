import "./styles.css";
import ToDoItem from "../ToDoItem";
import { useToDoContext } from "../../Provider";
import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../../redux/selector"; 

const ToDoList = () => {
  const tasks = useSelector(selectFilteredTasks)

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
