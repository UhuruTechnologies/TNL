"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/translations"

export default function PromotionalSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("promo.title")}</h2>
              <p className="text-lg text-gray-600">{t("promo.description")}</p>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700">{t("promo.cta")}</Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Tanzania iLottery"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/logo.png"
                alt="Tanzania National Lottery"
                width={80}
                height={80}
                className="h-20 w-20"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-blue-100 p-3 rounded-full">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="2nd Chance"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("promo.2ndChance")}</h3>
              <p className="text-gray-600">{t("promo.2ndChanceDesc")}</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-yellow-100 p-3 rounded-full">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Become a Retailer"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("promo.retailer")}</h3>
              <p className="text-gray-600">{t("promo.retailerDesc")}</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-green-100 p-3 rounded-full">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Text JOIN"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("promo.textJoin")}</h3>
              <p className="text-gray-600">{t("promo.textJoinDesc")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
