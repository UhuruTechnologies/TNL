"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import { useTranslation } from "@/lib/translations"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0a1172] text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo100.png"
                alt="Tanzania National Lottery"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold">Tanzania National Lottery</span>
            </Link>
            <p className="text-sm text-blue-200">
              The official lottery of Tanzania, offering exciting games and life-changing prizes.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/play-now" className="text-sm text-blue-200 hover:text-white transition-colors">
                  {t("nav.play")}
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-sm text-blue-200 hover:text-white transition-colors">
                  {t("nav.games")}
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-sm text-blue-200 hover:text-white transition-colors">
                  {t("nav.promotions")}
                </Link>
              </li>
              <li>
                <Link href="/winner-spotlight" className="text-sm text-blue-200 hover:text-white transition-colors">
                  {t("nav.winners")}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm text-blue-200 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-to-play" className="text-sm text-blue-200 hover:text-white transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-blue-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/claim-prize" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Claim a Prize
                </Link>
              </li>
              <li>
                <Link href="/retailers" className="text-sm text-blue-200 hover:text-white transition-colors">
                  Become a Retailer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-blue-200">Phone: +255 123 456 789</li>
              <li className="text-sm text-blue-200">Email: info@tanzanialottery.co.tz</li>
              <li className="text-sm text-blue-200">Address: Dar es Salaam, Tanzania</li>
            </ul>

            <h3 className="font-bold text-lg mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Tanzania National Lottery. {t("footer.rights")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-blue-200 hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/privacy" className="text-xs text-blue-200 hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/cookies" className="text-xs text-blue-200 hover:text-white transition-colors">
              {t("footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
