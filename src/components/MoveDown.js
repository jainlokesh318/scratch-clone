import React from "react";
import { usePosition } from "../contexts/PositionContext";

function MoveDown({ id, className, draggable }) {
  const { setX, x } = usePosition();

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
      onClick={() => setX(x + 1)}
    >
      {"Move 10 steps down"}
    </div>
  );
}

export default MoveDown;
