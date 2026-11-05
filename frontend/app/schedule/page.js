
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const completionKey = "scheduleCompletion";
const deadlineKey = "scheduleDeadlines";

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function retryDays(priority) {
  const value = Number(priority) || 1;
  return value === 1 ? 4 : value === 2 ? 5 : 5 + value;
}

export default function SchedulePage() {
  const [subjects, setSubjects] = useState([]);
  const [done, setDone] = useState({});
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("subjects") || "[]");
    const completed = JSON.parse(localStorage.getItem(completionKey) || "{}");
    const savedDates = JSON.parse(localStorage.getItem(deadlineKey) || "{}");
    const today = addDays(0);

    const updated = stored.map((subject, index) => {
      const id = String(subject.id ?? index);
      const originalDate = subject.deadline || subject.dueDate || subject.date || "";
      const due = savedDates[id] || originalDate;

      if (!completed[id] && due && due < today) {
        savedDates[id] = addDays(retryDays(subject.priority));
      }

      return { ...subject, id, deadline: savedDates[id] || due };
    });

    localStorage.setItem(deadlineKey, JSON.stringify(savedDates));
    setDone(completed);
    setSubjects(updated);
  }, []);

  function toggleDone(subject) {
    const next = { ...done, [subject.id]: !done[subject.id] };
    setDone(next);
    localStorage.setItem(completionKey, JSON.stringify(next));
  }

  const points = subjects.map((_, i) => `${i % 2 ? 290 : 110},${72 + i * 144}`);
  const road = points.map((point, i) => {
    const [x, y] = point.split(",").map(Number);
    if (!i) return `M ${x} ${y}`;
    const previousX = i % 2 ? 110 : 290;
    return ` C ${previousX} ${y - 48}, ${x} ${y - 48}, ${x} ${y}`;
  }).join("");

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="flex justify-end mb-6">
  <a
    href="/priority"
    className="text-[#D4AF37] font-semibold hover:underline"
  >
    ← Priority Plan
  </a>
</div>
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#b89435 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <header className="relative z-20 flex items-center gap-4 border-b border-yellow-700/40 p-5">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="text-3xl"
        >
          ☰
        </button>
        <h1 className="text-2xl font-bold text-[#d4af37]">Study Schedule</h1>
      </header>

      {menuOpen && (
        <nav className="absolute z-30 space-y-4 rounded-br-xl border border-yellow-700 bg-[#171719] p-6">
          <a className="block hover:text-yellow-400" href="/">Home</a>
          <a className="block hover:text-yellow-400" href="/priority">Priority Plan</a>
          <button className="block text-left text-gray-400">Calendar (coming soon)</button>
          <button className="block text-left text-gray-400">Settings (coming soon)</button>
        </nav>
      )}

      <section className="relative mx-auto max-w-3xl px-4 py-10">
        <p className="mb-8 text-center text-gray-300">
          Your subjects, connected in study order
        </p>

        {subjects.length > 0 && (
          <svg
            aria-hidden="true"
            viewBox={`0 0 400 ${subjects.length * 144 + 80}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-24 h-[calc(100%-6rem)] w-full"
          >
            <path
              d={road}
              fill="none"
              stroke="#d4af37"
              strokeWidth="5"
              strokeDasharray="10 8"
            />
          </svg>
        )}

        <div className="relative">
          {subjects.map((subject, index) => (
            <div
              key={subject.id}
              className={`flex h-36 items-center ${
                index % 2 ? "justify-end" : "justify-start"
              }`}
            >
              <button
                onClick={() => setSelected(subject)}
                className="z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#d4af37] bg-[#171719] p-3 text-center font-semibold shadow-[0_0_20px_#d4af3740] hover:bg-[#29251a]"
              >
                {subject.name || subject.title || `Subject ${index + 1}`}
              </button>
            </div>
          ))}

          {!subjects.length && (
            <p className="py-12 text-center text-gray-400">
              No subjects found. Add subjects on your Priority Plan page first.
            </p>
          )}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-2xl border border-[#d4af37] bg-[#171719] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="float-right text-xl"
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="mb-4 text-xl font-bold text-[#d4af37]">
              {selected.name || selected.title || "Subject"}
            </h2>
            <p>
              Original duration:{" "}
              {selected.duration || selected.originalDuration || "Not provided"}
            </p>
            <p className="mt-2">Priority: {selected.priority || "Not provided"}</p>
            <p className="mt-2">Next deadline: {selected.deadline || "Not provided"}</p>

            <label className="mt-5 flex items-center gap-3">
              <input
                type="checkbox"
                checked={!!done[selected.id]}
                onChange={() => toggleDone(selected)}
                className="h-5 w-5 accent-yellow-500"
              />
              Mark as complete
            </label>
          </section>
        </div>
      )}
      
    </main>
  );
}