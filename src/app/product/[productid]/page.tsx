"use client";

import Image from "next/image";
import { useState } from "react";
import { FaShoppingBag, FaShippingFast } from "react-icons/fa";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const productList = [
  {
    id: "1",
    img: "/products/heart2.webp",
    name: "Lindt HELLO Just For You Heart",
    price: 15,
    description: "Rich and intense dark chocolate",
    Paragraph:
      "A heartfelt gift for someone special, the Lindt HELLO Just For You Heart is a token of love wrapped in rich, dark chocolate. Let this indulgent treat speak your emotions, one delightful bite at a time.",
  },
  {
    id: "2",
    img: "/products/paralines2.webp",
    name: "Lindt Mini Pralines Box",
    price: 10,
    description: "Smooth and creamy milk chocolatem",
    Paragraph:
      "Experience a symphony of flavors in every bite with the Lindt Mini Pralines Box. Perfectly sized for a touch of sweetness, these milk chocolate delights are ideal for sharing or savoring alone.",
  },
  {
    id: "3",
    img: "/products/oranage.webp",
    name: "Lindt Lindor Milk Orange Truffles",
    price: 12,
    description: "Sweet and luscious white chocolate.",
    Paragraph:
      " Indulge in the refreshing fusion of creamy milk chocolate and zesty orange with Lindt Lindor Milk Orange Truffles. A perfect balance of sweetness and tanginess for a truly unique treat.",
  },
  {
    id: "4",
    img: "/products/taddy.webp",
    name: "Lindt Teddy Chocolate Bear",
    price: 18,
    description: "Crunchy hazelnuts in milk chocolate.",
    Paragraph:
      "Bring joy and nostalgia with the Lindt Teddy Chocolate Bear. Packed with crunchy hazelnuts and smooth milk chocolate, this charming treat is perfect for kids and the young at heart.",
  },
  {
    id: "5",
    img: "/products/dark.webp",
    name: "Lindt Dark No Added Sugar Bar",
    price: 20,
    description: "Premium almond chocolate treat.",
    Paragraph:
      "Satisfy your cravings guilt-free with the Lindt Dark No Added Sugar Bar. This premium chocolate offers an intense cocoa flavor with the crunch of almonds for a wholesome indulgence.",
  },

  {
    id: "6",
    img: "/products/straw.webp",
    name: "Lindt HELLO Strawberry Cheesecake Bar",
    price: 14,
    description: "Chocolate filled with caramel goodness.",
    Paragraph:
      " Delight in the creamy richness of cheesecake paired with the fruity freshness of strawberries, all wrapped in decadent chocolate with the Lindt HELLO Strawberry Cheesecake Bar.",
  },
  {
    id: "7",
    img: "/products/milk.webp",
    name: "Lindt Lindor Armour Heart Milk Truffle",
    price: 16,
    description: "Refreshing mint-flavored chocolate.",
    Paragraph:
      " Celebrate love and sweetness with the Lindt Lindor Armour Heart Milk Truffle. This smooth and velvety chocolate is the perfect way to show you care.",
  },
  {
    id: "8",
    img: "/products/selection.webp",
    name: "Lindt Selection Box",
    price: 22,
    description: "Packed with fruits and nuts.",
    Paragraph:
      "Discover a treasure trove of flavors in the Lindt Selection Box. With fruits, nuts, and premium chocolate, this assortment is perfect for indulging or sharing with loved ones.",
  },
  {
    id: "9",
    img: "/products/swiss.webp",
    name: "Lindt Swiss Luxury Selection Box ",
    price: 19,
    description: "Chocolate with peanut butter filling.",
    Paragraph:
      "Experience the epitome of chocolate craftsmanship with the Lindt Swiss Luxury Selection Box. A decadent assortment of flavors awaits, making every moment extraordinary.",
  },
  {
    id: "10",
    img: "/products/lindor.webp",
    name: "Lindt Lindor Milk Truffles",
    price: 25,
    description: "Luxury chocolate truffle collection.",
    Paragraph:
      " Indulge in the creamy, irresistible center of Lindt Lindor Milk Truffles. These luxurious treats melt in your mouth, offering a moment of pure bliss.",
  },
  {
    id: "11",
    img: "/products/teddy2.webp",
    name: "Lindt  TEDDY Santa Girl OR Boy Mixed Milk Chocolate",
    price: 19,
    description: "Chocolate with peanut butter filling.",
    Paragraph:
      "Experience the epitome of chocolate craftsmanship with the Lindt Swiss Luxury Selection Box. A decadent assortment of flavors awaits, making every moment extraordinary.",
  },
  {
    id: "12",
    img: "/products/jar.webp",
    name: "Lindt Hazelnut Chocolate Spread",
    price: 25,
    description: "Luxury chocolate truffle collection.",
    Paragraph:
      " Indulge in the creamy, irresistible center of Lindt Lindor Milk Truffles. These luxurious treats melt in your mouth, offering a moment of pure bliss.",
  },
];

