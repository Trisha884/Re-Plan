
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
    {
      id: 1,
      name: "",
      time: "",
      unit: "Days",
      priority: "",
    },
    {
      id: 2,
      name: "",
      time: "",
      unit: "Days",
      priority: "",
    },
  ]);

  const [step, setStep] = useState(1);

  
  useEffect(() => {
    const savedSubjects = localStorage.getItem("subjects");

    if (savedSubjects) {
      setSubjects(JSON.parse(savedSubjects));
    }
  }, []);

  function updateSubject(id, field, value) {
    setSubjects((oldSubjects) =>
      oldSubjects.map((subject) =>
        subject.id === id
          ? { ...subject, [field]: value }
          : subject
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
        priority: "",
      },
    ]);
  }

  function savePlan() {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    alert("Your plan has been saved!");
  }
}