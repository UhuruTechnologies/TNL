"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Check, Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import ChatCard from "@/components/chat-card"

// Keno game constants
const TOTAL_NUMBERS = 80
const MAX_SELECTIONS = 10
const DRAW_NUMBERS = 20
const DRAW_INTERVAL = 1000 // ms between each number draw

export default function KenoPage() {
  const [selectedTab, setSelectedTab] = useState("check")
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [gameState, setGameState] = useState<"idle" | "selecting" | "drawing" | "complete">("idle")
  const [betAmount, setBetAmount] = useState(500)
  const [matches, setMatches] = useState(0)
  const [winAmount, setWinAmount] = useState(0)
  const [pastDraws, setPastDraws] = useState<Array<{ date: string; numbers: number[] }>>([])
  const [searchDate, setSearchDate] = useState("")

  // Generate past draws for demo
  useEffect(() => {
    const generatePastDraws = () => {
      const draws = []
      const today = new Date()

      for (let i = 0; i < 7; i++) {
        const date = new Date(today)
        date.setDate(date.getDate() - i)

        const numbers = []
        while (numbers.length < DRAW_NUMBERS) {
          const num = Math.floor(Math.random() * TOTAL_NUMBERS) + 1
          if (!numbers.includes(num)) {
            numbers.push(num)
          }
        }

        draws.push({
          date: date.toLocaleDateString(),
          numbers: numbers.sort((a, b) => a - b),
        })
      }

      setPastDraws(draws)
    }

    generatePastDraws()
  }, [])

  // Calculate payout based on matches and bet amount
  const calculatePayout = useCallback((matches: number, selections: number, bet: number) => {
    // Payout table based on number of selections and matches
    const payoutTable: Record<number, number[]> = {
      1: [0, 2],
      2: [0, 0, 9],
      3: [0, 0, 2, 47],
      4: [0, 0, 1, 6, 80],
      5: [0, 0, 0, 3, 16, 300],
      6: [0, 0, 0, 2, 10, 75, 1500],
      7: [0, 0, 0, 1, 5, 25, 300, 5000],
      8: [0, 0, 0, 0, 2, 15, 100, 1000, 15000],
      9: [0, 0, 0, 0, 2, 10, 50, 500, 2500, 25000],
      10: [0, 0, 0, 0, 0, 5, 25, 100, 1000, 10000, 100000],
    }

    if (selections === 0 || matches > selections) return 0

    const multiplier = payoutTable[selections][matches] || 0
    return bet * multiplier
  }, [])

  // Handle number selection
  const toggleNumber = (num: number) => {
    if (gameState !== "selecting" && gameState !== "idle") return

    setGameState("selecting")

    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num))
    } else if (selectedNumbers.length < MAX_SELECTIONS) {
      setSelectedNumbers([...selectedNumbers, num])
    }
  }

  // Start the game draw
  const startDraw = () => {
    if (selectedNumbers.length === 0) return

    setGameState("drawing")
    setIsDrawing(true)
    setDrawnNumbers([])
    setMatches(0)
    setWinAmount(0)

    const availableNumbers = Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1)
    const drawResults: number[] = []

    // Simulate drawing numbers one by one
    const drawNextNumber = (index: number) => {
      if (index >= DRAW_NUMBERS) {
        // Drawing complete
        const matchCount = selectedNumbers.filter((num) => drawResults.includes(num)).length
        const winnings = calculatePayout(matchCount, selectedNumbers.length, betAmount)

        setMatches(matchCount)
        setWinAmount(winnings)
        setIsDrawing(false)
        setGameState("complete")
        return
      }

      // Draw a random number
      const randomIndex = Math.floor(Math.random() * availableNumbers.length)
      const drawnNumber = availableNumbers[randomIndex]
      availableNumbers.splice(randomIndex, 1)
      drawResults.push(drawnNumber)

      setDrawnNumbers([...drawResults])

      // Schedule next number draw
      setTimeout(() => drawNextNumber(index + 1), DRAW_INTERVAL)
    }

    // Start drawing
    drawNextNumber(0)
  }

  // Reset the game
  const resetGame = () => {
    setSelectedNumbers([])
    setDrawnNumbers([])
    setGameState("idle")
    setMatches(0)
    setWinAmount(0)
  }

  // Check if a number is drawn
  const isDrawn = (num: number) => drawnNumbers.includes(num)

  // Check if a number is both selected and drawn (a match)
  const isMatch = (num: number) => selectedNumbers.includes(num) && drawnNumbers.includes(num)

  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-6 md:p-8 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Tanzania Keno</h1>
            <p className="mt-2">Pick up to 10 numbers and win up to TSh 100,000,000!</p>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">
              <Link href="#play-demo">Play Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-blue-800">
              <Link href="#how-to-play">How to Play</Link>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="check" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="check">Check Numbers</TabsTrigger>
          <TabsTrigger value="how-to-play">How to Play</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="prizes">Prizes & Odds</TabsTrigger>
          <TabsTrigger value="play-demo" id="play-demo">
            Play Demo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="check" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Check Your Numbers</h2>
              <p className="mb-6">Are you holding a winning ticket? Here's an easy way to find out.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <Input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="mb-4"
                  />

                  <Button className="w-full md:w-auto">Check Numbers</Button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Recent Draws
                  </h3>

                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {pastDraws.map((draw, index) => (
                      <div key={index} className="border-b pb-2">
                        <div className="font-medium">{draw.date}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {draw.numbers.slice(0, 10).map((num) => (
                            <span
                              key={num}
                              className="inline-block w-6 h-6 text-xs bg-blue-100 text-blue-800 rounded-full flex items-center justify-center"
                            >
                              {num}
                            </span>
                          ))}
                          {draw.numbers.length > 10 && (
                            <span className="text-xs text-gray-500">+{draw.numbers.length - 10} more</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="how-to-play" id="how-to-play" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">How to Play Tanzania Keno</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Choose Your Numbers</h3>
                      <p className="text-gray-600">
                        Select from 1 to 10 numbers from a field of 1 to 80. The more numbers you match, the more you
                        win!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Choose Your Bet Amount</h3>
                      <p className="text-gray-600">Decide how much you want to wager. Minimum bet is TSh 500.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Choose Number of Draws</h3>
                      <p className="text-gray-600">Decide how many consecutive draws you want to play.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Watch the Draw</h3>
                      <p className="text-gray-600">20 numbers are drawn. Match your numbers to win!</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                  <Image src="/images/logo100.png" alt="Tanzania Keno" fill className="object-contain" />
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="#play-demo" onClick={() => setSelectedTab("play-demo")}>
                    Try Demo Game
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Game Rules</h2>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Game Overview</h3>
                  <p>
                    Tanzania Keno is a game where 20 numbers are drawn from a field of 80 numbers (1-80). Players can
                    select from 1 to 10 numbers and win prizes based on how many of their numbers match the drawn
                    numbers.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Key Rules</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Players must be 18 years or older to play.</li>
                    <li>Draws take place every 4 minutes from 6:00 AM to 2:00 AM daily.</li>
                    <li>Players can wager from TSh 500 up to TSh 10,000 per play.</li>
                    <li>Players can choose to play from 1 to 10 numbers.</li>
                    <li>Prizes vary based on how many numbers are chosen and matched.</li>
                    <li>Tickets cannot be canceled once purchased.</li>
                    <li>Players have 90 days from the draw date to claim prizes.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Important Note</h3>
                  <p>
                    All winning tickets are bearer instruments. This means that the Tanzania National Lottery will pay
                    the person who presents a winning ticket. Sign the back of your ticket immediately after purchase to
                    protect your ticket in case it is lost or stolen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prizes" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Prizes & Odds</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="p-2 text-left">Spot Size</th>
                      <th className="p-2 text-left">Match</th>
                      <th className="p-2 text-left">Prize Multiplier</th>
                      <th className="p-2 text-left">Prize (TSh 1,000 bet)</th>
                      <th className="p-2 text-left">Odds</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">1 Spot</td>
                      <td className="p-2">1</td>
                      <td className="p-2">2x</td>
                      <td className="p-2">TSh 2,000</td>
                      <td className="p-2">1 in 4</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-2 font-medium" rowSpan={2}>
                        2 Spot
                      </td>
                      <td className="p-2">2</td>
                      <td className="p-2">9x</td>
                      <td className="p-2">TSh 9,000</td>
                      <td className="p-2">1 in 16.6</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-2">1</td>
                      <td className="p-2">0</td>
                      <td className="p-2">TSh 0</td>
                      <td className="p-2">1 in 2.5</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium" rowSpan={3}>
                        3 Spot
                      </td>
                      <td className="p-2">3</td>
                      <td className="p-2">47x</td>
                      <td className="p-2">TSh 47,000</td>
                      <td className="p-2">1 in 72</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">2</td>
                      <td className="p-2">2x</td>
                      <td className="p-2">TSh 2,000</td>
                      <td className="p-2">1 in 7</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">1</td>
                      <td className="p-2">0</td>
                      <td className="p-2">TSh 0</td>
                      <td className="p-2">1 in 2.3</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-2 font-medium">10 Spot</td>
                      <td className="p-2">10</td>
                      <td className="p-2">100,000x</td>
                      <td className="p-2">TSh 100,000,000</td>
                      <td className="p-2">1 in 8,911,711</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Overall Odds</h3>
                <p>
                  The overall odds of winning a prize in Tanzania Keno vary based on how many numbers you choose to
                  play. The more numbers you play, the better your chances of winning a prize, but the harder it is to
                  match all your numbers.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="play-demo" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Play Tanzania Keno Demo</h2>
              <p className="mb-6">
                Try our demo to see how Tanzania Keno works. Select up to 10 numbers, place your bet, and see if you
                win!
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-blue-900 text-white p-4 rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">Select Your Numbers (1-80)</h3>
                      <div className="text-sm">
                        Selected: {selectedNumbers.length}/{MAX_SELECTIONS}
                      </div>
                    </div>
                  </div>

                  <div className="border border-t-0 rounded-b-lg p-4">
                    <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 mb-4">
                      {Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1).map((num) => (
                        <button
                          key={num}
                          onClick={() => toggleNumber(num)}
                          disabled={
                            isDrawing ||
                            (gameState === "selecting" &&
                              !selectedNumbers.includes(num) &&
                              selectedNumbers.length >= MAX_SELECTIONS)
                          }
                          className={`
                            aspect-square flex items-center justify-center text-sm sm:text-base rounded-full
                            ${
                              isMatch(num)
                                ? "bg-green-500 text-white font-bold"
                                : selectedNumbers.includes(num)
                                  ? "bg-blue-600 text-white"
                                  : isDrawn(num)
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                            }
                            ${isDrawing || (gameState === "selecting" && !selectedNumbers.includes(num) && selectedNumbers.length >= MAX_SELECTIONS) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                            transition-all duration-200
                          `}
                        >
                          {num}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <div className="w-full sm:w-auto">
                        <label className="block text-sm font-medium mb-1">Bet Amount (TSh)</label>
                        <select
                          value={betAmount}
                          onChange={(e) => setBetAmount(Number(e.target.value))}
                          disabled={isDrawing || gameState === "drawing"}
                          className="w-full p-2 border rounded"
                        >
                          <option value={500}>TSh 500</option>
                          <option value={1000}>TSh 1,000</option>
                          <option value={2000}>TSh 2,000</option>
                          <option value={5000}>TSh 5,000</option>
                          <option value={10000}>TSh 10,000</option>
                        </select>
                      </div>

                      <div className="flex gap-2 w-full sm:w-auto">
                        {gameState === "idle" || gameState === "selecting" ? (
                          <Button
                            onClick={startDraw}
                            disabled={selectedNumbers.length === 0 || isDrawing}
                            className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
                          >
                            Play Now
                          </Button>
                        ) : (
                          <Button onClick={resetGame} className="flex-1 sm:flex-none">
                            <RefreshCw className="mr-2 h-4 w-4" /> Play Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-blue-900 text-white p-4 rounded-t-lg">
                    <h3 className="font-bold">Game Status</h3>
                  </div>

                  <div className="border border-t-0 rounded-b-lg p-4">
                    {gameState === "idle" && (
                      <div className="text-center py-4">
                        <p className="text-gray-500">Select your numbers to start</p>
                      </div>
                    )}

                    {gameState === "selecting" && (
                      <div>
                        <div className="mb-4">
                          <div className="font-medium">Your Selection:</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedNumbers.length > 0 ? (
                              selectedNumbers
                                .sort((a, b) => a - b)
                                .map((num) => (
                                  <span
                                    key={num}
                                    className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center"
                                  >
                                    {num}
                                  </span>
                                ))
                            ) : (
                              <span className="text-gray-500">No numbers selected</span>
                            )}
                          </div>
                        </div>

                        <div className="text-sm text-gray-600">
                          Select up to {MAX_SELECTIONS} numbers and click Play Now
                        </div>
                      </div>
                    )}

                    {gameState === "drawing" && (
                      <div>
                        <div className="mb-4">
                          <div className="font-medium">Your Selection:</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedNumbers
                              .sort((a, b) => a - b)
                              .map((num) => (
                                <span
                                  key={num}
                                  className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center"
                                >
                                  {num}
                                </span>
                              ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="font-medium flex items-center gap-2">
                            <Clock className="h-4 w-4 animate-spin" /> Drawing Numbers:
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {drawnNumbers.length > 0 ? (
                              drawnNumbers.map((num) => (
                                <motion.span
                                  key={num}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className={`inline-block w-8 h-8 rounded-full flex items-center justify-center
                                  ${selectedNumbers.includes(num) ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                                >
                                  {num}
                                </motion.span>
                              ))
                            ) : (
                              <span className="text-gray-500">Drawing...</span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {gameState === "complete" && (
                      <div>
                        <div className="mb-4">
                          <div className="font-medium">Your Selection:</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedNumbers
                              .sort((a, b) => a - b)
                              .map((num) => (
                                <span
                                  key={num}
                                  className={`inline-block w-8 h-8 rounded-full flex items-center justify-center
                                ${drawnNumbers.includes(num) ? "bg-green-500 text-white" : "bg-blue-600 text-white"}`}
                                >
                                  {num}
                                </span>
                              ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="font-medium">Drawn Numbers:</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {drawnNumbers.slice(0, 10).map((num) => (
                              <span
                                key={num}
                                className={`inline-block w-8 h-8 rounded-full flex items-center justify-center
                                ${selectedNumbers.includes(num) ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                              >
                                {num}
                              </span>
                            ))}
                          </div>
                          {drawnNumbers.length > 10 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {drawnNumbers.slice(10).map((num) => (
                                <span
                                  key={num}
                                  className={`inline-block w-8 h-8 rounded-full flex items-center justify-center
                                  ${selectedNumbers.includes(num) ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                                >
                                  {num}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="mt-6 p-4 rounded-lg bg-blue-50">
                          <div className="text-lg font-bold mb-2">Results:</div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Numbers Matched:</span>
                              <span className="font-bold">
                                {matches} of {selectedNumbers.length}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Bet Amount:</span>
                              <span className="font-bold">TSh {betAmount.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Win Amount:</span>
                              <span className="font-bold text-lg text-green-600">TSh {winAmount.toLocaleString()}</span>
                            </div>
                          </div>

                          {winAmount > 0 && (
                            <div className="mt-4 text-center">
                              <div className="text-green-600 font-bold text-lg mb-2">Congratulations! You won!</div>
                              <Button className="bg-green-600 hover:bg-green-700">
                                <Check className="mr-2 h-4 w-4" /> Claim Prize
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <ChatCard />
    </main>
  )
}
