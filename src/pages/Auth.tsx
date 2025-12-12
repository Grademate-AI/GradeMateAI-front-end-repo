export function Auth() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-secondary/80 p-10 rounded-xl shadow-lg text-white w-96">
        <h2 className="text-2xl font-bold mb-6">Sign Up / Login</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="p-2 rounded bg-primary/50"/>
          <input type="email" placeholder="Email" className="p-2 rounded bg-primary/50"/>
          <input type="password" placeholder="Password" className="p-2 rounded bg-primary/50"/>
          <button className="bg-neon text-primary font-bold py-2 rounded hover:brightness-110 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
