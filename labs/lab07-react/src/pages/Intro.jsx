import GamePage from '../components/GamePage.jsx'
import ActionLink from '../components/ActionLink.jsx'
import { useGame } from '../GameContext.jsx'
import Inventory from '../components/Inventory.jsx'

export default function Intro() {
// export default function Intro({goto}){
  const {goTo, acceptQuest } = useGame()

  function beginAdventure(){
    acceptQuest()
    goTo('overworld')
  }

  return (
    <main>
    {/* <GamePage title="Story Introduction"> */}
      <img src="/assets/intro.gif" width="360" alt="Village elder" />
      <p>
        Welcome, traveler! Our land is plagued by a great evil.
        Please save us. Here, take 5 gold as a deposit.
      </p>
      {/* <h4>
        <ActionLink to="overworld" beforeNavigate={acceptQuest}>
          Adventure out of town
        </ActionLink>
      </h4> */}
      {/* <button onclidk={() => goto('overworld')}> */}
      <button onClick={beginAdventure}>
      Aventure out of town
      </button>
      <hr/>
      <Inventory />
      </main>
      )
}
