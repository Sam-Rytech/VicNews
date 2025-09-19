'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Destinations from '@/components/Destinations'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import Companies from '@/components/Companies'
import CTASection from '@/components/CTASection'
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
