
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className="h-auto w-auto">
      <div className="w-full h-auto flex flex-col md:flex-row items-center p-5 gap-5 mb-16">
        {/* Text Section */}
        <div className="flex-1 text-[#FFD700] border-l-2 border-r-2 border-[#FFD700] pl-8">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to our world of premium chocolates, where every bite is a journey of indulgence and luxury. Our handcrafted chocolates are made with the finest ingredients, ensuring a rich and delightful experience in every piece. Whether you are craving dark, milk, or white chocolate, we have something for every chocolate lover.
            <br /><br />
            Indulge in our collection of truffles, pralines, and chocolate bars, each crafted with precision and love. Perfect for gifting or treating yourself, our chocolates come in beautifully designed packaging that reflects their exceptional quality.
            <br /><br />
            From classic flavors to unique blends, we bring you a variety of options to satisfy your sweet tooth. Discover the joy of chocolate with us—your one-stop shop for all things decadent and delicious. Let us make your moments sweeter, one bite at a time.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Swiss-Luxury-Selection.webp"
            alt="Swiss Luxury Selection"
            height={600}
            width={600}
            className="rounded-xl object-cover h-[200px] w-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
