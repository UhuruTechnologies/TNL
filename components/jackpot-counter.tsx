"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"

export default function JackpotCounter() {
  const [jackpot, setJackpot] = useState(2000000000)
  const { t } = useTranslation()

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 1000000))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  return (
    <section className="py-10 bg-yellow-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">{t("jackpot.title")}</h2>
            <p className="text-blue-900/80">{t("jackpot.next")}</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">TSh {formatNumber(jackpot)}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">{t("jackpot.play")}</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
