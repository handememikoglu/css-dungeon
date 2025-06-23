import Character from "./Character"

export default function GameBoard({ cssStyles }) {
  return (
    <div className="w-full h-64 border-2 border-gray-400 rounded-lg p-4 bg-gray-100">
      <div
        className="room flex items-center justify-center h-full gap-4 bg-white"
        style={{ ...cssStyles }}
      >
        <div className="w-10 h-10 bg-blue-500 rounded" />
        <Character />
        <div className="w-10 h-10 bg-red-500 rounded" />
      </div>
    </div>
  )
}
