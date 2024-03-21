import React from "react";
import { MoreHorizontal } from "react-feather";



import "./Board.css";
import Card from "../Card/Card";

function Board() {
 

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
   Todo <span><MoreHorizontal /></span>
        </p>
        </div>
       
      <div className="board_cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
      </div>
    </div>
  );
}

export default Board;
