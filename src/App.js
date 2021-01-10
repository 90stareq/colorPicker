import React, { useEffect, useState } from "react";
import ColorPickerImg from "../src/assets/colorpicker.png";
import ColorPicker from "./components/ColorPicker";
import "./App.css";

export default function App() {
  const [inputColor, setInputColor] = useState("");
  const [colorName, setcolorName] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  useEffect(() => {
    includeLi();
  }, []);

  //Script
  const includeLi = () => {
    let theul = document.querySelector(".variable-items-wrapper");
    let theli = document.querySelector(".newli");
    theul.appendChild(theli);
  };

  //Store InputBackground Color
  const inputBGColor = (color, name) => {
    setInputColor(color);
    setcolorName(name);
  };

  return (
    <div className="main">
      <input type="text" value={inputColor} name="hood-rgb-color" />
      <input type="text" value={colorName} name="hood-rgb-name" />
      <li
        onClick={() => setIsEnable(!isEnable)}
        data-wvstooltip="Antique White"
        className="variable-item color-variable-item color-variable-item-antique-white newli"
        title="Antique White"
        data-value="antique-white"
        role="button"
        tabindex="0"
        style={{ background: inputColor }}
      >
        {inputColor ? (
          <span className="variable-item-span variable-item-span-color"></span>
        ) : (
          <img
            onClick={() => setIsEnable(!isEnable)}
            className="colorpicker_img"
            src={ColorPickerImg}
            alt=""
          />
        )}
      </li>

      {isEnable ? (
        <ColorPicker inputColor={inputColor} inputBGColor={inputBGColor} />
      ) : null}
    </div>
  );
}
