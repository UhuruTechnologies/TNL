"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"

const slides = [
  {
    id: 1,
    titleKey: "hero.title1",
    subtitleKey: "hero.subtitle1",
    image: "/videos/tzl1.mp4",
    video: "/videos/tzl1.mp4",
    color: "from-yellow-500 to-yellow-600",
    prizes: [
      { label: "TOP PRIZE", amount: "TSh 2,000,000,000" },
      { label: "2ND CHANCE", amount: "TSh 500,000,000" },
    ],
    ctaKey: "hero.cta1",
  },
  {
    id: 2,
    titleKey: "hero.title2",
    subtitleKey: "hero.subtitle2",
    image: "/videos/tzl.mp4",
    video: "/videos/tzl.mp4",
    color: "from-yellow-400 to-yellow-600",
    ctaKey: "hero.cta2",
  },
  {
    id: 3,
    titleKey: "hero.title3",
    subtitleKey: "hero.subtitle3",
    image: "/images/winners-celebration1.png",
    color: "from-blue-500 to-indigo-700",
    ctaKey: "hero.cta3",
  },
  {
    id: 4,
    titleKey: "hero.tanzanians",
    subtitleKey: "hero.coming",
    image: "/images/winners-celebration2.png",
    color: "from-green-600 to-green-800",
    ctaKey: "hero.cta2",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Handle video playback when slide changes
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
      }
    })

    // Play the current video if it exists
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo && slides[currentSlide].video) {
      currentVideo.currentTime = 0
      const playPromise = currentVideo.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video play error:", error)
        })
      }
    }
  }, [currentSlide])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-80 z-10`} />

          {slides[currentSlide].video ? (
            <video
              ref={(el) => (videoRefs.current[currentSlide] = el)}
              src={slides[currentSlide].video}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              loop
            />
          ) : (
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={t(slides[currentSlide].titleKey)}
              fill
              className="object-cover"
              priority
            />
          )}

          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {t(slides[currentSlide].titleKey)}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {t(slides[currentSlide].subtitleKey)}
                </motion.p>

                {slides[currentSlide].prizes && (
                  <motion.div
                    className="flex flex-wrap gap-4 mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {slides[currentSlide].prizes.map((prize, index) => (
                      <div key={index} className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-600 flex flex-col items-center justify-center bg-white text-red-600 transform rotate-12">
                          <div className="text-xs font-bold">{prize.label}</div>
                          <div className="text-sm md:text-lg font-bold">{prize.amount.split(" ")[0]}</div>
                          <div className="text-xs font-bold">{prize.amount.split(" ")[1]}</div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 font-bold px-6 py-5 text-base md:px-8 md:py-6 md:text-lg h-auto">
                    {t(slides[currentSlide].ctaKey)}
                  </Button>
                </motion.div>
              </div>

              {currentSlide === 0 && (
                <motion.div
                  className="hidden md:block"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <div className="relative h-[300px] w-[200px] mx-auto">
                    <Image src="/images/logo100.png" alt="National Lottery Logo" fill className="object-contain" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
