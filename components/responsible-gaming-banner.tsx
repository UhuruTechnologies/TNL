"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "@/lib/translations"

export default function ResponsibleGamingBanner() {
  const { t } = useTranslation()

  return (
    <section className="py-8 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 p-4 rounded-lg">
              <div className="text-blue-900 font-bold text-xl">18+</div>
            </div>
            <div>
              <h3 className="font-bold">{t("responsible.play")}</h3>
              <p className="text-sm text-gray-300">{t("responsible.only")}</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">{t("responsible.operator")}</p>
            <div className="mt-2">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="ITHUBA"
                width={120}
                height={40}
                className="h-10 inline-block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
