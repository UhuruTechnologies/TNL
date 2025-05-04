"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Menu, X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "@/components/language-selector"
import { useTranslation } from "@/lib/translations"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full bg-[#0a1172] text-white"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-14 items-center justify-between px-2 sm:px-4">
          <div className="flex items-center gap-2 md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo100.png"
                alt="Tanzania National Lottery"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="hidden font-bold md:inline-block">Tanzania National Lottery</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="/play-now" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              {t("nav.play")}
            </Link>
            <Link href="/games" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              {t("nav.games")}
            </Link>
            <Link href="/games/keno" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              Keno
            </Link>
            <Link href="/promotions" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              {t("nav.promotions")}
            </Link>
            <Link
              href="/daily-check-in"
              className="text-sm font-medium hover:text-yellow-300 transition-colors flex items-center gap-1"
            >
              <Gift className="h-3.5 w-3.5" />
              Daily Check-in
            </Link>
            <Link href="/player-resources" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              {t("nav.resources")}
            </Link>
            <Link href="/winner-spotlight" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              {t("nav.winners")}
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-yellow-300 transition-colors">
              {t("nav.about")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />

            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-900">
              <Search className="h-5 w-5" />
            </Button>

            <div className="hidden md:flex gap-2">
              <Button variant="ghost" className="text-white hover:bg-blue-900">
                {t("login")}
              </Button>
              <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">{t("register")}</Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-blue-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-[#0a1172] pt-14 px-4 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-4 py-6">
            <Link
              href="/play-now"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.play")}
            </Link>
            <Link
              href="/games"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.games")}
            </Link>
            <Link
              href="/games/keno"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Keno
            </Link>
            <Link
              href="/promotions"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.promotions")}
            </Link>
            <Link
              href="/daily-check-in"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Gift className="h-4 w-4" />
              Daily Check-in
            </Link>
            <Link
              href="/player-resources"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.resources")}
            </Link>
            <Link
              href="/winner-spotlight"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.winners")}
            </Link>
            <Link
              href="/about-us"
              className="text-white text-lg font-medium p-2 hover:bg-blue-900 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1 text-white border-white hover:bg-blue-900">
                {t("login")}
              </Button>
              <Button className="flex-1 bg-yellow-500 text-blue-900 hover:bg-yellow-400">{t("register")}</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  )
}
