"use client";

import Link from "next/link";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

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
          Settings
        </h2>

        <div className="bg-stone-900 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">
            Account
          </h3>

          <Link href="/profile" className="text-stone-300 hover:text-amber-200">
            View Profile →
          </Link>
        </div>

        <div className="bg-stone-900 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">
            Notifications
          </h3>

          <div className="flex justify-between items-center">
            <p className="text-stone-300">Enable Notifications</p>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 accent-amber-500"
            />
          </div>
        </div>

        <div className="bg-stone-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-amber-200 mb-4">
            Other
          </h3>

          <Link href="/" className="text-red-400 hover:text-red-300">
            Logout
          </Link>
        </div>
      </main>
    </div>
  );
}