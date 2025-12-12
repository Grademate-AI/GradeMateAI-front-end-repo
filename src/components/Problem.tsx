import { useState } from "react";

const extraProblems = [
  "Many communities lack real-time visibility of urgent needs.",
  "Volunteers often cannot prove their impact, reducing motivation.",
  "Donations and aid sometimes get lost due to lack of verification and accountability.",
  "Coordinating multiple NGOs and volunteers manually is inefficient and error-prone.",
  "Volunteers are often not rewarded fairly or transparently, reducing engagement."
];

export function Problem() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="problem-card mx-auto max-w-6xl" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-400 mb-4">The Problem We Solve</h2>
      <p className="text-gray-300 mb-4">
        Millions of people in local communities face urgent needs every day—medical emergencies, food shortages, or transport challenges. Traditional aid is often slow, opaque, and unreliable.
      </p>
      <ul className="list-disc list-inside text-gray-400 mb-4">
        <li>1 in 3 patients in low-income areas cannot access medicine within 24 hours.</li>
        <li>Over 40% of volunteer opportunities go unfulfilled due to lack of coordination and verification.</li>
        <li>Traditional aid lacks transparency, leading to low trust and slow response times.</li>
        {expanded && extraProblems.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <button
        className="cta"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </section>
  );
}
