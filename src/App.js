import React, { useState } from "react";
import ColorPickerImg from "../src/assets/colorpicker.png";
import ColorPicker from "./components/ColorPicker";
import "./App.css";

export default function App() {
  const [inputColor, setInputColor] = useState("");
  const [colorName, setcolorName] = useState("");
  const [isEnable, setIsEnable] = useState(false);

  //Store InputBackground Color
  const inputBGColor = (color, name) => {
    setInputColor(color);
    setcolorName(name);
  };

  return (
    <div className="main">
      <input type="text" value={inputColor} name="hood-rgb-color" />
      <input type="text" value={colorName} name="hood-rgb-name" />
      {inputColor ? (
        <div
          className="input_bg_color color-variable-item-z-sherwin-color"
          style={{ background: inputColor }}
          onClick={() => setIsEnable(!isEnable)}
        ></div>
      ) : (
        <img
          onClick={() => setIsEnable(!isEnable)}
          className="colorpicker_img color-variable-item-z-sherwin-color"
          src={ColorPickerImg}
          alt=""
        />
      )}

      {isEnable ? (
        <ColorPicker inputColor={inputColor} inputBGColor={inputBGColor} />
      ) : null}
    </div>
  );
}
