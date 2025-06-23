export default function CssEditor({ cssInput, setCssInput }) {
  return (
    <textarea
      value={cssInput}
      onChange={(e) => setCssInput(e.target.value)}
      placeholder="CSS kodunu buraya yaz..."
      className="w-full h-32 p-2 border rounded-md font-mono bg-gray-900 text-green-400"
    />
  )
}
