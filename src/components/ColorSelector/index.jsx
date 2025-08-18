import "./styles.css";
import { useState } from "react";

const ColorSelector = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0F0F0"];
  const [appearColorButtons, setAppearColorButtons] = useState(false);

  const handleButtonClick = () => {
    setAppearColorButtons(!appearColorButtons);
  };

  const getRandomId = () =>
    Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

  return (
    <div className="colorselector">
      <h3>Docket</h3>
      <div className="colorselector__buttons">
        <button
          className="colorselector__button"
          onClick={() => handleButtonClick()}

        >
          +
        </button>

        {appearColorButtons && (
          <div className="colorselector__colorbuttons">
            {colors.map((color) => (
              <button
                key={getRandomId()}
                className="colorselector__button-color"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorSelector;
