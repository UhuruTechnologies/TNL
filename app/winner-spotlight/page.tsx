import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ChatCard from "@/components/chat-card"

const featuredWinners = [
  {
    id: 1,
    name: "John M.",
    location: "Dar es Salaam",
    prize: "TSh 500,000,000",
    game: "Bahati Nasibu",
    date: "January 15, 2025",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "I've been playing the lottery for 5 years, and I always believed I would win someday. When I saw my numbers come up, I couldn't believe it! I plan to build a house for my family and start a small business.",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "Arusha",
    prize: "TSh 250,000,000",
    game: "Bingo Taifa",
    date: "February 3, 2025",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "I bought my ticket on a whim while shopping for groceries. I never expected to win such a life-changing amount! I'm going to pay for my children's education and invest the rest for our future.",
  },
  {
    id: 3,
    name: "Michael T.",
    location: "Mwanza",
    prize: "TSh 100,000,000",
    game: "Scratch & Win",
    date: "March 20, 2025",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "I was having a tough day when I decided to try my luck with a scratch card. When I saw the winning symbols, I had to check it three times to be sure! This win has completely changed my life.",
  },
]

const recentWinners = [
  {
    id: 1,
    name: "Grace L.",
    location: "Dodoma",
    prize: "TSh 75,000,000",
    game: "Bahati Mkubwa",
    date: "April 5, 2025",
  },
  {
    id: 2,
    name: "Peter N.",
    location: "Mbeya",
    prize: "TSh 50,000,000",
    game: "Power Pick",
    date: "April 2, 2025",
  },
  {
    id: 3,
    name: "Amina H.",
    location: "Zanzibar",
    prize: "TSh 25,000,000",
    game: "Daily Fortune",
    date: "March 30, 2025",
  },
  {
    id: 4,
    name: "David M.",
    location: "Tanga",
    prize: "TSh 10,000,000",
    game: "Scratch & Win",
    date: "March 28, 2025",
  },
  {
    id: 5,
    name: "Fatima R.",
    location: "Morogoro",
    prize: "TSh 5,000,000",
    game: "Bingo Taifa",
    date: "March 25, 2025",
  },
  {
    id: 6,
    name: "James K.",
    location: "Iringa",
    prize: "TSh 2,000,000",
    game: "Daily Fortune",
    date: "March 23, 2025",
  },
]

export default function WinnerSpotlightPage() {
  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Winner Spotlight</h1>
      <p className="text-gray-600 mb-8 text-center md:text-left">
        Meet our lucky winners and read their inspiring stories
      </p>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="featured">Featured Winners</TabsTrigger>
          <TabsTrigger value="recent">Recent Winners</TabsTrigger>
          <TabsTrigger value="statistics">Winning Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-6">
          <div className="grid grid-cols-1 gap-8">
            {featuredWinners.map((winner) => (
              <Card key={winner.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image src={winner.image || "/placeholder.svg"} alt={winner.name} fill className="object-cover" />
                    </div>
                    <div className="col-span-2 p-6">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold">{winner.name}</h2>
                        <div className="text-gray-500">{winner.location}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Prize Amount</div>
                          <div className="text-xl font-bold text-green-600">{winner.prize}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Game</div>
                          <div className="font-medium">{winner.game}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Win Date</div>
                          <div className="font-medium">{winner.date}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">Winner's Story</div>
                        <p className="text-gray-700">{winner.story}</p>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="outline">Read Full Story</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Winners</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Location</th>
                    <th className="text-left py-3 px-4">Prize</th>
                    <th className="text-left py-3 px-4">Game</th>
                    <th className="text-left py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWinners.map((winner) => (
                    <tr key={winner.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{winner.name}</td>
                      <td className="py-3 px-4">{winner.location}</td>
                      <td className="py-3 px-4 font-medium text-green-600">{winner.prize}</td>
                      <td className="py-3 px-4">{winner.game}</td>
                      <td className="py-3 px-4">{winner.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">Showing 6 of 120 recent winners</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="statistics" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Winning Statistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Prizes by Region</h3>
                <div className="relative h-[300px] bg-gray-100 rounded-md">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Prizes by region chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Prizes by Game</h3>
                <div className="relative h-[300px] bg-gray-100 rounded-md">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Prizes by game chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">Jackpot History</h3>
              <div className="relative h-[300px] bg-gray-100 rounded-md">
                <Image
                  src="/placeholder.svg?height=300&width=1000"
                  alt="Jackpot history chart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500">Total Winners (2025)</div>
                  <div className="text-2xl font-bold">12,547</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500">Total Prize Money (2025)</div>
                  <div className="text-2xl font-bold">TSh 8.2 Billion</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500">Largest Jackpot</div>
                  <div className="text-2xl font-bold">TSh 3.5 Billion</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-gray-500">Jackpot Winners</div>
                  <div className="text-2xl font-bold">24</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <ChatCard />
    </main>
  )
}
