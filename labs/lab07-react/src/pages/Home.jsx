// import { useGame } from "../GameContext"
export default function Home({goTo}) {
    // const { startGame } = useGame;
  return (
    <main>
      <h1>React Adventure Game</h1>
      <hr />
      <p>Beware, Here be monsters!</p>
      <img src="/assets/game-title.gif" width="480" alt="Adventure Game" />
      {/* <p><button onClick={startGame}>Start</button></p> */}
      <p><button onClick={() => goTo('intro')}>Start</button></p>
      <hr />
      <h4>Story &amp; Code by Ted</h4>
    </main>
  )
}