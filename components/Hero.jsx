export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main News */}
        <div className="lg:col-span-2">
          <img
            src="/hero-main.jpg"
            alt="Main News"
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">
            Democrats Overhaul Party’s Primary Calendar, Upending a Political
            Tradition
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            By Amy Greene | Jan 1, 2024
          </p>
        </div>

        {/* Side News */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text-lg font-semibold">
              Furor Over Chinese Spy Balloon Leads to Diplomatic Crisis
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              By John Doe | Jan 2, 2024
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text-lg font-semibold">Balloon’s Journey</h3>
            <p className="text-sm text-gray-400 mt-2">By Staff Writer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
