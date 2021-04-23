import React from "react";
import Icon from "./Icon";

import MoveForward from "./MoveForward";
import MoveBackward from "./MoveBackward";
import MoveUp from "./MoveUp";
import MoveDown from "./MoveDown";
import RotateClockwise from "./RotateClockwise";
import RotateAntiClockwise from "./RotateAntiClockwise";

export default function Sidebar({ className, id }) {
  const drop = (e) => {
    e.preventDefault();
    const codeBlockId = e.dataTransfer.getData("codeBlockId");

    const codeBlock = document.getElementById(codeBlockId);
    codeBlock.style.display = "block";

    e.target.appendChild(codeBlock);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 ${className}`}
      onDrop={drop}
      onDragOver={dragOver}
      id={id}
    >
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>

      <div className="font-bold"> {"Motion"} </div>

      <MoveForward id="moveForward" draggable="true" />
      <MoveBackward id="moveBackward" draggable="true" />
      <MoveUp id="moveUp" draggable="true" />
      <MoveDown id="moveDown" draggable="true" />
      <RotateClockwise id="rotateClockwise" draggable="true" />
      <RotateAntiClockwise id="rotateAntiClockwise" draggable="true" />
    </div>
  );
}
