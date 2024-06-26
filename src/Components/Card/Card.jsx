import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";

import "./Card.css";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const { id, title, labels } = props.card;

  return (
    <div
      className="card"
      draggable
      onDragEnd={() => props.dragEnded(props.boardId, id)}
      onDragEnter={() => props.dragEntered(props.boardId, id)}
      // onClick={() => props.onClick(id)}
    >
      <div className="card_top">
        <div className="card_top_labels">
          {labels?.map((item, index) => (
            <label key={index} style={{ backgroundColor: item.color }}>
              {item.text}
            </label>
          ))}
        </div>
        <div
          className="card_top_more"
          onClick={(event) => {
            event.stopPropagation();
            setShowDropdown(true);
          }}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeCard(props.boardId, id)}>
                Delete Card
              </p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="card_title">{title}</div>
    </div>
  );
}

export default Card;
