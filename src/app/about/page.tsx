'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from 'react-awesome-reveal';
import { ChevronLeft, ChevronRight, Star, Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutPage() {
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


      <main>
      <Reveal triggerOnce>
        <HeroSection />
        </Reveal>
        <Reveal triggerOnce>
        <ExploreDestinations />
        </Reveal>
        <Reveal triggerOnce>
        <CustomerReviews />
        </Reveal>
        <Reveal triggerOnce>
        <ContactForm />
        </Reveal>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
          <Image
  src="/images/a.jpg"
  alt="Serendipity Travels Logo"
  width={150}
  height={50}
  className="rounded-full"
/>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-600" />
              <Twitter className="w-6 h-6 text-gray-600" />
              <Instagram className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            © 2024 Serendipity Travels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[400px]">
      <Image
        src="/images/ready.jpg?height=400&width=1600"
        alt="Sri Lanka Train Bridge"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">All Set to Explore Sri Lanka with</h1>
        <p className="text-xl mb-8">Memorable Tours and Experiences</p>
        <div className="flex space-x-4">
          <Button className="bg-red-500 text-white">Plan a Trip</Button>
          <Button variant="outline" className="text-black border-white">Explore Tours</Button>
        </div>
      </div>
    </section>
  )
}

function ExploreDestinations() {
  const destinations = [
    { name: 'Sigiriya', image: '/images/sigiriya.jpg?height=200&width=200' },
    { name: 'Galle', image: '/images/galle.jpg?height=200&width=200' },
    { name: 'Kandy', image: '/images/kandy.jpg?height=200&width=200' },
    { name: 'Polonnaruwa', image: '/images/polonnaruwa.jpg?height=200&width=200' },
    { name: 'Pinnawala', image: '/images/pinnawala.jpg?height=200&width=200' },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Explore More Destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {destinations.map((dest, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <Image src={dest.image} alt={dest.name} width={200} height={200} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CustomerReviews() {
  const reviews = [
    { name: 'John D.', rating: 5, text: 'Amazing experience! The tour was well-organized and our guide was knowledgeable.', profileImage: '/images/john.jpg' },
    { name: 'Sarah T.', rating: 5, text: 'Unforgettable journey through Sri Lanka. Every moment was special.', profileImage: '/images/sarah.jpg' },
    { name: 'Mike R.', rating: 4, text: 'Great tour overall. Loved the cultural insights and beautiful landscapes.', profileImage: '/images/mike.jpg' },
    { name: 'Emily S.', rating: 5, text: 'Exceeded all expectations. Can\'t wait to come back!', profileImage: '/images/emily.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="flex items-center justify-center mb-4">
          <span className="text-yellow-400 font-bold mr-2">Excellent</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <p className="text-center mb-8">Based on 123 reviews</p>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={review.profileImage}
                    alt={`${review.name}'s profile picture`}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}


function ContactForm() {
  return (
    <section className="container mx-auto px-100 py-16">
      <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-78 w-full object-cover md:w-78"
              src="/images/a.jpg?height=400&width=400"
              alt="Serendipity Travels"
              width={800}
              height={800}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
            <h2 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Get in touch with us
            </h2>
            <p className="mt-3 text-base leading-6 text-gray-500">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="mt-6">
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="grid grid-cols-1 gap-6">
      <Input placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input placeholder="Phone" />
      <Textarea placeholder="Message" />
      <Button className="bg-blue-500 text-white">Send Message</Button>
    </div>
  </div>
</form>
          </div>
        </div>
      </div>
    </section>
  )
}