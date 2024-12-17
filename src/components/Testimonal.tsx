"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    img: "/avatar/men1.png",
    review: "The product exceeded my expectations! Fast shipping and great quality!",
    rating: 5,
    name: "Ethan Brown",
  },
  {
    img: "/avatar/women5.png",
    review: "Received my order on time. Product quality is excellent, highly recommend!",
    rating: 4,
    name: "Sophia Taylo",
  },
  {
    img: "/avatar/women2.png",
    review: " Absolutely love the product! Will definitely buy again. Worth every penny !",
    rating: 5,
    name: "Olivia Davis ",
  },
  {
    img: "/avatar/women1.png",
    review: " Great shopping experience, smooth transaction and product delivered as described!",
    rating: 4,
    name: "Emma Wilson ",
  },
  {
    img: "/avatar/women4.png",
    review: "Amazing customer service and high-quality product. Will definitely be back!",
    rating: 5,
    name: "Ava Thompson",
  },
  {
    img: "/avatar/men2.png",
    review: "Best purchase I have made! Quality and delivery were spot on. Very happy!",
    rating: 5,
    name: "James Carter",
  },
];

export default function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Interval for Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Detect window size
  useEffect(() => {
    const updateWindowSize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    updateWindowSize(); 
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16">
      <div className="container mx-auto relative flex flex-col items-center justify-center">
        {/* Center Review Section */}
        <div className="absolute text-center bg-gradient-to-br from-[#321E17] to-[#AE7822] backdrop-blur-lg border border-white/20 shadow-2xl p-6 sm:p-8 rounded-t-3xl w-72 sm:w-80 z-20">
          <Image
            src={currentTestimonial.img}
            alt={currentTestimonial.name}
            width={96}
            height={96}
            className="rounded-full mx-auto border-4 border-primary mb-4"
          />
          <p className="text-[#FFF5E1] italic mb-2">{currentTestimonial.review}</p>
          <div className="flex justify-center gap-1 text-[#FFD700] mb-2">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className=" font-bold text-[#FFD700]">{currentTestimonial.name}</p>
        </div>

        {/* Circular Layout */}
        <div className="relative w-[250px] left-[70px] bottom-[70px] md:right-[48px]  mt-16 h-[250px] sm:[350px] sm:h-[350px] md:[350px] md:h-[350px] lg:w-[600px] lg:h-[600px]  rounded-full  ">
          {testimonials.map((testimonial, index) => {
            const angle = (index / testimonials.length) * 2 * Math.PI;
            const radius = windowWidth && windowWidth < 640 ? 100 : 150; // Adjust radius based on width
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={index}
                className={`absolute w-12 h-12 sm:w-16 sm:h-16 sm:mt-20 lg:mt-20  rounded-full overflow-hidden shadow-md transition-transform duration-500 bg-white ${
                  index === currentIndex
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-60"
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                 <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-lg  " 
                /> 
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}







