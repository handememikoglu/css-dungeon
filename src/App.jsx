import { useState } from "react"
import Character from "./components/Character"
import LevelIntro from "./components/LevelIntro"
import GameBoard from "./components/GameBoard"
import CssEditor from "./components/CssEditor"

function App() {
  const [cssInput, setCssInput] = useState("display: flex; justify-content: center;")

  const cssStyles = {}
  cssInput.split(";").forEach(rule => {
    const [prop, val] = rule.split(":").map(x => x?.trim())
    if (prop && val) cssStyles[prop] = val
  })

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center gap-6">
      <LevelIntro
        title="Seviye 1: Flex Başlangıcı"
        description="Karakteri kutuların ortasına getirmek için flex özelliklerini kullan."
      />
      <GameBoard cssStyles={cssStyles} />
      <CssEditor cssInput={cssInput} setCssInput={setCssInput} />
    </main>
  )
}

export default App
