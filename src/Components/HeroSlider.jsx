"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Affordable Price For Car Servicing",
    desc: "There are many variations of passages of available, but the majority have suffered alteration in some form.",
    img: "/assets/images/banner/5.jpg",
  },
  {
    id: 2,
    title: "Expert Mechanics You Can Trust",
    desc: "Certified professionals ready to give your car the care it deserves, with top-notch skills.",
    img: "/assets/images/banner/1.jpg",
  },
  {
    id: 3,
    title: "Modern Tools & Technology",
    desc: "We ensure quality service with advanced diagnostic tools and modern technology.",
    img: "/assets/images/banner/2.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // autoplay loop
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="max-w-[1140px] mx-auto relative h-[600px] lg:rounded-xl overflow-hidden mt-5">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold max-w-xl leading-snug">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg max-w-lg">{slide.desc}</p>
            <div className="mt-6 flex gap-4">
              <button className="bg-[#FF3811] px-5 py-2 rounded-md font-medium hover:bg-red-700 transition cursor-pointer">
                Discover More
              </button>
              <button className="border border-white px-5 py-2 rounded-md font-medium hover:bg-white hover:text-black transition cursor-pointer">
                Latest Project
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Right Arrows (same as image) */}
      <div className="absolute bottom-6 right-6 flex gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white cursor-pointer hover:bg-white/40 transition"
        >
          <ArrowLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF3811] text-white cursor-pointer hover:bg-[#FF3811] transition"
        >
            <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
