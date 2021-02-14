import React, { useEffect, useState } from "react";
import colorslist from "../src/components/ColorsList";
import ColorPickerImg from "../src/assets/colorpicker.png";
import ColorPicker from "./components/ColorPicker";
import "./App.css";

export default function App() {
  // const [inputColor, setInputColor] = useState("");
  // const [colorName, setcolorName] = useState("");
  // const [isEnable, setIsEnable] = useState(false);
  // useEffect(() => {
  //   includeLi();
  // }, []);

  // //Script
  // const includeLi = () => {
  //   let theul = document.querySelector(".variable-items-wrapper");
  //   let theli = document.querySelector(".newli");
  //   theul.appendChild(theli);
  // };

  // //Store InputBackground Color
  // const inputBGColor = (color, name) => {
  //   setInputColor(color);
  //   setcolorName(name);
  // };

  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  const [search, setSearch] = useState("");
  const [filteredColors, setFilteredColors] = useState([]);
  const [colorName, setcolorName] = useState("");

  useEffect(() => {
    setColors(colorslist);
  }, []);

  useEffect(() => {
    setFilteredColors(
      colors.filter((country) =>
        country.colorName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, colors]);

  return (
    <div className="main hoodsly-colorpicker-main">
      <input type="text" value={color} name="hood-rgb-color" />
      <input type="text" value={colorName} name="hood-rgb-name" />
      <div className="colors_box">
        <div className="colors">
          <input
            type="text"
            placeholder={`${colorName ? colorName : "Search Bar"}`}
            onChange={(e) => setSearch(e.target.value)}
            className="search_input"
          />
          <span style={{ backgroundColor: color }} id="selectedcolor"></span>
          <div className="single-color-list">
            {filteredColors.map((c, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    console.log(c.colorName.slice(8));
                    setColor(c.colorCode);
                    setcolorName(c.colorName.slice(8));
                  }}
                  style={{ background: c.colorCode }}
                  className="single_color"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <input type="text" value={inputColor} name="hood-rgb-color" />
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
      ) : null} */}
    </div>
  );
}
