import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const App = () => {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = gameTurns.length > 0 && gameTurns[0].player === "X" ? "O" : "X";
  const gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const winningCombination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[winningCombination[0].row][winningCombination[0].column];
    const secondSquareSymbol = gameBoard[winningCombination[1].row][winningCombination[1].column];
    const thirdSquareSymbol = gameBoard[winningCombination[2].row][winningCombination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  const handleSelectSquare = (row, col) => {
    setGameTurns((previousTurns) => [
      { square: { row, col }, player: previousTurns.length > 0 && previousTurns[0].player === "X" ? "O" : "X" },
      ...previousTurns,
    ]);
  };

  const hasDraw = gameTurns.length === 9 && winner === null;

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((oldPlayers) => {
      return { ...oldPlayers, [symbol]: newName };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={currentPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
