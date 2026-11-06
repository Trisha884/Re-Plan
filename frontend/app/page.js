import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-amber-300">RePlan.</h1>

        <div className="flex items-center gap-8 text-sm">
          <Link href="/" className="text-amber-200">
            Home
          </Link>
          <Link
            href="/about"
            className="text-stone-300 hover:text-amber-200 transition">
            About
          </Link>
          <Link
            href="/login"
            className="text-stone-300 hover:text-amber-200 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="min-h-[75vh] flex items-center px-8 md:px-20 py-16">
        <div className="max-w-2xl">
          <p className="text-sm tracking-widest text-amber-400 mb-4">
            YOUR JOURNEY, YOUR RULES
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-stone-100">
            Stop Waiting. Start Progressing.
          </h2>

          <p className="mt-6 text-stone-400 text-lg leading-8 max-w-xl">
            Big goals can feel overwhelming. RePlan helps you break them into
            smaller steps, stay on track, and make progress at your own pace.
          </p>

          <Link
            href="/login"
            className=" inline-block  mt-8 bg-amber-500 text-stone-950 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
          >
            Get Started →
          </Link>
        </div>
      </section>

      <section id="about" className="px-8 md:px-20 py-16 bg-stone-900">
        <h2 className="text-3xl font-bold text-amber-200 text-center mb-3">
          A little progress goes a long way.
        </h2>

        <p className="text-stone-400 text-center mb-10">
          Make your goals feel manageable, one step at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-950 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">
              Plan It
            </h3>
            <p className="text-stone-400 leading-7">
              Turn your goals into small, clear steps that feel easier to begin.
            </p>
          </div>

          <div className="bg-stone-950 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">
              Track It
            </h3>
            <p className="text-stone-400 leading-7">
              See how far you’ve come and understand what you can work on next.
            </p>
          </div>

          <div className="bg-stone-950 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">
              Achieve It
            </h3>
            <p className="text-stone-400 leading-7">
              Celebrate your progress, even when it’s just one small step.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-500 text-center py-6">
        Make Every Step Count.{" "}
        <span className="text-amber-300">RePlan.</span>
      </footer>
    </div>
  );
}