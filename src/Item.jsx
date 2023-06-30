/* eslint-disable react/prop-types */
import { useState } from "react";

function Item({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? "item open" : "item"}
      onClick={() => setIsOpen((cur) => !cur)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <h1 className="title">{title}</h1>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default Item;
