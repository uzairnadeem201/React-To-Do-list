import "./styles.css";
import { Edit } from "lucide-react";

const ToDoItem = () => {
  return (
    <div className="todoitem">
      <div className="todoitem__text">
        <h3>Title</h3>
      </div>
      <div className="todoitem__footer">
        <p className="p">May 19, 2025</p>
        <button className="todoitem__footer__button">
          <Edit className="w-5 h-5 hover:text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
