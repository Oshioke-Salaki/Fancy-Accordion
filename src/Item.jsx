/* eslint-disable react/prop-types */

function Item({ num, title, text, isOpen, setOpen }) {
  return (
    <div
      className={isOpen === num - 1 ? "item open" : "item"}
      onClick={() => (isOpen === num - 1 ? setOpen(null) : setOpen(num - 1))}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <h1 className="title">{title}</h1>
      <p className="icon">{isOpen === num - 1 ? "-" : "+"}</p>

      {isOpen === num - 1 && <div className="content-box">{text}</div>}
    </div>
  );
}

export default Item;
