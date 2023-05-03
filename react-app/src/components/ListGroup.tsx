import React, { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div>
        <h1>{heading}</h1>
        {items.length === 0 ? <p>No City Found</p> : null}{" "}
        {/* First Approach */}
        {items.length === 0 && <p>No item Found</p>}{" "}
        {/* This is second Approach if true && 1 = 1   and false && 1 = false */}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
