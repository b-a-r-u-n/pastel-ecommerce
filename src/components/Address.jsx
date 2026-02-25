import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();

  const cartData = useSelector(state => state.cart.cart);

  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment")
  }

  useEffect(() => {
    let temp = 0;

    cartData.forEach((data) => {
        temp += data.price * data.quantity;
    })

    if(temp < 50)
      temp += 99

    setTotal(temp);
  }, [cartData])

  return (
    <div className="min-h-screen bg-[#F3F0FF] px-4 sm:px-8 lg:px-12 py-10">

      <h1 className="text-2xl sm:text-3xl font-bold text-[#7C3AED] mb-8">
        Delivery Address
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT - Address Form */}
        <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          <h2 className="text-xl font-semibold text-[#1F2937] mb-6">
            Shipping Information
          </h2>

          <form 
            id="checkoutForm"
            onSubmit={handleSubmit}
          className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
            </div>

            <input
              type="tel"
              maxLength={10}
                pattern="[0-9]{10}"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              required
            />

            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              required
            />

            <input
              type="text"
              placeholder="Address Line 2 (Optional)"
              className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
              <input
                type="tel"
              maxLength={6}
                pattern="[0-9]{6}"
                placeholder="Postal Code"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
            </div>

          <button
          id="checkoutForm"
            type="submit"
            // onClick={() => navigate("/payment")}
            className="w-full mt-8 bg-[#F59E0B] hover:bg-[#7C3AED] text-white py-3 rounded-xl font-semibold transition cursor-pointer"
          >
            Continue to Payment
          </button>
          </form>


        </div>

        {/* RIGHT - Order Summary */}
        <div className="w-full lg:w-[35%] bg-white rounded-2xl shadow-xl p-6 h-fit lg:sticky lg:top-10">

          <h2 className="text-xl font-semibold text-[#7C3AED] mb-6">
            Order Summary
          </h2>

          <div className="space-t-3 text-[#1F2937]">

            <div className="flex justify-between">
                        <span className="w-[50%] font-semibold text-[#1F2937] pb-4">Product</span>
                        <span className="w-[10%] font-semibold text-[#1F2937] pb-4">Quantity</span>
                        <span className="w-[16%] font-semibold text-[#1F2937] pb-4">Total</span>
                    </div>
            <div
                className="max-h-[50vh] overflow-y-auto"
            >
                {
                cartData?.map((data) => (
                    <div key={data.id} className="flex justify-between border-t pt-5 pb-2">
                        <span className="w-[70%]">{data.title}</span>
                        <span className="w-[10%]">{data.quantity}</span>
                        <span className="w-[17%]">$ {(data.price * data.quantity).toFixed(2)}</span>
                    </div>
                ))
            }
            </div>
            

            <div className="flex justify-between font-bold text-lg text-[#7C3AED] border-t pt-3">
              <span>Total</span>
              <span>$ {total.toFixed(2)}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Address;