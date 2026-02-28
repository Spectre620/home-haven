import Link from 'next/link';

export default function Home() {
  const listings = [
    { id: 1, title: "Sunny Side Apartment", price: "KES 45,000", loc: "Kilimani", img: "🏠" },
    { id: 2, title: "Modern Family Villa", price: "KES 120,000", loc: "Karen", img: "🏡" },
    { id: 3, title: "Executive Studio", price: "KES 30,000", loc: "Westlands", img: "🏢" },
  ];

  return (
    <main className="min-h-screen bg-white p-8 font-sans">
      {/* Navbar */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-16 border-b pb-6">
        <h1 className="text-2xl font-bold text-blue-700">Home Haven</h1>
        <nav className="flex gap-6 items-center">
          <Link href="/login" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Agent Login
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Find your next vibe.</h2>
        <p className="text-xl text-gray-500">Verified listings for the modern seeker.</p>
      </div>

      {/* Listings Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {listings.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-2xl p-2 hover:shadow-lg transition">
            <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-6xl">
              {item.img}
            </div>
            <div className="p-4">
              <p className="text-blue-600 font-bold text-xs uppercase">{item.loc}</p>
              <h3 className="text-xl font-bold mt-1 text-gray-800">{item.title}</h3>
              <p className="text-2xl font-black mt-4 text-gray-900">{item.price}<span className="text-sm font-normal text-gray-400"> /mo</span></p>
              <button className="w-full mt-6 py-3 bg-gray-900 text-white rounded-xl font-bold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

