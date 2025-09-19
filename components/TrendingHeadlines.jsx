export default function TrendingHeadlines() {
  const headlines = [
    { title: 'U.S. Down Suspected Chinese Spy Balloon', date: 'Feb 5, 2024' },
    {
      title: 'Mystery Portrait May Be a Leonardo da Vinci',
      date: 'Feb 4, 2024',
    },
    { title: 'LeBron James Keeps the World Watching', date: 'Feb 4, 2024' },
    { title: 'Russia-Ukraine War Live Updates', date: 'Feb 3, 2024' },
    { title: 'NASA and DARPA Partner on Nuclear Rocket', date: 'Feb 2, 2024' },
  ]

  return (
    <aside>
      <h2 className="text-xl font-bold mb-4">Trending Headlines</h2>
      <div className="flex flex-col gap-4">
        {headlines.map((item, idx) => (
          <div key={idx} className="border-b pb-2">
            <h3 className="font-medium text-sm">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
