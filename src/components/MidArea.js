import React from "react";

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
      className={`flex-1 h-full overflow-auto ${props.className}`}
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
