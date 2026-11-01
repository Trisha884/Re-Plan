
"use client";

import { useState, useEffect } from "react";

export default function Schedule() {
  const [subjects, setSubjects] = useState([]);
  const [selected, setSelected] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("subjects") || "[]");
    setSubjects(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white p-6">
      <button onClick={() => setMenu(!menu)}
        className="text-2xl text-[#D4AF37]">☰</button>

      <h1 className="text-3xl font-bold text-[#D4AF37] mt-4">
        My Learning Path
      ```jsx
      {menu && (
        <div className="mt-4 rounded-xl border border-[#D4AF37] p-4">
          <a href="/">Home</a>
          <p className="mt-2"><a href="/priority">Priority Plan</a></p>
          <p className="mt-2">My Profile</p>
          <p className="mt-2">Settings</p>
          <p className="mt-2">Notifications</p>
          <p className="mt-2">Logout</p>
        </div>
      )}

      <div className="mt-10 flex flex-col items-center gap-8">
        {subjects.map((subject, index) => (
          <div key={subject.id || index}
            className={`rounded-full border-4 border-[#D4AF37] p-5
            ${index % 2 === 0 ? "mr-16" : "ml-16"}`}>
            <button onClick={() => setSelected(subject)}>
              {subject.name}
            </button>
          </div>
        ))}
      </div>
```