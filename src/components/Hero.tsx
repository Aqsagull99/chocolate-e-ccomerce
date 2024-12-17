import Image from "next/image";

function Hero() {
  return (
    <div className=" bg-[#321E17]  h-auto w-full flex flex-col sm:flex-row md:flex-row lg:flex-row justify-evenly items-center px-4 lg:px-10 py-10">
      {/* Left Section - Image */}
      <div className="mix-blend-lighten flex-shrink-0">
        <Image
          src="/images/choco-c-1.png"
          alt="Hero Image"
          width={500}
          height={300}
          className="w-[100%]  sm:w-[100%] md:w-[100%]  lg:w-[600px] h-auto sm:h-[500px] md:h-[600px] lg:h-[800px]"
        />
      </div>

      {/* Right Section - Text */}
      <div className="text-center mt-6 lg:mt-0 flex flex-col items-center">
        <h1 className="text-[#B39B6E] text-[30px] sm:text-[40px] lg:text-8xl  font-extrabold tracking-wider drop-shadow-sm antialiased">
          <span className="bg-clip-text  text-transparent bg-gradient-to-r from-[#D4AF37] via-[#B39B6E] to-[#8B6C42]">
            Chocolate{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#B39B6E] to-[#8B6C42]">
              Bar
            </span>
          </span>
        </h1>
        <p className="text-[#B39B6E] mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium tracking-normal antialiased italic bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#B39B6E] to-[#8B6C42]">
          Indulge in the richness of every bite...
        </p>

        {/* iamge */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <Image
            src="/icons/hero-2.png"
            alt="Image"
            width={250}
            height={100}
            className="w-[160px]  h-auto sm:w-[200px] md:w-[250px] lg:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;




