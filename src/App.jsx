import {useState} from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

const App = () => {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  const handleSelectSquare = (row, col) => {
    setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(previousTurns => [
        {square: {row, col}, player: previousTurns.length > 0 && previousTurns[0].player === 'X' ? 'O' : 'X'},
        ...previousTurns
      ]
    )
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="MAX" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initialName="MANUEL" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      <Log/>
    </div>
  </main>
}

export default App
