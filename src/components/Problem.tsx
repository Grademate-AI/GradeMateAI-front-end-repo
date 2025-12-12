// Problem.tsx
import { type FC } from "react";

const problems = [
  {
    title: "Urgent Local Needs",
    desc: "Millions of people in communities face urgent challenges daily — medical, food, or transport emergencies.",
    icon: "⚠️",
  },
  {
    title: "Uncoordinated Volunteers",
    desc: "Over 40% of volunteer opportunities go unfulfilled due to lack of coordination and verification.",
    icon: "🤝",
  },
  {
    title: "Opaque Aid",
    desc: "Traditional aid lacks transparency, leading to low trust and slow response times.",
    icon: "🔍",
  },
];

export const Problem: FC = () => {
  return (
    <section className="my-5 text-white overflow-hidden">
      <div className="container">
        <h2
          className="text-center text-3xl md:text-4xl fw-bold mb-5"
          style={{ color: "#6EE7B7", textShadow: "0 0 10px #6EE7B7" }}
        >
          The Problems We Solve
        </h2>
        <div className="row g-4">
          {problems.map((p) => (
            <div key={p.title} className="col-12 col-md-4">
              <div
                className="h-100 p-4 rounded-3 shadow-lg text-center d-flex flex-column align-items-center justify-content-start"
                style={{
                  border: "1px solid rgba(75, 155, 255, 0.3)",
                  background: "rgba(7, 16, 37, 0.6)",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
              >
                <div className="mb-3 display-4">{p.icon}</div>
                <h3
                  className="fw-semibold mb-2"
                  style={{ color: "#6EE7B7", textShadow: "0 0 8px #6EE7B7" }}
                >
                  {p.title}
                </h3>
                <p className="text-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
