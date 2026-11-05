import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <nav className="flex justify-between items-center px-8 py-5">
        <Link href="/homepage" className="text-2xl font-bold text-amber-300">
          RePlan.
        </Link>

        <Link href="/homepage" className="text-stone-300 hover:text-amber-200">
          ← Home
        </Link>
      </nav>

      <main className="max-w-2xl mx-auto px-8 py-10">
        <h2 className="text-3xl font-bold text-amber-200 mb-8">
          My Profile
        </h2>

        <div className="bg-stone-900 p-8 rounded-xl">
          <div className="mb-5">
            <p className="text-stone-400 text-sm">Username</p>
            <p className="text-lg">trisha</p>
          </div>

          <div className="mb-5">
            <p className="text-stone-400 text-sm">Name</p>
            <p className="text-lg">Trisha</p>
          </div>

          <div className="mb-8">
            <p className="text-stone-400 text-sm">Email</p>
            <p className="text-lg">trisha@example.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-grey-200 mb-4">
              Completed Goals
            </h3>

            <div className="flex gap-3">
              <div className="bg-stone-800 p-4 rounded-lg justify-between">
                <span>Learn Java OOP</span>
                <span className="text-green-400">✓ Completed</span>
              </div>

              <div className="bg-stone-600 p-4 rounded-lg flex justify-between">
                <span>Finish DSA Assignment</span>
                <span className="text-green-400">✓ Completed</span>
              </div>
            </div>
          </div>

          <Link
            href="/streak"
            className="inline-block mt-8 bg-amber-500 text-stone-950 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
          >
            View Streak Board →
          </Link>
        </div>
      </main>
    </div>
  );
}