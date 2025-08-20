import "./styles.css";
import { useState } from "react";
import { Edit, Save, Calendar } from "lucide-react";
import { useToDoContext } from "../../Providers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ToDoItem = ({ task }) => {
  const { editTask } = useToDoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editTask(task, newText);
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setIsEditing(false);
    }
  };

  const handleSaveClick = () => {
    editTask(task, newText);
    setIsEditing(false);
  };

  const handleDateChange = (date) => {
    editTask(task, undefined, date);
    setShowDatePicker(false);
  };

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
        <div className="todoitem__date">
          <button
            className="todoitem__footer__button"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <Calendar className="w-5 h-5 hover:text-blue-500" />
          </button>
          <p className="p">{task.createdAt.toLocaleDateString()}</p>

          {showDatePicker && (
            <DatePicker
              selected={task.createdAt}
              onChange={handleDateChange}
              inline
            />
          )}
        </div>

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
