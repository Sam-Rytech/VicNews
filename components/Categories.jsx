export default function Categories() {
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
    <nav className="bg-gray-100 border-t border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-4">
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  )
}
