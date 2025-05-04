import Hero from "@/components/hero"
import GameCards from "@/components/game-cards"
import PromotionalSection from "@/components/promotional-section"
import WinnerSpotlight from "@/components/winner-spotlight"
import JackpotCounter from "@/components/jackpot-counter"
import ResponsibleGamingBanner from "@/components/responsible-gaming-banner"
import ChatCard from "@/components/chat-card"
import CookieNotification from "@/components/cookie-notification"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <JackpotCounter />
      <GameCards />
      <PromotionalSection />
      <WinnerSpotlight />
      <ResponsibleGamingBanner />
      <ChatCard />
      <CookieNotification />
    </main>
  )
}
