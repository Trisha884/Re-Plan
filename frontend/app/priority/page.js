

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PriorityPage() {
  const router = useRouter();

  const [subjects, setSubjects] = useState([
    { id: 1, name: "", time: "", unit: "Days", deadline: "", priority: "" },
    { id: 2, name: "", time: "", unit: "Days", deadline: "", priority: "" },
  ]);

  const [step, setStep] = useState(1);

  function update(id, field, value) {
    setSubjects(
      subjects.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      )
    );
  }

  function addSubject() {
    setSubjects([
      ...subjects,
      {
        id: Date.now(),
        name: "",
        time: "",
        unit: "Days",
        deadline: "",
        priority: "",
      },
    ]);
  }

  function savePlan() {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    router.push("/schedule");
  }

  return (
    <main className="min-h-screen bg-[#0B0B0D] p-6 text-[#F5F5F5]">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#D4AF37]">
        {step === 1 ? "Plan Your Goals" : "Set Your Priorities"}
      </h1>

      {step === 1 ? (
        <div className="mx-auto max-w-xl space-y-4">
          {subjects.map((s, i) => (
            <div
              key={s.id}
              className="rounded-xl border border-[#3A3020] bg-[#171719] p-4 shadow-lg"
            >
              <h2 className="mb-2 font-bold text-[#D4AF37]">
                Goal {i + 1}
              </h2>

              <input
                className="mb-3 w-full rounded-lg border border-[#665323] bg-[#252528] p-3 text-white"
                placeholder="Goal name"
                value={s.name}
                onChange={(e) => update(s.id, "name", e.target.value)}
              />

              <p className="mb-2 text-sm text-gray-300">Time needed</p>

              <div className="mb-4 flex gap-2">
                <input
                  className="w-1/2 rounded-lg border border-[#665323] bg-[#252528] p-3 text-white"
                  type="number"
                  min="1"
                  placeholder="Duration"
                  value={s.time}
                  onChange={(e) => update(s.id, "time", e.target.value)}
                />

                <select
                  className="w-1/2 rounded-lg border border-[#665323] bg-[#252528] p-3 text-white"
                  value={s.unit}
                  onChange={(e) => update(s.id, "unit", e.target.value)}
                >
                  <option>Hours</option>
                  <option>Days</option>
                  <option>Weeks</option>
                </select>
              </div>

              <p className="mb-2 text-sm text-gray-300">Target date</p>

              <input
                className="w-full rounded-lg border border-[#665323] bg-[#252528] p-3 text-white"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={s.deadline}
                onChange={(e) => update(s.id, "deadline", e.target.value)}
              />
            </div>
          ))}

          <button
            onClick={addSubject}
            className="w-full rounded-lg border border-[#D4AF37] p-3 font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            + Add Goal
          </button>

          <button
            onClick={() => setStep(2)}
            className="w-full rounded-lg bg-[#D4AF37] p-3 font-bold text-black hover:bg-[#E8C75A]"
          >
            Continue →
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-xl space-y-4">
          {subjects.map((s, i) => (
            <div
              key={s.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-[#3A3020] bg-[#171719] p-4"
            >
              <div>
                <p className="font-bold text-[#D4AF37]">{s.name}</p>
                <p className="text-sm text-gray-400">
                  Target: {s.deadline}
                </p>
              </div>

              <select
                className="rounded-lg border border-[#665323] bg-[#252528] p-2 text-white"
                value={s.priority}
                onChange={(e) => update(s.id, "priority", e.target.value)}
              >
                <option value="">Priority</option>
                {subjects.map((_, n) => (
                  <option key={n} value={String(n + 1)}>
                    {n + 1}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            onClick={() => setStep(1)}
            className="rounded-lg border border-[#665323] p-2 text-[#D4AF37]"
          >
            ← Back
          </button>

          <button
            onClick={savePlan}
            className="ml-3 rounded-lg bg-[#D4AF37] p-2 font-bold text-black hover:bg-[#E8C75A]"
          >
            Save Plan
          </button>
        </div>
      )}
    </main>
  );
}
