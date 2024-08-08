import React, { useState, useRef } from "react";
import "./Drag.css";
export const DragAndDrop = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const handleOnDragStart = (e: any) => {
    e.dataTransfer.setData("text", e.target.id);
    console.log("hello drag strat", e, "and", e.target.id);
  };
  const boardRef = useRef<HTMLDivElement>(null);
  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(console.log("hello nondrop", e));
    e.preventDefault();
    if (boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();
      const offsetX = e.clientX - boardRect.left - 25;
      const offsetY = e.clientY - boardRect.top - 25;
      setPosition({ x: offsetX, y: offsetY });
    }
    // setPosition({ ...position, x: e.clientX, y: e.clientY });
    // const id = e.dataTransfer.getData("text");
    // const draggableElement = document.getElementById(id);
    // const dropZone = e.target;
    // dropZone.appendChild(draggableElement);
    // e.dataTransfer.clearData();
    // console.log("target in dfropopewr", e.dataTransfer.getData("text"));
  };
  const boxStyle: React.CSSProperties = {
    top: position.y,
    left: position.x,
  };
  const handleOnDragOver = (e: any) => {
    e.preventDefault();
  };
  console.log("my position ===", position);
  return (
    <div
      className="DragBoard"
      onDrop={(e) => handleOnDrop(e)}
      onDragOver={(e) => handleOnDragOver(e)}
      ref={boardRef}
    >
      <div
        id="draggable-box"
        className="draggable"
        style={boxStyle}
        draggable
        onDragStart={(e) => handleOnDragStart(e)}
      >
        hello drag
      </div>
    </div>
  );
};
