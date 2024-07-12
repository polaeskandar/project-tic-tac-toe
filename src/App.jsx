import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const winningCombination of WINNING_COMBINATIONS) {
  }

  const handleSelectSquare = (row, col) => {
    setGameTurns((previousTurns) => [
      { square: { row, col }, player: previousTurns.length > 0 && previousTurns[0].player === "X" ? "O" : "X" },
      ...previousTurns,
    ]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="MAX" symbol="X" isActive={currentPlayer === "X"} />
          <Player initialName="MANUEL" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={currentPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
