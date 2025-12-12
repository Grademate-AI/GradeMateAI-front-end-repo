import { Navbar} from "../components/Navbar";

export function NGO() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">NGO Dashboard</h2>
        <p>View ResQ stations, volunteers, token balances, and aggregated issues here.</p>
      </main>
    </div>
  );
}
