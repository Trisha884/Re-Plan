
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Profile() {
  const [completedGoals, setCompletedGoals] = useState([]);

  useEffect(() => {
    const subjects = JSON.parse(localStorage.getItem("subjects") || "[]");
    const done = JSON.parse(localStorage.getItem("scheduleCompletion") || "{}");
    const dates = JSON.parse(localStorage.getItem("completionDates") || "{}");

    const completed = subjects.filter((s) => done[s.id]);

    setCompletedGoals(
      completed.map((s) => ({
        ...s,
        completedDate: dates[s.id]
      }))
    );
  }, []);

  return (
    <main className="min-h-screen bg-stone-950 px-8 py-10 text-stone-200">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-amber-200">
          My Profile
        </h1>

        <div className="rounded-xl bg-stone-900 p-8">
          <div className="mb-5">
            <p className="text-sm text-stone-400">Username</p>
            <p className="text-lg">trisha</p>
          </div>

          <div className="mb-5">
            <p className="text-sm text-stone-400">Name</p>
            <p className="text-lg">Trisha</p>
          </div>

          <div className="mb-8">
            <p className="text-sm text-stone-400">Email</p>
            <p className="text-lg">trisha@example.com</p>
          </div>

          <h2 className="mb-4 text-xl font-semibold text-amber-200">
            Completed Goals
          </h2>

          {completedGoals.length === 0 ? (
            <p className="text-stone-400">
              No completed goals yet. Keep going!
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {completedGoals.map((goal) => (
                <div key={goal.id} className="rounded-lg bg-stone-800 p-4">
                  <p className="font-semibold">{goal.name}</p>
                  <p className="mt-2 text-sm text-green-400">
                    ✓ Completed
                  </p>
                  <p className="mt-1 text-sm text-stone-400">
                    Completed on: {goal.completedDate}
                  </p>
                </div>
              ))}
            </div>
          )}

          <Link
            href="/streak"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            View Streak Board →
          </Link>
        </div>
      </div>
    </main>
  );
}
