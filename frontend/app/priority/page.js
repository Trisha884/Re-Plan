
// "use client";

// export default function PriorityPage() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-100">
//       <h1 className="text-4xl font-bold text-blue-700">
//         Welcome to Re-Plan! 🎉
//       </h1>

//       <p className="mt-4 text-lg text-gray-700">
//         My Priority Page is Working!
//       </p>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";

export default function PriorityPage() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "", time: "", unit: "Days", priority: "" },
    { id: 2, name: "", time: "", unit: "Days", priority: "" },
  ]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem("subjects");
    if (saved) setSubjects(JSON.parse(saved));
  }, []);

  function update(id, field, value) {
    setSubjects(subjects.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    ));
  }

  
    function addSubject() {
    setSubjects([...subjects, {
      id: Date.now(), name: "", time: "", unit: "Days", priority: ""
    }]);
  }

  function savePlan() {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    alert("Plan saved!");
  }
      return (
    <main className="min-h-screen bg-[#0B0B0D] p-6 text-[#F5F5F5]">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#D4AF37]">
        {step === 1 ? "Plan Your Subjects" : "Set Your Priorities"}
      </h1>

      {step === 1 ? (
        <div className="mx-auto max-w-xl space-y-4">
          {subjects.map((s, i) => (
            <div
              key={s.id}
              className="rounded-xl border border-[#3A3020] bg-[#171719] p-4 shadow-lg"
            >
              <h2 className="mb-2 font-bold text-[#D4AF37]">
                Subject {i + 1}
              </h2>

              <input
                className="mb-3 w-full rounded-lg border border-[#665323] bg-[#252528] p-3 text-white placeholder:text-gray-400 focus:border-[#D4AF37] focus:outline-none"
                placeholder="Subject name"
                value={s.name}
                onChange={e => update(s.id, "name", e.target.value)}
              />

              <div className="flex gap-2">
                <input
                  className="w-1/2 rounded-lg border border-[#665323] bg-[#252528] p-3 text-white placeholder:text-gray-400 focus:border-[#D4AF37] focus:outline-none"
                  type="number"
                  min="1"
                  placeholder="Deadline"
                  value={s.time}
                  onChange={e => update(s.id, "time", e.target.value)}
                />

                <select
                  className="w-1/2 rounded-lg border border-[#665323] bg-[#252528] p-3 text-white focus:border-[#D4AF37] focus:outline-none"
                  value={s.unit}
                  onChange={e => update(s.id, "unit", e.target.value)}
                >
                  <option>Hours</option>
                  <option>Days</option>
                  <option>Weeks</option>
                </select>
              </div>
            </div>
          ))}

          <button
            onClick={addSubject}
            className="w-full rounded-lg border border-[#D4AF37] p-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            + Add Subject
          </button>

          <button
            onClick={() => setStep(2)}
            className="w-full rounded-lg bg-[#D4AF37] p-3 font-bold text-black transition hover:bg-[#E8C75A]"
          >
            Continue →
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-xl space-y-4">
          {subjects.map((s, i) => (
            <div
              key={s.id}
              className="flex items-center justify-between rounded-xl border border-[#3A3020] bg-[#171719] p-4 shadow-lg"
            >
              <div>
                <p className="font-bold text-[#D4AF37]">{s.name}</p>
                <p className="text-sm text-gray-400">
                  Deadline: {s.time} {s.unit}
                </p>
              </div>

              <select
                className="rounded-lg border border-[#665323] bg-[#252528] p-2 text-white focus:border-[#D4AF37] focus:outline-none"
                value={s.priority}
                onChange={e => update(s.id, "priority", e.target.value)}
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
            className="rounded-lg border border-[#665323] p-2 text-[#D4AF37] transition hover:bg-[#252528]"
          >
            ← Back
          </button>

          <button
            onClick={savePlan}
            className="ml-3 rounded-lg bg-[#D4AF37] p-2 font-bold text-black transition hover:bg-[#E8C75A]"
          >
            Save Plan
          </button>
        </div>
      )}
    </main>
  );
}