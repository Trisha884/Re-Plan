import Link from "next/link";

export default function Streak() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <nav className="flex justify-between items-center px-8 py-5">
        <Link href="/homepage" className="text-2xl font-bold text-amber-300">
          RePlan.
        </Link>

        <Link href="/profile" className="text-stone-300 hover:text-amber-200">
          ← Profile
        </Link>
      </nav>

      <main className="max-w-2xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-amber-200 mb-8">
          My Streak Board
        </h2>

        <div className="bg-stone-900 p-8 rounded-xl text-center">
          <p className="text-stone-400">Current Streak</p>

          <h3 className="text-5xl font-bold text-amber-300 my-3">
            🔥 0 Days
          </h3>

          <p className="text-stone-400">
            Keep going! Every small step counts.
          </p>
        </div>

        <div className="bg-stone-900 p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">
            Best Streak
          </h3>

          <p className="text-2xl font-bold">0 Days</p>
        </div>

        <div className="bg-stone-900 p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">
            Weekly Activity
          </h3>

          <div className="grid grid-cols-7 gap-3 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day}>
                <div className="bg-stone-800 rounded-lg p-3 mb-2">-</div>
                <p className="text-sm text-stone-400">{day}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}