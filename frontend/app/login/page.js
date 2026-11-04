import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex flex-col">

      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-5 bg-stone-900">
        <h1 className="text-2xl font-bold text-amber-300">RePlan.</h1>

        <Link
          href="/"
          className="text-stone-300 hover:text-amber-200 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Login Section */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-10">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-200">
            Welcome Back
          </h2>

          <p className="text-stone-400 mt-3">
            Continue your journey. One step at a time.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-stone-900 w-full max-w-sm p-8 rounded-2xl shadow-xl">

          <div className="mb-5">
            <label className="block mb-2 text-stone-200">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="w-full bg-stone-800 text-stone-100 placeholder-stone-500 p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-stone-200">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-stone-800 text-stone-100 placeholder-stone-500 p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          <button className="w-full bg-amber-500 text-stone-950 py-3 rounded-lg font-semibold hover:bg-amber-400 transition">
            Login
          </button>

          <p className="text-center mt-6 text-stone-400">
            Don’t have an account?{" "}

            <Link
              href="/signup"
              className="text-amber-300 hover:text-amber-200 transition"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}