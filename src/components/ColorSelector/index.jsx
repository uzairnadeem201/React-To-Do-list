import "./styles.css";
import { useState, useContext } from "react";
import { useToDoContext } from "../../Provider";

const ColorSelector = () => {
  const { addTask } = useToDoContext();
  const colors = ["#d2856f6a", "#42eb615c", "#7188ed93", "#F0F0F0"];
  const [appearColorButtons, setAppearColorButtons] = useState(false);

  const handleButtonClick = () => {
    setAppearColorButtons(!appearColorButtons);
  };

  const handleAddTask = (color) => {
    const newTask = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      color,
      text: "New Task",
      createdAt: new Date(),
    };
    addTask(newTask);
    setAppearColorButtons(false);
  };

  return (
    <div className="colorselector">
      <h3>Docket</h3>
      <div className="colorselector__buttons">
        <button className="colorselector__button" onClick={handleButtonClick}>
          +
        </button>

        {appearColorButtons && (
          <div className="colorselector__colorbuttons">
            {colors.map((color) => (
              <button
                key={color}
                className="colorselector__button-color"
                style={{ backgroundColor: color }}
                onClick={() => {
                  handleAddTask(color);
                  setAppearColorButtons(false);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelector;
