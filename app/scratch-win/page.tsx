import ScratchGame from "@/components/scratch-game"

export default function ScratchWinPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Scratch & Win</h1>
      <div className="max-w-2xl mx-auto">
        <ScratchGame />
      </div>
    </div>
  )
} 