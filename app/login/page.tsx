import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      {/* Back to Home Button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-sm font-semibold text-slate-500 hover:text-blue-600 transition flex items-center gap-2"
      >
        ← Back to Marketplace
      </Link>

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-slate-200">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Agent Portal</h2>
          <p className="text-slate-500 mt-2">Sign in to manage your property listings.</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
              placeholder="agent@homehaven.com" 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Forgot?</a>
            </div>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
              placeholder="••••••••" 
            />
          </div>

        <button 
            type="button" 
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transform active:scale-95 transition shadow-lg shadow-blue-200"
        >
            Sign In to Dashboard
        </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
            Not an agent yet? <a href="#" className="text-blue-600 font-bold hover:underline">Apply to list</a>
        </p>
    </div>
    </div>
    );
}