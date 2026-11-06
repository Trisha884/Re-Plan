
"use client";

import { useEffect, useState } from "react";

export default function Streak() {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const dates = JSON.parse(localStorage.getItem("completionDates") || "{}");

    const activeDays = [...new Set(Object.values(dates))].sort();

    const today = new Date();
    const todayDate = today.toLocaleDateString("en-CA");

    let current = 0;
    let checkDate = new Date(today);

    if (!activeDays.includes(todayDate)) {
      checkDate.setDate(checkDate.getDate() - 1);
    }

    while (activeDays.includes(checkDate.toLocaleDateString("en-CA"))) {
      current++;
      checkDate.setDate(checkDate.getDate() - 1);
    }

    let best = 0;
    let count = 0;
    let previous = null;

    activeDays.forEach((date) => {
      const currentDate = new Date(date);

      if (previous) {
        const difference = (currentDate - previous) / (1000 * 60 * 60 * 24);

        if (difference === 1) {
          count++;
        } else {
          count = 1;
        }
      } else {
        count = 1;
      }

      best = Math.max(best, count);
      previous = currentDate;
    });

    const week = [];

    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      week.push(day.toLocaleDateString("en-CA"));
    }

    setCurrentStreak(current);
    setBestStreak(best);
    setActivity(week.map((date) => activeDays.includes(date)));
  }, []);

  return (
    <main className="min-h-screen bg-stone-950 px-8 py-10 text-stone-200">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold text-amber-200">
          My Streak Board
        </h1>

        <div className="rounded-xl bg-stone-900 p-8 text-center">
          <p className="text-stone-400">Current Streak</p>

          <h2 className="my-3 text-5xl font-bold text-amber-300">
            🔥 {currentStreak} Days
          </h2>

          <p className="text-stone-400">
            Keep going! Every small step counts.
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-stone-900 p-6">
          <h2 className="mb-4 text-xl font-semibold text-amber-200">
            Best Streak
          </h2>

          <p className="text-2xl font-bold">{bestStreak} Days</p>
        </div>

        <div className="mt-6 rounded-xl bg-stone-900 p-6">
          <h2 className="mb-4 text-xl font-semibold text-amber-200">
            Weekly Activity
          </h2>

          <div className="grid grid-cols-7 gap-3 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <div key={day}>
                  <div
                    className={`mb-2 rounded-lg p-3 ${
                      activity[index]
                        ? "bg-amber-500 text-black"
                        : "bg-stone-800"
                    }`}
                  >
                    {activity[index] ? "✓" : "-"}
                  </div>
                  <p className="text-sm text-stone-400">{day}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
