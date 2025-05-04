"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, Gift, Play, CheckCircle, Clock, Trophy, Star } from "lucide-react"
import Image from "next/image"
import ChatCard from "@/components/chat-card"
import confetti from "canvas-confetti"

export default function DailyCheckInPage() {
  const [adWatched, setAdWatched] = useState(false)
  const [countdown, setCountdown] = useState(10)
  const [isPlaying, setIsPlaying] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)
  const [streak, setStreak] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Load streak from localStorage
  useEffect(() => {
    const savedStreak = localStorage.getItem("checkInStreak")
    if (savedStreak) {
      setStreak(Number.parseInt(savedStreak))
    }

    // Check if already checked in today
    const lastCheckIn = localStorage.getItem("lastCheckIn")
    if (lastCheckIn === new Date().toDateString()) {
      setCheckedIn(true)
      setAdWatched(true)
    }
  }, [])

  // Handle countdown timer
  useEffect(() => {
    if (isPlaying && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (isPlaying && countdown === 0) {
      setAdWatched(true)
      setIsPlaying(false)
    }
  }, [isPlaying, countdown])

  const handlePlayAd = () => {
    setIsPlaying(true)
  }

  const handleCheckIn = () => {
    // Get today's date as a string
    const today = new Date().toDateString()

    // Check if already checked in today
    const lastCheckIn = localStorage.getItem("lastCheckIn")

    if (lastCheckIn !== today) {
      // Calculate streak
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayString = yesterday.toDateString()

      let newStreak = 1
      if (lastCheckIn === yesterdayString) {
        // Continued streak
        newStreak = streak + 1
      }

      // Save check-in data
      localStorage.setItem("lastCheckIn", today)
      localStorage.setItem("checkInStreak", newStreak.toString())

      setStreak(newStreak)
      setCheckedIn(true)

      // Trigger confetti effect
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2

        confetti({
          particleCount: 100,
          spread: 70,
          origin: {
            x: x / window.innerWidth,
            y: y / window.innerHeight,
          },
        })
      }
    }
  }

  // Weekly rewards based on streak
  const weeklyRewards = [
    { day: 1, reward: "Entry into weekly draw" },
    { day: 2, reward: "2× entries into weekly draw" },
    { day: 3, reward: "3× entries + TSh 1,000 bonus" },
    { day: 4, reward: "4× entries + TSh 2,000 bonus" },
    { day: 5, reward: "5× entries + TSh 5,000 bonus" },
    { day: 6, reward: "10× entries + TSh 10,000 bonus" },
    { day: 7, reward: "20× entries + TSh 20,000 bonus" },
  ]

  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Daily Check-in</h1>
      <p className="text-gray-600 mb-8 text-center md:text-left">
        Check in daily to earn rewards and enter our weekly free draw!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-800 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6" />
                  <h2 className="text-xl font-bold">Daily Check-in</h2>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span>Your streak</span>
                  <span className="font-bold">
                    {streak} day{streak !== 1 ? "s" : ""}
                  </span>
                </div>

                <Progress value={(streak % 7) * (100 / 7)} className="h-2 mb-4" />

                <div className="grid grid-cols-7 gap-1 mb-6">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`aspect-square rounded-full flex items-center justify-center text-xs font-bold ${
                        streak % 7 >= day || (streak % 7 === 0 && day === 7)
                          ? "bg-yellow-500 text-blue-900"
                          : "bg-blue-800 text-white"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {!checkedIn ? (
                  <div className="space-y-4">
                    {!isPlaying && !adWatched ? (
                      <Button
                        onClick={handlePlayAd}
                        className="w-full bg-yellow-500 text-blue-900 hover:bg-yellow-400 flex items-center justify-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        Watch Ad to Check In
                      </Button>
                    ) : isPlaying ? (
                      <div className="bg-black rounded-lg p-2 md:p-4 relative">
                        <div className="relative h-36 sm:h-48 md:h-64 rounded overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=500"
                            alt="Video advertisement"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center">
                              <Play className="h-6 w-6" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 bg-black/80 text-white px-3 py-1 rounded-full flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span className="text-sm">{countdown}s</span>
                        </div>
                      </div>
                    ) : (
                      <Button
                        ref={buttonRef}
                        onClick={handleCheckIn}
                        className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 h-16 text-lg"
                      >
                        <Gift className="h-5 w-5" />
                        Check In Now
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="bg-green-600 text-white p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <p className="font-bold">You've checked in today!</p>
                      <p className="text-sm">Come back tomorrow to continue your streak.</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <h3 className="text-lg font-bold">Weekly Prize Draw</h3>
              </div>

              <p className="text-gray-600 mb-4">
                Every check-in gives you entries into our weekly prize draw. Maintain your streak for bonus entries!
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  This Week's Prizes
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>1st Prize:</span>
                    <span className="font-bold">TSh 1,000,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>2nd Prize:</span>
                    <span className="font-bold">TSh 500,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>3rd Prize:</span>
                    <span className="font-bold">TSh 250,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>10 Runner-up Prizes:</span>
                    <span className="font-bold">TSh 50,000 each</span>
                  </li>
                </ul>
                <p className="text-xs mt-2 text-gray-500">Draw takes place every Sunday at 8:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Weekly Streak Rewards</h3>

              <div className="space-y-4">
                {weeklyRewards.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 ${
                      streak >= item.day ? "border-green-500 bg-green-50" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            streak >= item.day ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.day}
                        </div>
                        <span className="font-medium">Day {item.day}</span>
                      </div>

                      {streak >= item.day && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>

                    <div className="mt-2 ml-11 text-sm">{item.reward}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">How it works</h4>
                <ul className="space-y-2 text-sm list-disc pl-5">
                  <li>Check in daily by watching a short ad</li>
                  <li>Each check-in earns you entries into our weekly prize draw</li>
                  <li>Maintain your streak for bonus rewards</li>
                  <li>After 7 consecutive days, your streak rewards reset but your streak count continues</li>
                  <li>Missing a day resets your streak to 0</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Winners</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-800 flex-shrink-0 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold">Maria J. from Dar es Salaam</div>
                  <div className="text-blue-200 text-sm">Won TSh 1,000,000 in last week's draw</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-800 flex-shrink-0 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold">Thomas K. from Arusha</div>
                  <div className="text-blue-200 text-sm">Won TSh 500,000 in last week's draw</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-800 flex-shrink-0 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <div className="font-bold">Grace M. from Mwanza</div>
                  <div className="text-blue-200 text-sm">Won TSh 250,000 in last week's draw</div>
                </div>
              </div>
            </div>

            <Button className="w-full mt-4 bg-white text-blue-900 hover:bg-gray-100">View All Winners</Button>
          </div>
        </div>
      </div>

      <ChatCard />
    </main>
  )
}
