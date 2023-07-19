import React from "react";
import { useState } from "react";

function Square({value, onSquareClick}) {

  return (
    <button className="border-2 border-solid border-black h-10 w-10 m-0 p-0" onClick={onSquareClick}>{value}</button>
  );
};

export default Square;
