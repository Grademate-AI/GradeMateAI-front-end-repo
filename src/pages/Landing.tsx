import { type FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Footer } from "../components/Footer";

const Landing: FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071025] via-[#07101a] to-[#0b122d] text-white font-sans">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4">
        <Problem />
      </main>
      <Footer />
    </div>
  );
};

export { Landing };
