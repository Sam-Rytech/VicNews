export default function LatestNews() {
  const news = [
    {
      title:
        '10 Ways to Streamline Meal Prep for More Efficient Weeknight Cooking',
      image: '/Frame-8.png',
    },
    {
      title:
        'Oil Price Slip Again as Spectre of Trade War, Demand Concerns Haunts Market',
      image: '/Frame-10.png',
    },
    {
      title:
        'Europeans Are the World’s Heaviest Drinkers: How Do Countries Compare?',
      image: '/Frame-11.png',
    },
    {
      title: 'A ‘De-Extinction’ Company Wants to Bring Back the Dodo',
      image: '/news-4.jpg',
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
              className="w-full h-56 object-cover rounded-md"
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
