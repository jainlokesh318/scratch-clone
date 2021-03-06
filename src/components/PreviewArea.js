import React from "react";
import CatSprite from "./CatSprite";
import "./css/PreviewArea.css";
import { usePosition } from "../contexts/PositionContext";

export default function PreviewArea({ preview }) {
  const { x, y, angle } = usePosition();

  var r = document.querySelector(":root");
  r.style.setProperty("--angle", angle);

  var rs = getComputedStyle(r);

  return (
    <div className="flex-none overflow-y-auto p-2 grid">
      {preview.map((row, indexX) =>
        row.map((cell, indexY) =>
          indexX === x && indexY === y ? (
            <div key={indexY} className="cell sprite-cell">
              <CatSprite />
            </div>
          ) : (
            <div key={indexY} className="cell"></div>
          )
        )
      )}
    </div>
  );
}
