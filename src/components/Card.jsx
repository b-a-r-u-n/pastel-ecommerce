import React from 'react'
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { Toaster } from 'react-hot-toast';

const Card = ({product}) => {

  const dispatch = useDispatch();


  return (
    <div className="w-full md:w-72 h-[430px] bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col inset-shadow-sm pt-5">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 md:h-56 object-contain object-center group-hover:scale-105 transition duration-300"
        />

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-[#F3F0FF] transition">
          <Heart size={18} className="text-[#7C3AED]" />
        </button>

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-[#F59E0B] text-white text-xs px-3 py-1 rounded-full font-semibold">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h3 className="text-[#1F2937] font-semibold text-lg">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[#F59E0B]">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < product.rating ? "#F59E0B" : "none"}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[#7C3AED]">
            $ {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button 
          className="w-full mt-3 bg-[#7C3AED] hover:bg-[#F59E0B] text-white py-2 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          onClick={() => dispatch(addToCart({product, id: product.id}))}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card
