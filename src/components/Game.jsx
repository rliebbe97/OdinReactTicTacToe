import React from "react";
import { useState } from "react";
import Board from "./Board";

function Game() {
    // const [isXTurn, setIsXTurn] = useState(true)
    // const [squares, setSquares] = useState([Array(9).fill(null)]) 


  return (
    <div>
      <Board />
    </div>
  );
};

export default Game;
