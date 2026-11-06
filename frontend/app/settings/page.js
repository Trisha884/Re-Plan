
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <main className="min-h-screen bg-stone-950 px-8 py-10 text-stone-200">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-amber-200">
          Settings
        </h1>

        <div className="mb-6 rounded-xl bg-stone-900 p-6">
          <h2 className="mb-4 text-xl font-semibold text-amber-200">
            Account
          </h2>

          <Link
            href="/profile"
            className="text-stone-300 hover:text-amber-200"
          >
            View Profile →
          </Link>
        </div>

        <div className="mb-6 rounded-xl bg-stone-900 p-6">
          <h2 className="mb-4 text-xl font-semibold text-amber-200">
            Notifications
          </h2>

          <div className="flex items-center justify-between">
            <p className="text-stone-300">Enable Notifications</p>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="h-5 w-5 accent-amber-500"
            />
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 p-6">
          <h2 className="mb-4 text-xl font-semibold text-amber-200">
            Other
          </h2>

          <Link href="/" className="text-red-400 hover:text-red-300">
            Logout
          </Link>
        </div>
      </div>
    </main>
  );
}
