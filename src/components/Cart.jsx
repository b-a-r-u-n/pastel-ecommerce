import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { handleQuantity, removeFromCart } from "../features/cartSlice";
import { Toaster } from "react-hot-toast";
import {Link} from 'react-router-dom'

// const Cart= () => {
//   const [coupon, setCoupon] = useState("");

//   const cartItems = [
//     {
//       id: 1,
//       name: "Lavender Hoodie",
//       price: 1299,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//     {
//       id: 2,
//       name: "Pastel Sneakers",
//       price: 1999,
//       quantity: 1,
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     },
//   ];

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const shipping = 50;
//   const discount = coupon === "PASTEL10" ? subtotal * 0.1 : 0;
//   const total = subtotal + shipping - discount;

//   return (
//     <div className="bg-white w-[100%] rounded-2xl shadow-xl p-6 sticky top-16">

//       <h2 className="text-2xl font-semibold text-[#7C3AED] mb-6">
//         Your Cart
//       </h2>

//       {/* Cart Items */}
//       <div className="space-y-4 max-h-[200px] overflow-y-auto">
//         {cartItems.map((item) => (
//           <div key={item.id} className="flex gap-4 items-center">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-16 h-16 object-cover rounded-xl"
//             />

//             <div className="flex-1">
//               <h4 className="text-[#1F2937] font-medium text-sm">
//                 {item.name}
//               </h4>
//               <p className="text-sm text-gray-500">
//                 ₹{item.price} × {item.quantity}
//               </p>
//             </div>

//             <Trash2
//               size={18}
//               className="text-red-400 cursor-pointer hover:text-red-600"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Divider */}
//       <div className="border-t my-5"></div>

//       {/* Price Summary */}
//       <div className="space-y-2 text-[#1F2937] text-sm">
//         <div className="flex justify-between">
//           <span>Subtotal</span>
//           <span>₹{subtotal}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>Shipping</span>
//           <span>₹{shipping}</span>
//         </div>

//         {discount > 0 && (
//           <div className="flex justify-between text-green-600">
//             <span>Discount</span>
//             <span>-₹{discount}</span>
//           </div>
//         )}

//         <div className="flex justify-between font-semibold text-lg text-[#7C3AED]">
//           <span>Total</span>
//           <span>₹{total}</span>
//         </div>
//       </div>

//       {/* Checkout Button */}
//       <button className="w-full mt-6 bg-[#F59E0B] hover:bg-[#7C3AED] text-white py-3 rounded-xl font-semibold transition">
//         Checkout
//       </button>

//     </div>
//   );
// };

// const Cart = () => {
//     const [coupon, setCoupon] = useState("");

//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "abc", price: 100, quantity: 2 },
//     { id: 2, name: "xyz", price: 200, quantity: 1 },
//     { id: 3, name: "premium hoodie", price: 150, quantity: 3 },
//     { id: 1, name: "abc", price: 100, quantity: 2 },
//     { id: 2, name: "xyz", price: 200, quantity: 1 },
//     { id: 3, name: "premium hoodie", price: 150, quantity: 3 },
//     { id: 1, name: "abc", price: 100, quantity: 2 },
//     { id: 2, name: "xyz", price: 200, quantity: 1 },
//     { id: 3, name: "premium hoodie", price: 150, quantity: 3 },
//     { id: 1, name: "abc", price: 100, quantity: 2 },
//     { id: 2, name: "xyz", price: 200, quantity: 1 },
//     { id: 3, name: "premium hoodie", price: 150, quantity: 3 },
//     { id: 1, name: "abc", price: 100, quantity: 2 },
//     { id: 2, name: "xyz", price: 200, quantity: 1 },
//     { id: 3, name: "premium hoodie", price: 150, quantity: 3 },
//   ]);

//   // 🔥 Increase quantity
//   const increaseQty = (id) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     ));
//   };

//   // 🔥 Decrease quantity
//   const decreaseQty = (id) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     ));
//   };

//   // 🔥 Remove item
//   const removeItem = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const shipping = 50;
//   const discount = coupon === "PASTEL10" ? subtotal * 0.1 : 0;
//   const total = subtotal + shipping - discount;

