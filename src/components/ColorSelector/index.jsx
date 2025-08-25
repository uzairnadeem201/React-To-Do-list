import "./styles.css";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todoslice";

const ColorSelector = () => {
  const dispatch = useDispatch()
  const colors = ["#d2856f6a", "#42eb615c", "#7188ed93", "#F0F0F0"];
  const [appearColorButtons, setAppearColorButtons] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleButtonClick = () => {
    if (appearColorButtons) {
      setAnimateOut(true);
      setTimeout(() => {
        setAppearColorButtons(false);
        setAnimateOut(false);
      }, 1000);
    } else {
      setAppearColorButtons(true);
    }
  };

  const handleAddTask = (color) => {
    const newTask = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      color,
      text: "New Task",
      createdAt: new Date(),
    };
    dispatch(addTask(newTask));
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
            {colors.map((color, index) => (
              <button
                key={color}
                className="colorselector__button-color"
                style={{
                  backgroundColor: color,
                  transform: !animateOut
                    ? `translateY(${100 + index * 20}px)`
                    : `translateY(-${100 + index * 20}px)`,
                  animationDelay: `${index * 0.2}s`,
                  animationName: animateOut ? "rise" : "drop",
                  animationDuration: "0.5s",
                  animationFillMode: "forwards",
                }}
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
