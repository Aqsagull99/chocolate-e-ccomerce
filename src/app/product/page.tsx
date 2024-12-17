"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function ProductCard() {
  const [searchQuery, setSearchQuery] = useState("");

  const productList = [
    {
      id: "1",
      img: "/products/heart2.webp",
      name: "Lindt HELLO Just For You Heart",
      price: "$5",
    },
    {
      id: "2",
      img: "/products/paralines2.webp",
      name: "Lindt Mini Pralines Box",
      price: "$6",
    },
    {
      id: "3",
      img: "/products/oranage.webp",
      name: "Lindt Lindor Milk Orange Truffles",
      price: "$7",
    },
    {
      id: "4",
      img: "/products/taddy.webp",
      name: "Lindt Teddy Chocolate Bear",
      price: "$8",
    },
    {
      id: "5",
      img: "/products/dark.webp",
      name: "Lindt Dark No Added Sugar Bar",
      price: "$9",
    },
    {
      id: "6",
      img: "/products/straw.webp",
      name: "Lindt HELLO Strawberry Cheesecake",
      price: "$6",
    },
    {
      id: "7",
      img: "/products/milk.webp",
      name: "Lindt Lindor Armour Heart Milk Truffle",
      price: "$5",
    },
    {
      id: "8",
      img: "/products/selection.webp",
      name: "Lindt Selection Box",
      price: "$7",
    },
    {
      id: "9",
      img: "/products/swiss.webp",
      name: "Lindt Swiss Luxury Selection Box",
      price: "$8",
    },
    {
      id: "10",
      img: "/products/lindor.webp",
      name: "Lindt Lindor Milk Truffles",
      price: "$6",
    },
    {
      id: "11",
      img: "/products/teddy2.webp",
      name: "Lindt TEDDY Santa Girl OR Boy Mixed",
      price: "$6",
    },
    {
      id: "12",
      img: "/products/jar.webp",
      name: "Lindt Hazelnut Chocolate Spread",
      price: "$6",
    },
  ];

  // Filter products based on search query
  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-[#321E17] to-[#AE7822] mt-32 mb-56">
      {/* Search bar */}
      <div className="flex justify-center items-center text-center mb-6">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for products..."
            className="py-2 pl-12 pr-4 rounded-full border border-[#8B6C42] 
        w-full sm:w-72 md:w-80 lg:w-[400px] bg-[#321E17]/20 
        text-[#D4AF37] placeholder-[#B39B6E] focus:outline-none 
        focus:ring-2 focus:ring-[#D4AF37] transition duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch
            className="absolute left-4 sm:left-4 md:left-4 lg:left-4 top-1/2 
        transform -translate-y-1/2 text-[#D4AF37]"
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="shadow-2xl rounded-lg p-4 hover:scale-105 transition-all duration-300 text-center"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={500}
                height={500}
                className="mx-auto rounded"
                layout="intrinsic"
              />
              <h2 className="text-center mt-4 text-lg md:text-xl text-[#FFF5E1] font-medium font-serif">
                {product.name}
              </h2>
              <p className="text-center text-[#FFD700] mt-2 md:text-lg">
                {product.price}
              </p>
              <Link href={`/product/${product.id}`}>
                <button className="bg-[#FFD700] hover:bg-[#c9b021] text-[#4B0082] px-6 py-3 mt-6 rounded-ss-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
