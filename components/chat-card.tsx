"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"

export default function ChatCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    // Simulate receiving a notification after 10 seconds
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNotification(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (hasNotification) {
      setHasNotification(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:right-8 z-40 w-[320px] md:w-[380px]"
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
              <div className="bg-[#0a1172]/90 text-white p-4 flex justify-between items-center">
                <h3 className="font-bold">{t("chat.title")}</h3>
                <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm">{t("chat.welcome")}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">{t("chat.help")}</p>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t("chat.placeholder")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Button size="icon" className="bg-[#0a1172] hover:bg-blue-800">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="fixed bottom-4 right-4 md:right-8 z-30 bg-[#0a1172] text-white p-3 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
        style={{
          boxShadow:
            "0 4px 14px rgba(0,0,0,0.25), inset 0 -2px 5px rgba(0,0,0,0.3), inset 0 2px 5px rgba(255,255,255,0.2)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
      >
        <MessageCircle className="h-6 w-6" />
        {hasNotification && (
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full animate-pulse">
            <span className="sr-only">New notification</span>
          </span>
        )}
      </motion.button>
    </>
  )
}
