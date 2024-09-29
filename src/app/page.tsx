'use client'

import { Reveal } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Search, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"  // Add this line

export default function Home() {
  return (
    <div className="h-screen bg-white relative">
      <header className="relative bg-cover bg-center h-[80px]" >
        <Image src="/images/a.jpg" alt="Logo" width={80} height={80} className="absolute top-0 left-5" />
        <nav className="absolute top-8 right-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-black font-bold hover:text-white hover:bg-gray-900 px-3 py-2 rounded-md shadow-md transition duration-300 ease-in-out">
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
        <TopDestinations />
        </Reveal>
        <Reveal triggerOnce>
        <BestPackages />
        </Reveal>
        <Reveal triggerOnce> 
        <Gallery />
        </Reveal>
        
      </main>
    </div>
  )
}

function HeroSection() {
  const images = [
    '/images/herobg1.jpg?height=800&width=1440',
    '/images/herobg2.jpg?height=800&width=1440',
    '/images/herobg3.jpg?height=800&width=1440',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        @keyframes slideOut {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .slide-in {
          animation: slideIn 2s forwards;
        }
        .slide-out {
          animation: slideOut 2s forwards;
        }
      `}</style>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-1000 ${
            index === currentImageIndex ? 'slide-in' : 'slide-out'
          }`}
          style={{ zIndex: 0 }}
        >
          <Image
            src={image}
            alt="Sri Lanka Landscape"
            layout="fill"
            objectFit="cover"
           className="w-full h-full object-cover image-border-radius"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mt-60" style={{ zIndex: 1 }}>
        <h1 className="text-4xl md:text-9xl font-bold mb-4 absolute top-[50px] left-[75px] w-[996px] h-[608px] font-[Roboto]">
          Welcome To Sri <br />Lanka
        </h1>
        <p className="text-4xl absolute top-[10px] left-[75px] font-[Roboto]">
          We are waiting for you
        </p> 
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

function TopDestinations() {
  const router = useRouter();
  const destinations = [
    { name: 'Anuradhapura', image: '/images/anuradhapura.jpg?height=200&width=300', link: '/destinations/anuradhapura' },
    { name: 'Sigiriya', image: '/images/sigiriya.jpg?height=200&width=300', link: '/destinations/sigiriya' },
    { name: 'Ella', image: '/images/ella.jpg?height=200&width=300', link: '/destinations/ella' },
    { name: 'Yala National Park', image: '/images/yala.jpg?height=200&width=300', link: '/destinations/yala' },
    { name: 'Kandy', image: '/images/kandy.jpg?height=200&width=300', link: '/destinations/kandy' },
    { name: 'Galle', image: '/images/galle.jpg?height=200&width=300', link: '/destinations/galle' },
    // Add more destinations as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (link: string) => {
    router.push(link);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Top Destinations in Sri Lanka</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 20}%)`, width: `${destinations.length * 20}%` }}
        >
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="w-1/5 flex-shrink-0 relative group overflow-hidden rounded-lg shadow-lg cursor-pointer p-2"
              onClick={() => handleClick(dest.link)}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                width={250}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-xl font-semibold">{dest.name}</h3>
                <ChevronRight className="text-white h-8 w-8 ml-2 transition-transform duration-300 transform group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length)} className="bg-gray-300 p-2 rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length)} className="bg-gray-300 p-2 rounded-full">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

function BestPackages() {
  const packages = [
    { name: 'Cultural Heritage Tour', duration: '7 Days', price: 1200, rating: 5, image: '/images/cultural.jpg?height=402&width=300' },
    { name: 'Beach and Watersports', duration: '5 Days', price: 900, rating: 4, image: '/images/beach.jpg?height=402&width=100' },
    { name: 'Wildlife and Nature Adventure', duration: '6 Days', price: 1100, rating: 5, image: '/images/wildlife.jpg?height=402&width=300' },
    { name: 'Luxury Wellness Retreat', duration: '4 Days', price: 1500, rating: 4, image: '/images/wellness.jpg?height=402&width=300' },
    { name: 'Hill Country Experience', duration: '5 Days', price: 950, rating: 4, image: '/images/hill.jpg?height=402&width=300' },
    { name: 'Southern Coast Discovery', duration: '6 Days', price: 1000, rating: 5, image: '/images/coast.jpg?height=402&width=300' },
    { name: 'Ancient Sri Lanka Journey', duration: '8 Days', price: 1300, rating: 5, image: '/images/discovery.jpg?height=402&width=300' },
    { name: 'Romantic Getaway', duration: '4 Days', price: 1400, rating: 4, image: '/images/coastline.jpg?height=402&width=300' },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Best Package For 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <Image src={pkg.image} alt={pkg.name} width={300} height={402} className="w-full h-[402px] object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
              <p className="text-sm text-white">{pkg.duration}</p>
              <p className="text-sm text-white">${pkg.price}</p>
              <div className="flex items-center">
                {[...Array(pkg.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    '/images/1.jpg',
    '/images/2.png?',
    '/images/3.png?',
    '/images/4.jpg?',
    '/images/5.png?',
    '/images/6.png',
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Travel Gallery</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left column - large image */}
        <div className="md:w-1/2">
          <Image
            src={images[0]}
            alt="Hikers on stone steps"
            width={600}
            height={800}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Right column - 5 images */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Top row - 2 images */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <Image
                src={images[1]}
                alt="Off-road vehicles"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={images[2]}
                alt="Stone bridge"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Middle row - wide image */}
          <div>
            <Image
              src={images[3]}
              alt="Elephants in forest"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Bottom row - 2 images */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <Image
                src={images[4]}
                alt="Train on bridge"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={images[5]}
                alt="Van at beach sunset"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}