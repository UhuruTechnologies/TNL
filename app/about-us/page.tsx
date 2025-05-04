import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ChatCard from "@/components/chat-card"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Mwangi",
    title: "Chief Executive Officer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "John Kimathi",
    title: "Chief Financial Officer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Grace Ochieng",
    title: "Chief Operations Officer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Michael Ndosi",
    title: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutUsPage() {
  return (
    <main className="container px-4 py-8 pb-20 md:pb-8">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-left">About Us</h1>
      <p className="text-gray-600 mb-8 text-center md:text-left">Learn more about the Tanzania National Lottery</p>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">Our Story</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="impact">Social Impact</TabsTrigger>
          <TabsTrigger value="careers">Careers</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                The Tanzania National Lottery was established in 2020 with a mission to provide exciting gaming
                opportunities while generating funds for national development projects and good causes across Tanzania.
              </p>
              <p>
                As the official national lottery of Tanzania, we operate under license from the Gaming Board of Tanzania
                and are committed to the highest standards of integrity, security, and responsible gaming.
              </p>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Tanzania National Lottery headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission & Vision</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p>
                  To provide entertaining and responsible gaming experiences that generate funds for national
                  development and create life-changing opportunities for our players.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>
                  To be the most trusted and innovative lottery in Africa, making a positive impact on communities
                  across Tanzania while delivering world-class gaming experiences.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Integrity</h3>
                <p className="text-sm">We operate with honesty and transparency in all our activities.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-sm">We continuously seek new ways to improve our games and services.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Responsibility</h3>
                <p className="text-sm">We promote responsible gaming and ethical business practices.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-sm">We are committed to making a positive impact in Tanzanian communities.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-sm">We strive for the highest standards in everything we do.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Inclusivity</h3>
                <p className="text-sm">We create opportunities that benefit all Tanzanians.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Leadership Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-gray-500">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Board of Directors</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Hon. James Mbatia</h3>
                  <p className="text-gray-500 mb-1">Chairperson</p>
                  <p className="text-sm">
                    Former Minister of Education with extensive experience in public service and governance.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Dr. Amina Hassan</h3>
                  <p className="text-gray-500 mb-1">Vice Chairperson</p>
                  <p className="text-sm">
                    Economist and business leader with expertise in financial management and strategic planning.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Mr. Peter Masawe</h3>
                  <p className="text-gray-500 mb-1">Board Member</p>
                  <p className="text-sm">
                    Technology entrepreneur with a focus on digital innovation and financial inclusion.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Ms. Grace Nyirenda</h3>
                  <p className="text-gray-500 mb-1">Board Member</p>
                  <p className="text-sm">Legal expert specializing in gaming regulations and compliance.</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Mr. David Mkwawa</h3>
                  <p className="text-gray-500 mb-1">Board Member</p>
                  <p className="text-sm">
                    Marketing professional with extensive experience in consumer goods and services.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Dr. Sarah Mwangi</h3>
                  <p className="text-gray-500 mb-1">CEO & Board Member</p>
                  <p className="text-sm">
                    Executive leader with a background in business administration and public policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-4">
                The Tanzania National Lottery employs over 200 dedicated professionals across the country, working in
                various departments including:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Operations and Game Management</li>
                <li>Technology and Digital Services</li>
                <li>Marketing and Communications</li>
                <li>Finance and Administration</li>
                <li>Retail Network Management</li>
                <li>Customer Service</li>
                <li>Corporate Social Responsibility</li>
                <li>Legal and Compliance</li>
              </ul>

              <p className="mt-4">
                Our diverse team is committed to delivering exceptional gaming experiences while upholding the highest
                standards of integrity and responsible gaming.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Social Impact</h2>
              <p className="mb-4">
                The Tanzania National Lottery is more than just games of chance. We're committed to making a positive
                impact across Tanzania through our Good Causes Fund, which supports projects in education, healthcare,
                sports, arts, culture, and community development.
              </p>
              <p>
                Since our establishment in 2020, we have contributed over TSh 50 billion to various social causes and
                development projects throughout the country.
              </p>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Social impact project"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Impact Areas</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=30&width=30" alt="Education icon" width={30} height={30} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p className="text-sm text-gray-600">
                    Building schools, providing scholarships, and supporting educational programs across Tanzania.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=30&width=30" alt="Healthcare icon" width={30} height={30} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Healthcare</h3>
                  <p className="text-sm text-gray-600">
                    Funding medical facilities, equipment, and healthcare initiatives in underserved communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=30&width=30" alt="Sports icon" width={30} height={30} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Sports</h3>
                  <p className="text-sm text-gray-600">
                    Supporting sports development programs, facilities, and athletes at all levels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=30&width=30" alt="Arts icon" width={30} height={30} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Arts & Culture</h3>
                  <p className="text-sm text-gray-600">
                    Preserving and promoting Tanzanian cultural heritage and supporting the arts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=30&width=30" alt="Community icon" width={30} height={30} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Community Development</h3>
                  <p className="text-sm text-gray-600">
                    Funding infrastructure projects, community centers, and local initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Image src="/placeholder.svg?height=30&width=30" alt="Environment icon" width={30} height={30} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Environment</h3>
                  <p className="text-sm text-gray-600">
                    Supporting conservation efforts and sustainable environmental initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="School project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-bold text-lg mb-2">Mwanza School Renovation Project</h3>
                    <p className="mb-4">
                      We funded the complete renovation of five primary schools in the Mwanza region, providing modern
                      classrooms, libraries, and computer labs for over 2,000 students.
                    </p>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Impact:</div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved learning environment for 2,000+ students</li>
                        <li>Increased enrollment by 35%</li>
                        <li>Improved academic performance by 28%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Healthcare project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-bold text-lg mb-2">Rural Healthcare Initiative</h3>
                    <p className="mb-4">
                      We established mobile health clinics serving remote communities in five regions, providing
                      essential healthcare services to over 50,000 people annually.
                    </p>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Impact:</div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Access to healthcare for 50,000+ rural residents</li>
                        <li>Reduced maternal mortality by 40% in target areas</li>
                        <li>Improved vaccination rates by 65%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Sports project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-bold text-lg mb-2">Youth Sports Development Program</h3>
                    <p className="mb-4">
                      We've established a nationwide sports development program that identifies and nurtures young
                      talent across multiple sports disciplines.
                    </p>
                    <div className="text-sm text-gray-500">
                      <div className="font-medium">Impact:</div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Training for 5,000+ young athletes annually</li>
                        <li>Built 25 community sports facilities</li>
                        <li>Produced 12 international-level athletes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="careers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="mb-4">
                At Tanzania National Lottery, we're always looking for talented individuals who share our values and
                passion for making a difference. We offer exciting career opportunities across various departments and
                locations.
              </p>
              <p>
                Join us and be part of an organization that combines innovation, social impact, and exciting work in a
                dynamic industry.
              </p>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Team members working together"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Meaningful Work</h3>
                <p className="text-sm text-gray-600">
                  Make a real difference in communities across Tanzania through our Good Causes Fund.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Professional Growth</h3>
                <p className="text-sm text-gray-600">
                  Continuous learning opportunities, training programs, and career advancement paths.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Innovative Environment</h3>
                <p className="text-sm text-gray-600">
                  Work with cutting-edge technology and contribute to innovative gaming solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Competitive Benefits</h3>
                <p className="text-sm text-gray-600">
                  Attractive compensation packages, health insurance, and retirement benefits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Work-Life Balance</h3>
                <p className="text-sm text-gray-600">
                  Flexible work arrangements and policies that support personal wellbeing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">Diverse & Inclusive</h3>
                <p className="text-sm text-gray-600">
                  A workplace that values diversity, equity, and inclusion at all levels.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Current Openings</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-1">Digital Marketing Manager</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Full-time</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Dar es Salaam</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  We're looking for an experienced Digital Marketing Manager to lead our online marketing strategies and
                  campaigns across all digital channels.
                </p>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-1">Game Developer</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Full-time</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Dar es Salaam</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Join our technology team to develop exciting new lottery and instant win games for our digital
                  platforms.
                </p>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-1">Regional Sales Manager</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Full-time</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Mwanza</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  We're seeking a dynamic Regional Sales Manager to oversee our retail network and drive sales growth in
                  the Lake Zone region.
                </p>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-1">Customer Service Representative</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Full-time</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Multiple Locations</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Join our customer service team to provide excellent support to our players through various channels
                  including phone, email, and social media.
                </p>
                <button className="text-blue-600 text-sm font-medium">View Details</button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4">Don't see a position that matches your skills?</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Submit General Application
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <ChatCard />
    </main>
  )
}
