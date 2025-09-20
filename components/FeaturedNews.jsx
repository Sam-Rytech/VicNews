export default function FeaturedNews() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Featured News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src="/LI.png"
            alt="News"
            className="w-full h-70 object-cover rounded-md"
          />
        </div>
        <div>
          <img
            src="/Frame-6.png"
            alt="News"
            className="w-full h-70 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
