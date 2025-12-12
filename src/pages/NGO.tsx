import { Header } from "../components/Header";

export function NGO() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">NGO Dashboard</h2>
        <p>View ResQ stations, volunteers, token balances, and aggregated issues here.</p>
      </main>
    </div>
  );
}
