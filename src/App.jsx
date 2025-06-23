import { useState } from "react"
import levels from "./data/levels"
import { validateCSS } from "./utils/validateCSS"
import LevelIntro from "./components/LevelIntro"
import GameBoard from "./components/GameBoard"
import CssEditor from "./components/CssEditor"

function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const level = levels[currentLevelIndex]
  const [showHint, setShowHint] = useState(false)


  const [cssInput, setCssInput] = useState(level.cssStarter)
  const [success, setSuccess] = useState(false)

  const handleRun = () => {
    if (validateCSS(cssInput, level.solution)) {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setCssInput(levels[currentLevelIndex + 1]?.cssStarter || "")
        setCurrentLevelIndex((prev) => prev + 1)
      }, 2000)
    } else {
      alert("Hala bir şeyler eksik gibi... 😅")
    }
  }

  const cssStyles = {}
  cssInput.split(";").forEach(rule => {
    const [prop, val] = rule.split(":").map(x => x?.trim())
    if (prop && val) cssStyles[prop] = val
  })

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center gap-6">
      <LevelIntro title={level.title} description={level.description} />
      <GameBoard cssStyles={cssStyles} />
      <CssEditor cssInput={cssInput} setCssInput={setCssInput} />
      <button
        onClick={handleRun}
        className="mt-4 px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
      >
        Kodumu Çalıştır
      </button>
      <button
          onClick={() => setShowHint(!showHint)}
          className="mt-2 px-4 py-1 bg-yellow-400 text-black text-sm rounded hover:bg-yellow-300"
        >
          {showHint ? "İpucunu Gizle" : "İpucu Göster 💡"}
        </button>

        {showHint && (
          <p className="mt-2 text-sm text-yellow-800 bg-yellow-100 p-2 rounded border">
            💡 {level.hint}
          </p>

        )}

      {success && (
        <div className="fixed top-10 bg-white p-6 rounded-lg shadow-md text-green-700 font-bold animate-bounceSlow">
          🎉 Tebrikler! Bir sonraki zindana geçiliyor...
        </div>
      )}
    </main>
  )
}

export default App
