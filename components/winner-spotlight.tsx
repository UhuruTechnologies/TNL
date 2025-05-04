"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"

const winners = [
  {
    id: 1,
    name: "John M.",
    location: "Dar es Salaam",
    prize: "TSh 500,000,000",
    game: "Bahati Nasibu",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "Arusha",
    prize: "TSh 250,000,000",
    game: "Bingo Taifa",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Michael T.",
    location: "Mwanza",
    prize: "TSh 100,000,000",
    game: "Scratch & Win",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function WinnerSpotlight() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t("winners.title")}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t("winners.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image src={winner.image || "/placeholder.svg"} alt={winner.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="text-yellow-400 font-bold text-xl">{winner.prize}</div>
                    <h3 className="text-xl font-bold">{winner.name}</h3>
                    <p className="text-blue-100">{winner.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-blue-100">
                  Won playing <span className="font-bold">{winner.game}</span>
                </p>
                <p className="mt-2 text-sm text-blue-100">"{t("winners.testimonial")}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">{t("winners.viewMore")}</Button>
        </div>
      </div>
    </section>
  )
}
