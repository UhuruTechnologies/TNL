"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"

const games = [
  {
    id: 1,
    name: "Bahati Nasibu",
    description: "Our flagship lottery game with massive jackpots",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-gradient-to-br from-blue-600 to-indigo-800",
    link: "/games/bahati-nasibu",
  },
  {
    id: 2,
    name: "Bingo Taifa",
    description: "Fast-paced bingo with multiple daily draws",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-gradient-to-br from-green-600 to-emerald-800",
    link: "/games/bingo-taifa",
  },
  {
    id: 3,
    name: "Tanzania Keno",
    description: "Pick up to 10 numbers and win up to TSh 100,000,000",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-gradient-to-br from-purple-600 to-violet-800",
    link: "/games/keno",
  },
  {
    id: 4,
    name: "Scratch & Win",
    description: "Instant win games with prizes up to TSh 100,000,000",
    image: "/placeholder.svg?height=200&width=200",
    color: "bg-gradient-to-br from-yellow-500 to-amber-700",
    link: "/games/scratch-win",
  },
]

export default function GameCards() {
  const { t } = useTranslation()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("games.title")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("games.subtitle")}</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {games.map((game) => (
            <motion.div key={game.id} variants={item}>
              <Card className="overflow-hidden h-full">
                <div className={`${game.color} p-6 flex justify-center`}>
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={120}
                    height={120}
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href={game.link}>{t("jackpot.play")}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/games">{t("games.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
