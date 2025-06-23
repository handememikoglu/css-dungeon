import { useState } from "react"
import levels from "./data/levels"
import { validateCSS } from "./utils/validateCSS"
import LevelIntro from "./components/LevelIntro"
import GameBoard from "./components/GameBoard"
import CssEditor from "./components/CssEditor"
import { BeakerIcon, CheckCircleIcon, LightBulbIcon, PlayIcon } from "@heroicons/react/16/solid"

function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const level = levels[currentLevelIndex]
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)



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
    <div className="flex flex-wrap gap-3 justify-center mt-4">
      <button
        onClick={handleRun}
        className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all shadow-md flex items-center gap-1"
      >
        <PlayIcon className="w-4 h-4" /> 
        Kodumu Çalıştır
      </button>
      
      <button
        onClick={() => setShowHint(!showHint)}
        className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md flex items-center gap-1"
      >
        <LightBulbIcon className="w-4 h-4" />
        {showHint ? "İpucunu Gizle" : "İpucu Göster"}
      </button>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="px-5 py-2 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 transition-all shadow-md flex items-center gap-1"
      >
        <BeakerIcon className="w-4 h-4" />
        {showSolution ? "Çözümü Gizle" : "Çözümü Göster"}
      </button>
    </div>

      {showSolution && (
        <div className="mt-2 p-2 bg-gray-800 text-green-300 rounded text-sm font-mono whitespace-pre">
          {Object.entries(level.solution)
            .map(([key, val]) => `${key}: ${val};`)
            .join("\n")}
        </div>
      )}

      {success && (
      <div className="fixed top-10 bg-white p-4 rounded-full shadow-lg text-green-600 font-bold animate-bounceSlow flex items-center gap-2">
        <CheckCircleIcon className="w-6 h-6 text-green-500" />
        <span>🎉 Tebrikler! Level {currentLevelIndex + 1} tamamlandı!</span>
      </div>
    )}
    </main>
  )
}

export default App