//   return (
//     <div className="min-h-screen bg-[#F3F0FF] p-10">

//       <h1 className="text-3xl font-bold text-[#7C3AED] mb-8">
//         Your Shopping Cart
//       </h1>

//       <div className="flex gap-8">

//         {/* LEFT - 70% Cart Items */}
//         <div className="w-[70%] bg-white rounded-2xl shadow-xl p-6">

//           {/* Table Header */}
//           <div className="grid grid-cols-5 font-semibold text-[#1F2937] pb-4 border-b">
//             <span>Product</span>
//             <span>Price</span>
//             <span>Quantity</span>
//             <span>Total</span>
//             <span>Remove</span>
//           </div>

//           {/* Items */}
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="grid grid-cols-5 items-center py-5 border-b"
//             >
//               <span className="text-[#1F2937]">{item.name}</span>

//               <span>₹{item.price}</span>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="px-3 py-1 bg-[#F3F0FF] rounded"
//                 >
//                   -
//                 </button>

//                 <span>{item.quantity}</span>

//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="px-3 py-1 bg-[#F3F0FF] rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               <span className="font-medium text-[#7C3AED]">
//                 ₹{item.price * item.quantity}
//               </span>

//               <Trash2
//                 className="text-red-400 cursor-pointer hover:text-red-600"
//                 onClick={() => removeItem(item.id)}
//               />
//             </div>
//           ))}
//         </div>

//         {/* RIGHT - 30% Summary */}
//         <div className="w-[30%] bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-10">

//           <h2 className="text-xl font-semibold text-[#7C3AED] mb-6">
//             Order Summary
//           </h2>

//           <div className="space-y-3 text-[#1F2937]">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{subtotal}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>₹{shipping}</span>
//             </div>

//             {discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount</span>
//                 <span>-₹{discount}</span>
//               </div>
//             )}

//             <div className="flex justify-between font-bold text-lg text-[#7C3AED] border-t pt-3">
//               <span>Total</span>
//               <span>₹{total}</span>
//             </div>
//           </div>

//           {/* Coupon */}
//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Enter Coupon Code"
//               value={coupon}
//               onChange={(e) => setCoupon(e.target.value)}
//               className="w-full px-3 py-2 border border-[#F3F0FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
//             />
//             <p className="text-xs text-gray-400 mt-1">
//               Try: PASTEL10
//             </p>
//           </div>

//           {/* Checkout */}
//           <button className="w-full mt-6 bg-[#F59E0B] hover:bg-[#7C3AED] text-white py-3 rounded-xl font-semibold transition">
//             Proceed to Checkout
//           </button>

//         </div>
//       </div>

//     </div>
//   );
// }

