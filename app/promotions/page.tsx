import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ChatCard from "@/components/chat-card"

const promotions = [
  {
    id: 1,
    title: "New Player Bonus",
    description: "Get a free ticket when you register and make your first purchase",
    image: "/placeholder.svg?height=200&width=400",
    expiryDate: "December 31, 2025",
    isNew: true,
  },
  {
    id: 2,
    title: "Double Chance Weekends",
    description: "Buy one ticket and get a second chance to win every weekend",
    image: "/placeholder.svg?height=200&width=400",
    expiryDate: "Ongoing",
    isNew: false,
  },
  {
    id: 3,
    title: "Independence Day Special",
    description: "Special draws with extra prizes to celebrate Tanzania's independence",
    image: "/placeholder.svg?height=200&width=400",
    expiryDate: "December 9, 2025",
    isNew: true,
  },
  {
    id: 4,
    title: "Refer a Friend",
    description: "Get TSh 5,000 bonus credit when you refer a friend who makes a purchase",
    image: "/placeholder.svg?height=200&width=400",
    expiryDate: "Ongoing",
    isNew: false,
  },
]

export default function PromotionsPage() {
  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Promotions</h1>
      <p className="text-gray-600 mb-8 text-center md:text-left">Check out our latest promotions and special offers</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <Card key={promo.id} className="overflow-hidden">
            <div className="relative">
              <Image
                src={promo.image || "/placeholder.svg"}
                alt={promo.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              {promo.isNew && <Badge className="absolute top-2 right-2 bg-red-500">NEW</Badge>}
            </div>
            <CardHeader>
              <CardTitle>{promo.title}</CardTitle>
              <CardDescription>Expires: {promo.expiryDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{promo.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Claim Offer</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Promotions</h2>
        <p className="mb-6">Stay updated with our latest promotions and offers by subscribing to our newsletter.</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          <Button>Subscribe</Button>
        </div>
      </div>

      <ChatCard />
    </main>
  )
}
