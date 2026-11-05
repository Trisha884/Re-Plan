"use client";

import { useState } from "react";
import Link from "next/link";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-amber-300">RePlan.</h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-stone-300 hover:text-amber-200 transition"
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <aside className="fixed top-0 left-0 h-full w-1/4 min-w-64 bg-stone-900 border-r border-stone-800 z-50 p-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold text-amber-300">RePlan.</h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl text-stone-400 hover:text-amber-200"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/homepage"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-200 transition"
              >
                Home
              </Link>

              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-200 transition"
              >
                Profile
              </Link>

              <Link
                href="/settings"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-200 transition"
              >
                Settings
              </Link>

              <Link
                href="/streak"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-200 transition"
              >
                Streak Board
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="p-3 rounded-lg text-stone-200 hover:bg-stone-800 hover:text-amber-200 transition"
              >
                About
              </Link>
            </div>
          </aside>
        </>
      )}

      <main className="px-8 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-200">
          Welcome to your space.
        </h2>

        <p className="mt-4 text-stone-400 text-lg">
          Every big goal starts with one small step. What would you like to work
          on today?
        </p>

        <Link
          href="/priority"
          className="inline-block mt-8 bg-amber-500 text-stone-950 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
        >
          + Add
        </Link>
      </main>
    </div>
  );
}