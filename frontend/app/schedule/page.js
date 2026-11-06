
"use client";

import { useEffect, useState } from "react";

export default function SchedulePage() {
  const [subjects, setSubjects] = useState([]);
  const [done, setDone] = useState({});
  const [selected, setSelected] = useState(null);
  const [newDeadline, setNewDeadline] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("subjects") || "[]");
    const completed = JSON.parse(localStorage.getItem("scheduleCompletion") || "{}");
    const savedDates = JSON.parse(localStorage.getItem("scheduleDeadlines") || "{}");

    const updated = stored.map((subject, index) => {
      const id = String(subject.id ?? index);
      const originalDeadline = subject.originalDeadline || subject.deadline || "";
      const deadline = savedDates[id] || originalDeadline;

      return { ...subject, id, originalDeadline, deadline };
    });

    setDone(completed);
    setSubjects(updated);
  }, []);

  function toggleDone() {
    const updated = { ...done, [selected.id]: !done[selected.id] };

    setDone(updated);
    localStorage.setItem("scheduleCompletion", JSON.stringify(updated));

    const dates = JSON.parse(localStorage.getItem("completionDates") || "{}");

    if (updated[selected.id]) {
      dates[selected.id] = new Date().toLocaleDateString("en-CA");
    } else {
      delete dates[selected.id];
    }

    localStorage.setItem("completionDates", JSON.stringify(dates));
  }

  function saveReplan() {
    if (!newDeadline) {
      alert("Please select a new deadline.");
      return;
    }

    const updated = subjects.map((subject) =>
      subject.id === selected.id
        ? { ...subject, deadline: newDeadline }
        : subject
    );

    const savedDates = JSON.parse(localStorage.getItem("scheduleDeadlines") || "{}");
    savedDates[selected.id] = newDeadline;

    localStorage.setItem("scheduleDeadlines", JSON.stringify(savedDates));

    setSubjects(updated);
    setSelected({ ...selected, deadline: newDeadline });
    setNewDeadline("");
  }

  const today = new Date().toLocaleDateString("en-CA");

  const points = subjects.map((_, i) => `${i % 2 ? 290 : 110},${72 + i * 144}`);

  const road = points.map((point, i) => {
    const [x, y] = point.split(",").map(Number);

    if (!i) return `M ${x} ${y}`;

    const previousX = i % 2 ? 110 : 290;
    return ` C ${previousX} ${y - 48}, ${x} ${y - 48}, ${x} ${y}`;
  }).join("");

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#b89435 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <header className="relative z-20 border-b border-yellow-700/40 p-5">
        <h1 className="text-2xl font-bold text-[#d4af37]">
          Study Schedule
        </h1>
      </header>

      <section className="relative mx-auto max-w-3xl px-4 py-10">
        <p className="mb-8 text-center text-gray-300">
          Your goals, connected in priority order
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
                {done[subject.id] ? "✓ " : ""}
                {subject.name || `Goal ${index + 1}`}
              </button>
            </div>
          ))}

          {!subjects.length && (
            <p className="py-12 text-center text-gray-400">
              No goals found. Add goals on your Priority Plan page first.
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
              {selected.name || "Goal"}
            </h2>

            <p>
              Duration: {selected.time} {selected.unit}
            </p>

            <p className="mt-2">
              Priority: {selected.priority || "Not provided"}
            </p>

            <p className="mt-2">
              Original Deadline: {selected.originalDeadline || "Not provided"}
            </p>

            <p className="mt-2">
              Current Deadline: {selected.deadline || "Not provided"}
            </p>

            {selected.deadline !== selected.originalDeadline && (
              <p className="mt-2 font-semibold text-green-400">
                ✓ Re-planned
              </p>
            )}

            <label className="mt-5 flex items-center gap-3">
              <input
                type="checkbox"
                checked={!!done[selected.id]}
                onChange={toggleDone}
                className="h-5 w-5 accent-yellow-500"
              />
              Mark as complete
            </label>

            {!done[selected.id] && selected.deadline && selected.deadline < today && (
              <div className="mt-5 border-t border-yellow-700/40 pt-4">
                <p className="mb-3 font-semibold text-[#d4af37]">
                  Missed your deadline? Make a new plan.
                </p>

                <input
                  type="date"
                  min={today}
                  value={newDeadline}
                  onChange={(e) => setNewDeadline(e.target.value)}
                  className="w-full rounded-lg border border-[#665323] bg-[#252528] p-3 text-white"
                />

                <button
                  onClick={saveReplan}
                  className="mt-3 w-full rounded-lg bg-[#d4af37] p-3 font-bold text-black hover:bg-[#e8c75a]"
                >
                  Re-Plan
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
