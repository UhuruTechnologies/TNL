"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"
import confetti from "canvas-confetti"

interface Prize {
  amount: number
  revealed: boolean
}

export default function ScratchGame() {
  const { t } = useTranslation()
  const [isScratching, setIsScratching] = useState(false)
  const [prizes, setPrizes] = useState<Prize[]>([
    { amount: 1000, revealed: false },
    { amount: 5000, revealed: false },
    { amount: 10000, revealed: false },
  ])
  const [scratchedArea, setScratchedArea] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")
      if (context) {
        setCtx(context)
        // Set canvas size
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
        // Draw initial scratch layer
        drawScratchLayer(context)
      }
    }
  }, [])

  const drawScratchLayer = (context: CanvasRenderingContext2D) => {
    context.fillStyle = "#666"
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }

  const getCanvasCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    let clientX, clientY

    if ('touches' in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    if (ctx) {
      ctx.globalCompositeOperation = "destination-out"
      ctx.lineWidth = 30
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      const { x, y } = getCanvasCoordinates(e)
      ctx.beginPath()
      ctx.moveTo(x, y)
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return
    const { x, y } = getCanvasCoordinates(e)
    ctx.lineTo(x, y)
    ctx.stroke()

    // Calculate scratched area
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) {
        transparentPixels++
      }
    }

    const totalPixels = ctx.canvas.width * ctx.canvas.height
    const newScratchedArea = (transparentPixels / totalPixels) * 100
    setScratchedArea(newScratchedArea)

    // Check if enough area is scratched to reveal prizes
    if (newScratchedArea > 30) {
      revealPrizes()
    }
  }

  const revealPrizes = () => {
    setPrizes(prizes.map(prize => ({ ...prize, revealed: true })))
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    if (ctx) {
      ctx.closePath()
    }
  }

  const resetGame = () => {
    setPrizes(prizes.map(prize => ({ ...prize, revealed: false })))
    setScratchedArea(0)
    if (ctx) {
      drawScratchLayer(ctx)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-64 bg-gray-200 rounded-lg cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Scratch to Reveal Your Prize!</h2>
            <p className="text-gray-600 mb-4">Use your finger or mouse to scratch off the gray layer</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${scratchedArea}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          onClick={resetGame}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Play Again
        </Button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Your Prizes:</h3>
        <div className="grid grid-cols-3 gap-4">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg text-center ${
                prize.revealed ? "bg-green-100" : "bg-gray-100"
              }`}
            >
              <p className="font-bold">
                {prize.revealed ? `TSh ${prize.amount.toLocaleString()}` : "???"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 