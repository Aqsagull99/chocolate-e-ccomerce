"use client"

import React, { useEffect, useState } from 'react';

function Seletext() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='text-[13px] sm:text-xl md:text-2xl lg:text-3xl max-w-full h-40 flex justify-center items-center bg-cover bg-no-repeat  '>
      <div
        className={` inline-block text-center p-7 bg-gradient-to-br from-[#321E17] to-[#AE7822] backdrop-blur-md rounded-xl shadow-lg ${visible ? 'animate-bounce' : ''}`}
      >
        <p className='tracking-tight font-extrabold text-[#FFD700]'>
          Flat 50% Off - Limited Time Offer!
        </p>
      </div>
    </div>
  );
}

export default Seletext;