const Cart = () => {

  let cartsData = useSelector(state => state.cart.cart);

//   if (cartsData.length === 0) {
//   const storedCart = localStorage.getItem('cart');
//   cartsData = storedCart ? JSON.parse(storedCart) : [];
// }

  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartsData.forEach((data) => (
      temp += data.price * data.quantity
    ))

    setSubTotal(temp.toFixed(2));

    let shipping = 0;

    if (cartsData.length === 0)
      shipping = 0;
    else if (temp < 50)
      shipping = 99;

    setShippingFee(shipping);
    setTotal(temp + shipping);

    cartsData.forEach((data) => {
      if(data.quantity === 0)
        dispatch(removeFromCart({id: data.id}))
    })

  }, [cartsData])


  return (
    <div className="min-h-screen bg-[#F3F0FF] px-4 sm:px-8 lg:px-12 py-8">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <h1 className="text-2xl sm:text-3xl font-bold text-[#7C3AED] mb-8">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT - 70% Cart Items */}
        <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-xl p-6">

          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-5 font-semibold text-[#1F2937] pb-4 border-b">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Remove</span>
          </div>

          {/* Item 1 */}
          {
            cartsData?.map((data) => (
              <div key={data.id} className="border-b py-5 md:grid md:grid-cols-5 md:items-center">

                {/* Mobile Layout */}
                {/* <div className="md:hidden space-y-2">
                  <h3 className="font-medium text-[#1F2937]">
                    <div
                      className="h-50 w-[100%] bg-center bg-cover"
                      style={{ backgroundImage: `url(${data.image})` }}
                    >

                    </div>
                  </h3>
                  <p>Price: $ {data.price}</p>
                  <p>Quantity: {data.quantity}</p>
                  <p className="text-[#7C3AED] font-semibold">Total: ₹200</p>
                  <Trash2 className="text-red-400 cursor-pointer" />
                </div> */}

                {/* Mobile Layout */}
                <div className="md:hidden bg-white rounded-xl shadow-sm p-4 space-y-4">

                  {/* Product Image */}
                  <div
                    className="h-60 w-full rounded-lg bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${data.image})` }}
                  />

                  {/* Product Info */}
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-semibold text-gray-800">$ {data.price}</p>
                  </div>

                  {/* Quantity Section */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Quantity</p>

                    <div className="flex items-center gap-3">
                      <button 
                        className="bg-rose-300 px-2 py-1 text-gray-900 rounded-md font-bold text-sm"
                        onClick={() => dispatch(handleQuantity({id: data.id, num: -1}))}
                      >
                        <Minus size={16} />
                      </button>

                      <span className="font-medium text-gray-800">
                        {data.quantity}
                      </span>

                      <button 
                        className="bg-green-300 px-2 py-1 text-gray-900 rounded-md font-bold text-sm"
                        onClick={() => dispatch(handleQuantity({id: data.id, num: 1}))}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Total + Delete */}
                  <div className="flex items-center justify-between border-t pt-3">
                    <p className="font-semibold text-[#7C3AED]">
                      $ {(data.price * data.quantity).toFixed(2)}
                    </p>

                    <button
                      onClick={() => dispatch(removeFromCart({ id: data.id }))}
                      className="text-red-400"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>

                {/* Desktop Layout */}
                <span className="hidden md:block">
                  <div
                    className="h-20 w-[70%] bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${data.image})` }}
                  >

                  </div>
                </span>
                <span className="hidden md:block">$ {data.price}</span>
                <div
                  className="flex gap-3"
                >
                  <button
                    className="hidden md:block bg-rose-300 px-0.5 text-gray-900 rounded font-bold text-sm cursor-pointer"
                    onClick={() => dispatch(handleQuantity({id: data.id, num: -1}))}
                  >
                    <Minus />
                  </button>
                  <span className="hidden md:block">{data.quantity}</span>
                  <button
                    className="hidden md:block bg-green-300 px-0.5 text-gray-900 rounded font-bold text-sm cursor-pointer"
                    onClick={() => dispatch(handleQuantity({id: data.id, num: 1}))}
                  >
                    <Plus />
                  </button>
                </div>
                <span className="hidden md:block text-[#7C3AED] font-medium">
                  $ {(data.price * data.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => dispatch(removeFromCart({ id: data.id }))}
                >
                  <Trash2 className="hidden md:block text-red-400 cursor-pointer" />
                </button>
              </div>
            ))
          }

        </div>

        {/* RIGHT - 30% Summary */}
        <div className="w-full lg:w-[30%] bg-white rounded-2xl shadow-xl p-6 h-fit lg:sticky lg:top-15">

          <h2 className="text-xl font-semibold text-[#7C3AED] mb-6">
            Order Summary
          </h2>

          <div className="space-y-3 text-[#1F2937]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ {subTotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$ {shippingFee}</span>
            </div>

            <div className="flex justify-between font-bold text-lg text-[#7C3AED] border-t pt-3">
              <span>Total</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="w-full px-3 py-2 border border-[#F3F0FF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />
            <p className="text-xs text-gray-400 mt-1">
              Try: PASTEL10
            </p>
          </div>

          <Link
            to={cartsData.length > 0 ? "/address" : "#"}
          >
            <button className="w-full mt-6 bg-[#F59E0B] hover:bg-[#7C3AED] text-white py-3 rounded-xl font-semibold transition cursor-pointer">
            Proceed to Checkout
          </button>
          </Link>

        </div>

      </div>
    </div>
  );
};


export default Cart;