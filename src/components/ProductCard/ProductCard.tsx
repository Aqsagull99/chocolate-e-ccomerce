

"use client";

import Image from "next/image";
import React, { useState } from "react";

// Product Interface
interface Product {
  img: string;
  id: number;
}

// Product List
const productList: Product[] = [
  { id: 1, img: "/avatar/men1.png" },
  { id: 2, img: "/avatar/men1.png" },
  { id: 3, img: "/avatar/men1.png" },
  { id: 4, img: "/avatar/men1.png" },
];

function ProductCard() {
  // Cart State
  const [cart, setCart] = useState<Product[]>([]);

  // Add to Cart Function
  const handleAddToCart = (product: Product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert("Product is already in the cart!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Product List Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Product List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <div
              key={product.id}
              className="border shadow-lg rounded-lg overflow-hidden p-4 bg-white"
            >
              <Image
                src={product.img}
                alt={`Product ${product.id}`}
                width={200}
                height={200}
                className="mx-auto"
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg mt-4 w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty!</p>
        ) : (
          <div className="border-t border-gray-300 p-4 bg-gray-50 rounded-lg">
            <ul className="space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-2 border-b last:border-b-0"
                >
                  <span className="font-medium text-gray-800">
                    Product ID: {item.id}
                  </span>
                  <span className="text-sm text-gray-500">
                    Product Image: {item.img}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProductCard;
