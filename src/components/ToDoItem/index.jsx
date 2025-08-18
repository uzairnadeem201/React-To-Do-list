import "./styles.css";
import { useState, useContext } from "react";
import { Edit, Save } from "lucide-react";
import { useToDoContext } from "../../Provider";

const ToDoItem = ({ task }) => {
  const { editTask } = useToDoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      //call the editTask function to update the task
      editTask(task, newText);
      setIsEditing(false);
    } else if (e.key === "Escape") {
      // If the user presses Escape, revert to the original text
      setIsEditing(false);
    }
  };
  const handleSaveClick = () => {
    // Call the editTask function to update the task
    editTask(task, newText);
    setIsEditing(false);
  }

  return (
    <div className="todoitem" style={{ backgroundColor: task.color }}>
      <div className="todoitem__text">
        {isEditing ? (
          <input
            className="todoitem__input"
            type="text"
            value={newText}
            autoFocus
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <h3>{task.text}</h3>
        )}
      </div>
      <div className="todoitem__footer">
        <p className="p">{task.createdAt.toLocaleDateString()}</p>
        {isEditing ? (
          <button
            className="todoitem__footer__button"
            onClick={handleSaveClick}
          >
            <Save className="w-5 h-5 hover:text-blue-500" />
          </button>
        ) : (
          <button
            className="todoitem__footer__button"
            onClick={() => setIsEditing(true)}
          >
            <Edit className="w-5 h-5 hover:text-blue-500" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
