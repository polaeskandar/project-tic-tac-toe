const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const GameBoard = ({onSelectSquare}) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const newGameBoard = [...prevGameBoard];
  //     newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return newGameBoard;
  //   })
  //
  //   onSelectSquare();
  // }

  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
      <ol>
        {row.map((col, colIndex) => <li key={colIndex}>
          <button onClick={onSelectSquare}>{col}</button>
        </li>)}
      </ol>
    </li>)}
  </ol>
}

export default GameBoard;