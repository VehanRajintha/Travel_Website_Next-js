'use client'

import { Reveal } from 'react-awesome-reveal';
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarIcon, MapPinIcon, MenuIcon, SearchIcon, XIcon } from 'lucide-react'

type Post = {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
}

export default function SriLankaTravelBlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  const featuredPost: Post = {
    title: "Exploring the Ancient City of Sigiriya",
    excerpt: "Discover the wonders of Sri Lanka's most famous archaeological site...",
    image: "/images/sigiriya.jpg?height=600&width=800&text=Sigiriya+Rock+Fortress",
    date: "May 15, 2024",
    author: "Chaminda Perera"
  }

  const allPosts: Post[] = [
    featuredPost,
    {
      title: "A Taste of Sri Lanka: Culinary Delights",
      excerpt: "Indulge in the flavors of Sri Lanka with our comprehensive food guide...",
      image: "/images/Culinary.jpg?height=400&width=600&text=Sri+Lankan+Cuisine",
      date: "May 10, 2024",
      author: "Lakshmi Fernando"
    },
    {
      title: "Wildlife Safari: Yala National Park",
      excerpt: "Embark on an adventure to spot leopards, elephants, and more in Sri Lanka's wilderness...",
      image: "/images/yala.jpg?height=400&width=600&text=Yala+National+Park",
      date: "May 5, 2024",
      author: "Rajitha Gunasekara"
    },
    {
      title: "Beaches of the South: Unawatuna to Mirissa",
      excerpt: "Explore the golden sands and turquoise waters of Sri Lanka's southern coast...",
      image: "/images/mirissa.jpg?height=400&width=600&text=Sri+Lankan+Beaches",
      date: "April 30, 2024",
      author: "Dilani Silva"
    }
  ]

  useEffect(() => {
    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredPosts(filtered)
  }, [searchQuery])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

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
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            <Link href="/" className="text-xl text-gray-600 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/destinations" className="text-xl text-gray-600 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
            <Link href="/culture" className="text-xl text-gray-600 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Culture</Link>
            <Link href="/about" className="text-xl text-gray-600 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover the Beauty of Sri Lanka</h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        {searchQuery === '' ? (
          <>
            {/* Featured Post */}
            <Reveal triggerOnce>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Featured Post</h2>
              <Card className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={800}
                      height={600}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/3 p-6">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">{featuredPost.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="mr-2 h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Read More</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </section>
            </Reveal>

            {/* Recent Posts */}
            <Reveal triggerOnce>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.slice(1).map((post, index) => (
                  <Card key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="mr-2 h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
            </Reveal>
          </>
        ) : (
          <Reveal triggerOnce>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
            {filteredPosts.length === 0 ? (
              <p className="text-center text-gray-600">No posts found matching your search.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon className="mr-2 h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </section>
          </Reveal>
        )}

        {/* Newsletter Signup */}
        <Reveal triggerOnce>
        <section className="mt-16 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated with Our Latest Sri Lankan Adventures</h2>
          <p className="text-gray-600 mb-6">Sign up for our newsletter and never miss a story about the Pearl of the Indian Ocean!</p>
          <div className="flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow mr-2" />
            <Button>Subscribe</Button>
          </div>
        </section>
        </Reveal>
      </main>
    </div>
  )
}