function ProductDetailsPage({ params }: { params: { productid: string } }) {
  const { productid } = params;

  // Cart State
  const [cart, setCart] = useState<
    { id: string; name: string; price: number; quantity: number }[]
  >([]);
  const [showCart, setShowCart] = useState(false);

  const product = productList.find((p) => p.id === productid);

  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-red-500 text-xl font-semibold">
          Product not found!
        </p>
      </div>
    );
  }

  // Add to Cart Handler
  const addToCart = (product: { id: string; name: string; price: number }) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setShowCart(true);
  };

  // Increment Quantity
  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement Quantity
  const decreaseQuantity = (id: string) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Delete Item
  const deleteItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Total Quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto p-4 mt-32 min-h-screen relative">
      {/* Bag Icon */}
      <div className="fixed top-4 right-4  z-50">
        <button
          className="bg-[#FFD700] text-black p-3 rounded-full shadow-lg hover:bg-[#c9b021]"
          onClick={() => setShowCart(!showCart)}
        >
          <FaShoppingBag className="text-2xl  text-[#4B0082]" />{" "}
          {totalQuantity > 0 && (
            <span className="text-red-500">({totalQuantity})</span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="absolute top-0 right-0 bg-[#D4AF37]/30 backdrop-blur-md w-80 h-auto shadow-lg p-4 overflow-y-auto z-50 text-[#FFD700]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Bag</h2>
            <button
              className="font-bold text-[#FFD700]"
              onClick={() => setShowCart(false)}
            >
              ✖
            </button>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-[#FFD700] text-black px-2 py-1 rounded shadow"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <FiMinus />
                  </button>
                  <button
                    className="bg-[#FFD700] text-black px-2 py-1 rounded shadow"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <FiPlus />
                  </button>
                  <button
                    className="bg-[#FFD700] text-black px-2 py-1 rounded shadow"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your Bag is empty!</p>
          )}
          {cart.length > 0 && (
            <div className="mt-4">
              <p className="font-bold">Total Items: {totalQuantity}</p>
              <p className="font-bold">
                Total Price: $
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
              <p className="font-bold text-[#4B0082] mt-2 flex items-center gap-2">
                <FaShippingFast size={20} /> Free Shipping on all orders!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Product Details */}
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-e-full shadow-2xl p-8 flex flex-col md:flex-row gap-8 bg-gradient-to-br from-[#321E17] to-[#AE7822]">
        <div className="flex-shrink-0 shadow-2xl">
          <Image
            src={product.img}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex-grow text-[#FFD700] shadow-2xl">
          <h1 className="text-4xl font-extrabold mb-4 text-[#FFF5E1]">
            {product.name}
          </h1>
          <h2 className="text-[#FFFFFF] text-2xl font-extrabold">
            {product.description}
          </h2>
          <h1 className="text-[#FFF5E1] text-xl mt-4">{product.Paragraph}</h1>
          <h1 className="text-xl font-bold mt-4 text-[#FFD700]">
            Price: ${product.price}
          </h1>
          <button
            className="bg-[#FFD700] hover:bg-[#c9b021] text-[#4B0082] px-6 py-3 mt-6 rounded-ss-3xl shadow-lg transition font-bold font-serif"
            onClick={() => addToCart(product)}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
