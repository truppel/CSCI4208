// import { useState } from 'react'
import { useState } from 'react'
import { useGame } from './GameContext.jsx'
import Home from './pages/Home.jsx'
import Intro from './pages/Intro.jsx'

const pages = {
  home: Home,
  intro: Intro,
}

export default function App() {
  const { page } = useGame()
  // const  [page, setPage] = useState('home')
  const Page = pages[page] ?? Home
  return <Page />
  // return <Page goTo={setPage} />
}