export default function Footer() {
  const categories = [
    'Politics',
    'World',
    'Economy',
    'Science & Tech',
    'Business',
    'Travel',
    'Climate',
    'Lifestyle',
    'Food',
    'Sports',
  ]

  return (
    <footer className="bg-black text-gray-400 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <h2 className="text-white font-bold text-2xl">NEWSLETTER</h2>
        <div>
          <p className="mb-2">© 2025 Newsletter. All rights reserved</p>
          <p className="text-sm">
            Privacy Policy • Terms of Service • Data Policy
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <a key={cat} href="#" className="text-sm hover:text-white">
              {cat}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
