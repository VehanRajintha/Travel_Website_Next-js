'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Menu, X, ChevronRight,Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AnuradhapuraPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="h-screen bg-white relative">
      <header className="relative bg-cover bg-center h-[15px]" >
        <Image src="/images/a.jpg" alt="Logo" width={80} height={70} className="absolute top-0 left-5" />
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
              <a href="#" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-20"
        >
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              <li><Link href="/" className="text-2xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">Home</Link></li>
              <li><Link href="#" className="text-2xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">Destinations</Link></li>
              <li><Link href="#" className="text-2xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">About</Link></li>
              <li><Link href="#" className="text-2xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </motion.div>
      )}

      <main className="pt-16">
        <HeroSection />
        
        <BestOfAnuradhapura />
        <ContactForm />
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800">Serendipity Travels</h2>
              <p className="text-gray-600 mt-2">Discover the beauty of Sri Lanka</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors"><Instagram /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            © 2024 Serendipity Travels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/anuradha.jpg?height=1080&width=1920"
        alt="Anuradhapura Sunset"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-center"
        >
          Anuradhapura
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-center"
        >
          North Central Province | Sri Lanka&apos;s ancient city
        </motion.p>
        <SearchForm />
      </div>
    </section>
  )
}

function SearchForm() {
  const router = useRouter()
  const [destination, setDestination] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (destination) {
      router.push(`/destinations/${destination.toLowerCase()}`)
    }
  }

  return (
    <div className="relative z-10"> {/* Higher z-index */}
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-2 items-center  mt-60">
      <div className="flex flex-col">
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
        <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} className="p-2 border rounded-md bg-white text-gray-700">
          <option value="">Choose destination</option>
          <option value="anuradhapura">Anuradhapura</option>
          <option value="polonnaruwa">Polonnaruwa</option>
          <option value="colombo">Colombo</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
        <select id="duration" className="p-2 border rounded-md bg-white text-gray-700">
          <option>Select duration</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <Input type="date" id="date" className="p-2 border rounded-md" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
        <Input type="number" id="guests" placeholder="Guests" className="p-2 border rounded-md" />
      </div>
      <Button type="submit" className="bg-red-500 text-white flex items-center px-4 py-2 rounded-md mt-4">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </form>
    </div>
  );
}

function BestOfAnuradhapura() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Best Of Anuradhapura</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          className="relative rounded-lg overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/aboutanuradhapura.png?height=400&width=600"
            alt="Anuradhapura Landscape"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-bold">Explore Anuradhapura</h3>
          </div>
        </motion.div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Sacred City Adventures: Explore Anuradhapura</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Set your sights on an unforgettable journey into Sri Lanka&apos;s ancient past. Anuradhapura, a UNESCO World Heritage site, invites you to explore its vast archaeological wonders. From towering dagobas to serene reservoirs, every corner tells a story of a civilization lost to time.
            </p>
          </div>
          <Button className="self-start bg-red-500 hover:bg-red-600 text-white transition-colors">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
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