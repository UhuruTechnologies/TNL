"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"
import Link from "next/link"

export default function CookieNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    // Check if the user has already seen the notification
    const hasSeenNotification = localStorage.getItem("hasSeenNotification")

    if (!hasSeenNotification) {
      // Show notification after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("hasSeenNotification", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 max-w-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900/90 to-indigo-800/90 p-4 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 text-white hover:bg-blue-800/50 h-6 w-6"
                onClick={handleAccept}
              >
                <X className="h-3 w-3" />
              </Button>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0">
                  <Gift className="h-5 w-5 text-blue-900" />
                </div>

                <div>
                  <h3 className="font-bold text-base text-white mb-1">Daily Check-in Rewards!</h3>
                  <p className="text-blue-100 text-sm mb-3">
                    Log in daily for our FREE weekly draw with prizes up to TSh 1,000,000!
                  </p>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 text-xs px-3 py-1 h-auto"
                    >
                      <Link href="/daily-check-in">Check in Now</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAccept}
                      className="border-white/70 text-white hover:bg-blue-800/50 hover:text-white text-xs px-3 py-1 h-auto"
                    >
                      Got it
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
