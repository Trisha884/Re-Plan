
import Link from "next/link";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-stone-950 px-8 py-12 text-stone-200 md:px-20">
      <h1 className="text-3xl font-bold text-amber-200 md:text-4xl">
        Welcome to your space.
      </h1>

      <p className="mt-4 text-lg text-stone-400">
        Every big goal starts with one small step. What would you like to work
        on today?
      </p>

      <Link
        href="/priority"
        className="mt-8 inline-block rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-400"
      >
        + Add Goal
      </Link>
    </main>
  );
}
