import { Navbar } from "../components/Navbar";

export function Volunteer() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Volunteer Dashboard</h2>
        <p>View tasks, accept issues, upload proof, and track earned tokens.</p>
      </main>
    </div>
  );
}
