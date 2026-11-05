import Link from "next/link";

export default function Streak() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <nav className="flex justify-between items-center px-8 py-5 bg-stone-900">
        <h1 className="text-2xl font-bold text-amber-300">RePlan.</h1>
        <div className="flex gap-6">
          <Link href="/homepage" className="text-stone-300 hover:text-amber-300">Home</Link>
          <Link href="/profile" className="text-stone-300 hover:text-amber-300">Profile</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-amber-200 mb-3 ml-2">
          Streak Board
        </h2>

        <p className="text-stone-400 mb-10 ml-2">
          Keep showing up and build your progress.
        </p>

        <div className="flex flex-wrap gap-5 mb-12">
          <div className="bg-stone-900 p-7 rounded-xl w-64">
            <p className="text-stone-400">Current Streak</p>
            <h3 className="text-3xl font-bold text-amber-300 mt-4">
              🔥 0 Days
            </h3>
          </div>

          <div className="bg-stone-900 p-5 rounded-xl w-72 mt-4">
            <p className="text-stone-400">Best Streak</p>
            <h3 className="text-3xl font-bold text-amber-300 mt-2">
              0 Days
            </h3>
          </div>
        </div>

        <div className="bg-stone-900 p-6 rounded-xl mb-10 ml-3">
          <h3 className="text-xl font-semibold text-amber-200 mb-7">
            Weekly Activity
          </h3>

          <div className="grid grid-cols-7 gap-3 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day}>
                <p className="text-stone-400 mb-3">{day}</p>
                <div className="bg-stone-800 rounded-lg p-4 text-stone-500">
                  -
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/homepage"
            className="inline-block bg-amber-500 text-stone-950 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}