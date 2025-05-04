import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import ChatCard from "@/components/chat-card"

export default function PlayerResourcesPage() {
  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Player Resources</h1>
      <p className="text-gray-600 mb-8 text-center md:text-left">
        Everything you need to know about playing and winning
      </p>

      <Tabs defaultValue="how-to-play" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="how-to-play">How to Play</TabsTrigger>
          <TabsTrigger value="claim-prizes">Claim Prizes</TabsTrigger>
          <TabsTrigger value="responsible-gaming">Responsible Gaming</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="how-to-play" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">How to Play</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Choose Your Game</h3>
                    <p className="text-gray-600">
                      Select from our range of exciting lottery games, each with different prizes and odds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Pick Your Numbers</h3>
                    <p className="text-gray-600">
                      Select your lucky numbers or use Quick Pick to have them randomly generated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Purchase Your Ticket</h3>
                    <p className="text-gray-600">
                      Buy your ticket online or from an authorized retailer across Tanzania.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Check Results</h3>
                    <p className="text-gray-600">
                      Watch the draw live or check results online, in newspapers, or at retailers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Claim Your Prize</h3>
                    <p className="text-gray-600">If you win, follow our simple process to claim your prize.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg">Play Now</Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How to play guide"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="claim-prizes" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How to Claim Your Prize</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Small Prizes</CardTitle>
                  <CardDescription>Up to TSh 100,000</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Small prizes can be claimed at any authorized retailer. Just present your winning ticket.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medium Prizes</CardTitle>
                  <CardDescription>TSh 100,001 to TSh 5,000,000</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Medium prizes can be claimed at regional lottery offices. Bring your ID and winning ticket.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Jackpots</CardTitle>
                  <CardDescription>Over TSh 5,000,000</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Major prizes must be claimed at our headquarters in Dar es Salaam. Contact us for arrangements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-4">Required Documents</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Original winning ticket</li>
              <li>Valid government-issued ID (passport, national ID, or driver's license)</li>
              <li>Completed claim form (available at lottery offices or downloadable)</li>
              <li>Bank account details for electronic transfers</li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-md mb-6">
              <h4 className="font-bold mb-2">Important Notes:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Prizes must be claimed within 90 days of the draw date</li>
                <li>Tickets are bearer instruments - protect them like cash</li>
                <li>Sign the back of your ticket immediately after purchase</li>
                <li>Prizes over TSh 1,000,000 are subject to applicable taxes</li>
              </ul>
            </div>

            <Button asChild>
              <Link href="/download/claim-form">Download Claim Form</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="responsible-gaming" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Play Responsibly</h2>
                <p className="mb-4">
                  At Tanzania National Lottery, we are committed to promoting responsible gaming. We want our games to
                  be a source of entertainment and excitement, not financial stress or addiction.
                </p>
                <p>
                  Remember that lottery games are a form of entertainment, not a way to make money or solve financial
                  problems.
                </p>
              </div>

              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Responsible gaming"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Responsible Gaming Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-bold mb-2">Set a Budget</h4>
                <p className="text-sm">Decide how much you can afford to spend on lottery games and stick to it.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-bold mb-2">Play for Fun</h4>
                <p className="text-sm">
                  Play for entertainment, not as a way to make money or solve financial problems.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-bold mb-2">Know the Odds</h4>
                <p className="text-sm">
                  Understand that winning is based on chance and the odds of winning jackpots are very low.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-bold mb-2">Take Breaks</h4>
                <p className="text-sm">Don't play continuously. Take breaks and maintain balance in your life.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="mb-4">If you or someone you know is struggling with gambling problems, help is available.</p>

            <div className="bg-green-50 p-4 rounded-md mb-6">
              <h4 className="font-bold mb-2">Support Resources:</h4>
              <ul className="space-y-2">
                <li>National Gambling Helpline: 0800-123-4567</li>
                <li>Email: support@responsiblegaming.co.tz</li>
                <li>Visit: www.gamblingawareness.org</li>
              </ul>
            </div>

            <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md">
              <div className="font-bold text-xl mr-4">18+</div>
              <div className="text-sm">You must be 18 years or older to play Tanzania National Lottery games</div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faqs" className="mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I know if I've won?</AccordionTrigger>
                <AccordionContent>
                  You can check if you've won by watching the live draw on TV, checking our website, using our mobile
                  app, calling our results hotline at 0800-123-4567, or visiting any authorized retailer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How long do I have to claim my prize?</AccordionTrigger>
                <AccordionContent>
                  You have 90 days from the date of the draw to claim your prize. After this period, unclaimed prizes
                  are transferred to the Good Causes Fund.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Are lottery winnings taxed?</AccordionTrigger>
                <AccordionContent>
                  Yes, prizes over TSh 1,000,000 are subject to a 15% withholding tax as per Tanzanian tax regulations.
                  The tax is automatically deducted before the prize is paid out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can I play the lottery online?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can play all Tanzania National Lottery games online through our website or mobile app. You'll
                  need to create an account, verify your identity, and add funds to your wallet before playing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What happens if I lose my ticket?</AccordionTrigger>
                <AccordionContent>
                  Lottery tickets are bearer instruments, which means whoever presents the ticket can claim the prize.
                  We strongly recommend signing the back of your ticket immediately after purchase. If you purchased
                  online, your tickets are securely stored in your account.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How are the winning numbers drawn?</AccordionTrigger>
                <AccordionContent>
                  Our draws use certified random number generation equipment that is regularly tested and audited by
                  independent third parties to ensure complete randomness and fairness. Draws are conducted under the
                  supervision of auditors and government representatives.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 bg-gray-50 p-4 rounded-md">
              <h3 className="font-bold mb-2">Still have questions?</h3>
              <p className="mb-4">Contact our customer support team:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="font-medium">Phone:</div>
                  <div>+255 123 456 789</div>
                </div>
                <div>
                  <div className="font-medium">Email:</div>
                  <div>support@tanzanialottery.co.tz</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <ChatCard />
    </main>
  )
}
