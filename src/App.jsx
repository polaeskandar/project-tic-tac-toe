import Player from "./components/Player.jsx";

const App = () => {
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="MAX" symbol="X" />
        <Player initialName="MANUEL" symbol="O" />
      </ol>

      GAME BOARD
    </div>
  </main>
}

export default App
