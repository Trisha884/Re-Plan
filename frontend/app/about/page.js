
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-stone-950 px-8 py-16 text-stone-200">
      <div className="mx-auto max-w-2xl">

        <Link
          href="/"
          className="mb-10 inline-block text-amber-400 hover:text-amber-200"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 text-4xl font-bold text-amber-200">
          About RePlan.
        </h1>

        <p className="mb-10 text-lg leading-8 text-stone-400">
          RePlan helps you turn your goals into manageable steps,
          track your progress and stay organised.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-amber-200">
          What We Do
        </h2>

        <p className="mb-10 leading-8 text-stone-400">
          Plan your goals, set priorities, track achievements and
          adjust deadlines when plans change.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-amber-200">
          Our Philosophy
        </h2>

        <p className="text-xl font-semibold text-amber-400">
          Progress over perfection.
        </p>

        <p className="mt-3 leading-8 text-stone-400">
          A missed deadline isn't the end. There's always room
          to re-plan and keep moving forward.
        </p>

      </div>
    </main>
  );
}


