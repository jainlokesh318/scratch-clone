import React from "react";
import Icon from "./Icon";
import { usePosition } from "../contexts/PositionContext";

function RotateClockwise({ id, className, draggable }) {
  const { angle, setAngle } = usePosition();

  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("codeBlockId", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      className={`flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer ${className}`}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onClick={() => {
        const theta = parseInt(angle);
        setAngle(`${theta + 15}deg`);
      }}
    >
      {"Turn "}
      <Icon name="redo" size={15} className="text-white mx-2" />
      {"15 degrees"}
    </div>
  );
}

export default RotateClockwise;
