export default function LatestNews() {
  const news = [
    {
      image: '/Frame-8.png',
    },
    {
      image: '/Frame-10.png',
    },
    {
      image: '/Frame-11.png',
    },
    {
      image: '/Frame-12.png',
    },
  ]

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.image}
              alt={item.title}
              className="w-90 h-100 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-green-900 text-white rounded-md hover:bg-green-800">
          View More
        </button>
      </div>
    </section>
  )
}
