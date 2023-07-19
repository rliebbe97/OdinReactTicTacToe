import React from "react";
import { useState } from "react";
import Square from "./Square";

function Board({ onPlay}) {
    const [isXTurn, setIsXTurn] = useState(true)
    const [squares, setSquares] = useState([Array(9).fill(null)]) 

    function handleSquareClick(i) {
        const nextSquares = squares.slice();
        if (isXTurn) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
          setSquares(nextSquares);
          setIsXTurn(prev => !prev);
    }
    
    // const onSquareClick = () => {
    //     if (gameOver == false && playerTurn =='X') {
    //         setPlayerTurn('O');
    //     }

    //     else if (gameOver == false && playerTurn =='O'){
    //         setPlayerTurn('X');
    //     }

    //     else {
    //         return;
    //     }
    // }

    // const checkForWinner = () => {

    // }

  return (
    <>
      <div >
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
};

export default Board;
