'use client'
import { Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">VICNEWS</h1>
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search by headlines"
            className="w-full pl-4 pr-12 py-2 rounded-md bg-gray-800 text-sm outline-none"
          />
          <button className="absolute right-0 top-0 h-full px-3 bg-red-700 text-white text-sm rounded-r-md">
            SEARCH
          </button>
        </div>
      </div>
    </header>
  )
}
