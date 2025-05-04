import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import ChatCard from "@/components/chat-card"
import Link from "next/link"

export default function PlayNowPage() {
  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Play Now</h1>
      <p className="text-gray-600 mb-6 text-center md:text-left">
        Choose your favorite lottery games and start playing today!
      </p>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="featured">Featured Games</TabsTrigger>
          <TabsTrigger value="draw">Draw Games</TabsTrigger>
          <TabsTrigger value="instant">Instant Games</TabsTrigger>
          <TabsTrigger value="retail">Find Retailer</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Bahati Nasibu</h3>
                  <div className="bg-yellow-500 text-blue-900 px-2 py-1 rounded text-sm font-bold">JACKPOT</div>
                </div>
                <p className="text-3xl font-bold mt-2">TSh 2,000,000,000</p>
                <p className="text-sm">Next Draw: Wednesday at 8:00 PM</p>
              </div>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Bahati Nasibu"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Our flagship lottery game with massive jackpots and life-changing prizes. Choose 6 numbers from 1-49.
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1">Play Now</Button>
                  <Button variant="outline" className="flex-1">
                    How to Play
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-800 p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Bingo Taifa</h3>
                  <div className="bg-yellow-500 text-green-900 px-2 py-1 rounded text-sm font-bold">DAILY DRAWS</div>
                </div>
                <p className="text-3xl font-bold mt-2">TSh 500,000,000</p>
                <p className="text-sm">Next Draw: Today at 9:00 PM</p>
              </div>
              <CardContent className="p-6">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Bingo Taifa" fill className="object-cover" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Fast-paced bingo with multiple daily draws. Match patterns on your card to win instant prizes.
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1">Play Now</Button>
                  <Button variant="outline" className="flex-1">
                    How to Play
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bahati Mkubwa</CardTitle>
                <CardDescription>Weekly draws with life-changing prizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Bahati Mkubwa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Jackpot:</span>
                  <span className="font-bold">TSh 1,000,000,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next Draw:</span>
                  <span>Friday at 8:00 PM</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scratch & Win</CardTitle>
                <CardDescription>Instant win games with big prizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Scratch & Win"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Top Prize:</span>
                  <span className="font-bold">TSh 100,000,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Price:</span>
                  <span>TSh 500 - TSh 5,000</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Fortune</CardTitle>
                <CardDescription>Daily draws with frequent wins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Daily Fortune"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Jackpot:</span>
                  <span className="font-bold">TSh 10,000,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next Draw:</span>
                  <span>Today at 10:00 PM</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="draw" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-blue-900 text-white">
                <CardTitle>Bahati Nasibu</CardTitle>
                <CardDescription className="text-blue-100">Our flagship lottery game</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Bahati Nasibu"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Jackpot:</span>
                    <span className="font-bold">TSh 2,000,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Draw Days:</span>
                    <span>Wednesday & Saturday</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price:</span>
                    <span>TSh 1,000 per play</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Choose 6 numbers from 1-49. Match all 6 to win the jackpot!
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-green-800 text-white">
                <CardTitle>Bingo Taifa</CardTitle>
                <CardDescription className="text-green-100">Fast-paced bingo game</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=160&width=300" alt="Bingo Taifa" fill className="object-cover" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Jackpot:</span>
                    <span className="font-bold">TSh 500,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Draw Days:</span>
                    <span>Daily (3 times)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price:</span>
                    <span>TSh 500 per card</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">Get a card with 25 numbers and match patterns to win!</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-red-800 text-white">
                <CardTitle>Bahati Mkubwa</CardTitle>
                <CardDescription className="text-red-100">Weekly big jackpot game</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Bahati Mkubwa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Jackpot:</span>
                    <span className="font-bold">TSh 1,000,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Draw Days:</span>
                    <span>Friday</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price:</span>
                    <span>TSh 2,000 per play</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Choose 7 numbers from 1-70. Match all 7 to win the jackpot!
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-purple-800 text-white">
                <CardTitle>Daily Fortune</CardTitle>
                <CardDescription className="text-purple-100">Daily draws with frequent wins</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Daily Fortune"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Jackpot:</span>
                    <span className="font-bold">TSh 10,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Draw Days:</span>
                    <span>Daily</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price:</span>
                    <span>TSh 200 per play</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Choose 4 numbers from 1-20. Match all 4 to win the jackpot!
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-cyan-800 text-white">
                <CardTitle>Power Pick</CardTitle>
                <CardDescription className="text-cyan-100">Multiply your winnings</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=160&width=300" alt="Power Pick" fill className="object-cover" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Jackpot:</span>
                    <span className="font-bold">TSh 750,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Draw Days:</span>
                    <span>Tuesday & Thursday</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price:</span>
                    <span>TSh 1,000 per play</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Choose 5 numbers plus 1 power number to multiply your winnings!
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-amber-800 text-white">
                <CardTitle>Lucky 7</CardTitle>
                <CardDescription className="text-amber-100">Weekly draw with bonus rounds</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=160&width=300" alt="Lucky 7" fill className="object-cover" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Jackpot:</span>
                    <span className="font-bold">TSh 300,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Draw Days:</span>
                    <span>Sunday</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Price:</span>
                    <span>TSh 700 per play</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  Choose 7 numbers for 7 chances to win in different prize tiers!
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="instant" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Gold Rush" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 1,000
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Gold Rush</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 20,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Lucky Gems" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 500
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Lucky Gems</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 10,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Cash Explosion" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 2,000
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Cash Explosion</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 50,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Safari Riches" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 1,000
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Safari Riches</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 25,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Diamond Deluxe" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 5,000
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Diamond Deluxe</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 100,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Lucky 7s" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 700
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Lucky 7s</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 15,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Crossword" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 1,000
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Crossword</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 20,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=300" alt="Bingo Blast" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  TSh 500
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold">Bingo Blast</h3>
                <p className="text-xs text-gray-500 mb-2">Win up to TSh 10,000,000</p>
                <Button size="sm" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="retail" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Find a Retailer Near You</h2>

            <div className="mb-6">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Map of retailers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Search by Location</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <Button>Search</Button>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">Nearest Retailers</h3>
                <ul className="space-y-2">
                  <li className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Central Convenience Store</div>
                    <div className="text-sm text-gray-500">123 Samora Ave, Dar es Salaam</div>
                  </li>
                  <li className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">Lucky Corner Shop</div>
                    <div className="text-sm text-gray-500">45 Nyerere Rd, Dar es Salaam</div>
                  </li>
                  <li className="p-2 bg-gray-50 rounded">
                    <div className="font-medium">City Supermarket</div>
                    <div className="text-sm text-gray-500">78 Uhuru St, Dar es Salaam</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">Become a Retailer</h3>
              <p className="mb-4">
                Interested in becoming a Tanzania National Lottery retailer? Join our network and grow your business.
              </p>
              <Button asChild>
                <Link href="/retailers">Learn More</Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <ChatCard />
    </main>
  )
}
