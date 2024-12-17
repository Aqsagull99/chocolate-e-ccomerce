"use client";
import React from "react";
import Image from "next/image";

function NewArrivals() {
  return (
    <div className="py-20 px-4 ">
     

      {/* Slider Section */}
      <div className="overflow-hidden">
        <div className="flex animate-slide">
          {/* Original set of 10 cards */}
          {[
            "/new/farrero rocher.jpg",
            "/new/kitkat2.jpg",
            "/new/cadbury.jpg",
            "/new/hershyes.jpg",
            "/new/toblerone.jpg",
            "/new/lindt.jpg",
            "/new/snickers.jpg",
            "/new/mars.jpg",
            "/new/milky-way.jpg",
            "/new/twix.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-lg mx-2 overflow-hidden"
            >
              <Image
                src={src}
                alt={`New Arrival ${index + 1}`}
                width={250}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Duplicate set for infinite scrolling */}
          {[
            "/new/farrero rocher.jpg",
            
          ].map((src, index) => (
            <div
              key={index + 10}
              className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-lg mx-2 overflow-hidden"
            >
              <Image
                src={src}
                alt={`New Arrival ${index + 1}`}
                width={250}
                height={350}
                
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          display: flex;
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default NewArrivals;





