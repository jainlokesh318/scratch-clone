import React from "react";

import Icon from "./Icon";

export default function MidArea(props) {

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
      className={`flex-1 overflow-auto bg-gray-100 ${props.className}`}
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}