export default function FeaturedNews() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Featured News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="/featured-1.jpg"
            alt="News"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">
            London to Istanbul by Train: This 10-day Rail Adventure is a Slow
            Traveller’s Dream
          </h3>
        </div>
        <div>
          <img
            src="/featured-2.jpg"
            alt="News"
            className="w-full h-64 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">
            More Airports to Use Greener ‘Glide’ Approach to Landing
          </h3>
        </div>
      </div>
    </section>
  )
}
