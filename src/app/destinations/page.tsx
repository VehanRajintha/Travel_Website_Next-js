'use client'

import { Reveal } from 'react-awesome-reveal';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon, MenuIcon, StarIcon, UsersIcon, XIcon } from 'lucide-react'

export default function SriLankaDestinationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="h-screen bg-white relative">
      <header className="relative bg-cover bg-center h-[80px]" >
        <Image src="/images/a.jpg" alt="Logo" width={80} height={80} className="absolute top-0 left-5" />
        <nav className="absolute top-8 right-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                Packages
              </a>
            </li>
            <li>
              <Link href="/about" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <a href="/destinations" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                Destinations
              </a>
            </li>
            <li>
              <a href="/blog" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <Link href="#about" className="text-xl text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#attractions" className="text-xl text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Attractions</Link>
            <Link href="#activities" className="text-xl text-gray-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Activities</Link>
            <Button size="lg" onClick={() => setIsMenuOpen(false)}>Book Now</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Reveal triggerOnce>
      <section className="relative h-screen">
        <Image
          src="/images/destination.jpg?height=1080&width=1920"
          alt="Sri Lanka panorama"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Discover Sri Lanka</h1>
            <p className="text-2xl mb-8">Experience the Pearl of the Indian Ocean</p>
            <Button size="lg" className="text-lg px-8 py-4">Start Your Journey</Button>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Quick Info */}
        <Reveal triggerOnce>
        <section className="mb-16 -mt-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <CalendarIcon className="mr-2" /> Best Time to Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                December to March (Dry Season)
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <MapPinIcon className="mr-2" /> Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                South Asia, Indian Ocean
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <UsersIcon className="mr-2" /> Popular For
                </CardTitle>
              </CardHeader>
              <CardContent>
                Beaches, Wildlife, Ancient Ruins
              </CardContent>
            </Card>
          </div>
        </section>
        </Reveal>

        {/* About Sri Lanka */}
        <Reveal triggerOnce>
        <section id="about" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Sri Lanka</h2>
          <p className="text-lg mb-4 text-gray-600">
            Sri Lanka, known as the Pearl of the Indian Ocean, is a tropical paradise with a rich history and diverse landscapes. From pristine beaches and lush rainforests to ancient ruins and vibrant culture, this island nation offers a unique blend of experiences for every traveler.
          </p>
          <p className="text-lg text-gray-600">
            With its warm hospitality, delicious cuisine, and abundance of natural wonders, Sri Lanka has become a sought-after destination for those seeking adventure, relaxation, and cultural immersion. Whether you're exploring ancient cities, spotting wildlife in national parks, or unwinding on golden beaches, Sri Lanka promises an unforgettable journey.
          </p>
        </section>
        </Reveal>

        {/* Top Attractions */}
        <Reveal triggerOnce>
        <section id="attractions" className="mb-16 scroll-mt-20">
  <h2 className="text-4xl font-bold mb-6 text-gray-800">Top Attractions</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { name: 'Sigiriya Rock Fortress', image: '/images/sigiriya.jpg' },
      { name: 'Yala National Park', image: '/images/yala.jpg' },
      { name: 'Temple of the Tooth', image: '/images/kandy.jpg' },
      { name: 'Galle Fort', image: '/images/galle.jpg' },
      { name: 'Pinnawala Elephant Orphanage', image: '/images/pinnawala.jpg' },
      { name: 'Mirissa Beach', image: '/images/mirissa.jpg' },
    ].map((attraction, index) => (
      <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
        <Image
          src={`${attraction.image}?height=300&width=400`}
          alt={attraction.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardTitle>{attraction.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Experience the wonders of Sri Lanka at this iconic destination. Immerse yourself in the rich history, natural beauty, and cultural significance of this must-visit attraction.</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
</Reveal>

        {/* Things to Do */}
        <Reveal triggerOnce>
        <section id="activities" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Things to Do</h2>
          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
            </TabsList>
            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Exciting Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Surf the waves in Arugam Bay</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Go on a safari in Yala National Park</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Hike through the tea plantations in Ella</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Take a scenic train ride through the hill country</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="culture">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Cultural Experiences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Witness a traditional Kandyan dance performance</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Visit the ancient city of Anuradhapura</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Participate in a Sri Lankan cooking class</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Explore the colonial architecture of Galle Fort</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="food">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">Culinary Delights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Savor a traditional rice and curry feast</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Try the famous Sri Lankan hoppers</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Enjoy fresh seafood on the coast</p>
                  <p className="flex items-center"><StarIcon className="mr-2 text-yellow-500" /> Taste world-renowned Ceylon tea</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        </Reveal>

        {/* Call to Action */}
        <Reveal triggerOnce>
        <section className="text-center py-16 bg-blue-50 rounded-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Ready to Experience Sri Lanka?</h2>
          <p className="text-xl mb-8 text-gray-600">Book your dream vacation now and create memories that last a lifetime.</p>
          <Button size="lg" className="text-lg px-8 py-4">Plan Your Trip</Button>
        </section>
        </Reveal>
      </main>
    </div>
  )
}