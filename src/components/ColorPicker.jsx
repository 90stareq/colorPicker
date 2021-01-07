import React, { useEffect, useState } from "react";
import colorslist from "./ColorsList";

export default function ColorPicker({ inputColor, inputBGColor }) {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  const [search, setSearch] = useState("");
  const [filteredColors, setFilteredColors] = useState([]);
  const [nexttoSearch, setnexttoSearch] = useState(inputColor);

  useEffect(() => {
    setColors(colorslist);
    setnexttoSearch(inputColor);
  }, []);

  useEffect(() => {
    setFilteredColors(
      colors.filter((country) =>
        country.colorName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, colors]);

  return (
    <>
      <div className="colors_box">
        <div className="colors">
          <input
            type="text"
            placeholder="Search Bar"
            onChange={(e) => setSearch(e.target.value)}
            className="search_input"
          />
          <span
            style={{ backgroundColor: inputColor }}
            id="selectedcolor"
          ></span>
          <div className="single-color-list">
            {filteredColors.map((c, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setColor(c.colorCode);
                    inputBGColor(c.colorCode, c.colorName);
                  }}
                  style={{ background: c.colorCode }}
                  className="single_color"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
