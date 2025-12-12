import { type FC } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar"; // Import Navbar

export const Login: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071025] via-[#07101a] to-[#0b122d] text-white font-sans">
      <Navbar /> {/* Add Navbar */}

      <div className="flex items-center justify-center mt-24 px-4">
        <div className="bg-[#0c1324] p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center glow-neon">ResQ Login</h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl bg-[#1a1f3a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-xl bg-[#1a1f3a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="p-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 text-gray-900 font-semibold text-lg hover:from-emerald-300 hover:to-blue-400 transition-all shadow-lg hover:shadow-2xl"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
