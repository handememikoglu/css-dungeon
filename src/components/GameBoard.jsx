import Character from "./Character";

export default function GameBoard({ cssStyles }) {
  return (
    <div className="w-full h-80 border-2 border-gray-300 rounded-xl p-4 bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
      <div
        className="room flex items-center justify-center h-full gap-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden relative"
        style={{ ...cssStyles }}
      >
        {/* Grid için özel düzen */}
        {'grid-template-columns' in cssStyles && (
          <>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg"></div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Character />
            </div>
          </>
        )}
        
        {/* Normal flex düzen */}
        {!('grid-template-columns' in cssStyles) && (
          <>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg"></div>
            <Character />
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
          </>
        )}
      </div>
    </div>
  )
}