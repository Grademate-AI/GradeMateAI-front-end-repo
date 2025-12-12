// Hero.tsx
import { type FC } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Hero: FC = () => {
  const slides = [
    {
      title: "ResQ Empowers Volunteers",
      desc: "Volunteers support communities, complete missions, and earn on-chain rewards.",
      img: "https://images.unsplash.com/photo-1598496253812-bf2d6f6b90e6?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "NGOs Track Real Impact",
      desc: "NGOs organize missions, oversee volunteers, and measure transparent impact.",
      img: "https://images.unsplash.com/photo-1581092580491-9273d2f2c2f4?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Helping Hands, Changing Lives",
      desc: "Every mission completed contributes to real community support and verified outcomes.",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2400&q=90",
    },
  ];

  return (
    <section className="relative mt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b9bff]/20 via-[#071025]/40 to-[#6EE7B7]/20 blur-3xl -z-10"></div>

      <Carousel fade interval={4500} controls={false} indicators={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#071025]/70 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#4b9bff]/25 to-transparent blur-xl"></div>

              <div className="relative z-10 max-w-3xl px-6 sm:px-12 md:px-20 space-y-6 text-white text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed">{slide.desc}</p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
                  <Link
                    to="/signup"
                    className="px-10 py-3 rounded-full bg-gradient-to-r from-[#4b9bff] to-[#6EE7B7] text-[#071025] font-bold text-lg shadow-xl hover:scale-105 transition-transform duration-300"
                  >
                    Get Started
                  </Link>
                  <button className="px-10 py-3 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white hover:text-[#071025] transition-all shadow-md hover:shadow-xl hover:scale-105">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
