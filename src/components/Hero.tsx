import { type FC } from "react";
import { Carousel } from "react-bootstrap";

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
    <section className="hero w-screen relative">
      <Carousel fade interval={4500} indicators controls={false} className="w-full">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="relative w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

              {/* Text content */}
              <div className="relative z-10 max-w-2xl text-white space-y-4 mx-6 sm:mx-12 md:mx-24">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug glow-neon">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {slide.desc}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {/* Get Started Button */}
                  <button className="px-10 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 text-gray-900 font-bold text-lg hover:from-emerald-300 hover:to-blue-400 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                    Get Started
                  </button>

                  {/* Watch Demo Button */}
                  <button className="px-10 py-3 rounded-full bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-gray-900 transition-all shadow hover:shadow-xl hover:scale-105">
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
