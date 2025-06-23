export default function LevelIntro({ title, description }) {
  return (
    <div className="mb-4 p-4 bg-yellow-100 rounded-md shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}
