
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
    <main className="min-h-screen bg-[#f7f3eb] p-6 text-[#40372f]">
      <h1 className="mb-6 text-center text-3xl font-bold">
        {step === 1 ? "Plan Your Subjects" : "Set Your Priorities"}
      </h1>

      {step === 1 ? (
        <div className="mx-auto max-w-xl space-y-4">
          {subjects.map((s, i) => (
            <div key={s.id} className="rounded-xl bg-white p-4 shadow">
              <h2 className="mb-2 font-bold">Subject {i + 1}</h2>

              <input
                className="mb-3 w-full rounded border p-2"
                placeholder="Subject name"
                value={s.name}
                onChange={e => update(s.id, "name", e.target.value)}
              />

              <div className="flex gap-2">
                <input
                  className="w-1/2 rounded border p-2"
                  type="number"
                  min="1"
                  placeholder="Deadline"
                  value={s.time}
                  onChange={e => update(s.id, "time", e.target.value)}
                />

                <select
                  className="w-1/2 rounded border p-2"
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

          <button onClick={addSubject} className="w-full rounded-lg border-2 p-3">
            + Add Subject
          </button>

          <button
            onClick={() => setStep(2)}
            className="w-full rounded-lg bg-[#806247] p-3 text-white"
          >
            Continue →
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-xl space-y-4">
          {subjects.map((s, i) => (
            <div key={s.id} className="flex items-center justify-between rounded bg-white p-3">
              <div>
                <p className="font-bold">{s.name}</p>
                <p className="text-sm text-gray-500">
                  Deadline: {s.time} {s.unit}
                </p>
              </div>

              <select
                className="rounded border p-2"
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

          <button onClick={() => setStep(1)} className="rounded border p-2">
            ← Back
          </button>

          <button onClick={savePlan} className="ml-3 rounded bg-[#806247] p-2 text-white">
            Save Plan
          </button>
        </div>
      )}
    </main>
  );
}