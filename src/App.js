import React, { useState } from "react";
import ColorPickerImg from "../src/assets/colorpicker.png";
import ColorPicker from "./components/ColorPicker";
import "./App.css";
export default function App() {
  const [inputColor, setInputColor] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  //Store InputBackground Color
  const inputBGColor = (color) => {
    setInputColor(color);
  };
  return (
    <div className="main">
      <input type="text" value={inputColor} name="hood-rgb-color" />
      <img
        onClick={() => setIsEnable(!isEnable)}
        className="colorpicker_img"
        src={ColorPickerImg}
        alt=""
      />
      {isEnable ? (
        <ColorPicker inputColor={inputColor} inputBGColor={inputBGColor} />
      ) : null}
    </div>
  );
}
