'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedNews from '@/components/FeaturedNews'
import LatestNews from '@/components/LatestNews'
import TrendingHeadlines from '@/components/TrendingHeadlines'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="bg-[#f8f7f2] text-gray-900">
      <Navbar />
      <Hero />
      <Categories />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <FeaturedNews />
          <LatestNews />
        </div>
        <div>
          <TrendingHeadlines />
        </div>
      </div>
      <Footer />
    </main>
  )
}
