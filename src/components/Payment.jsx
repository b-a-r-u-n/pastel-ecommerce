import React, { useEffect, useState } from "react";
import { CreditCard, Smartphone, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
  
  const cartData = useSelector(state => state.cart.cart)

  const navigate = useNavigate();

  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0)

  const handlePayment = (e) => {

    e.preventDefault();

  if (method === "cod") {
    navigate("/success");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    navigate("/success");
  }, 2000);
};

useEffect(() => {
  let temp = 0;

  cartData.map((data) => {
    temp += data.price * data.quantity;
  })

  if(temp < 50)
      temp += 99

  setTotal(temp)
},[cartData])

  return (
    <div className="min-h-screen bg-[#F3F0FF] px-4 sm:px-8 lg:px-12 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#7C3AED] mb-8">
        Payment Details
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Select Payment Method
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

            {/* CARD */}
            <div
              onClick={() => setMethod("card")}
              className={`rounded-xl p-4 cursor-pointer transition border-2 ${
                method === "card"
                  ? "border-[#7C3AED] bg-[#F3F0FF]"
                  : "border-gray-200 hover:border-[#7C3AED]"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <CreditCard size={28} />
                <span>Card</span>
              </div>
            </div>

            {/* UPI */}
            <div
              onClick={() => setMethod("upi")}
              className={`rounded-xl p-4 cursor-pointer transition border-2 ${
                method === "upi"
                  ? "border-[#7C3AED] bg-[#F3F0FF]"
                  : "border-gray-200 hover:border-[#7C3AED]"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Smartphone size={28} />
                <span>UPI</span>
              </div>
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod("cod")}
              className={`rounded-xl p-4 cursor-pointer transition border-2 ${
                method === "cod"
                  ? "border-[#7C3AED] bg-[#F3F0FF]"
                  : "border-gray-200 hover:border-[#7C3AED]"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Wallet size={28} />
                <span>COD</span>
              </div>
            </div>

          </div>

          <form action="" onSubmit={handlePayment}>
            {/* CONDITIONAL UI */}
          {method === "card" && (
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
              <input
                type="tel"
                maxLength={12}
                pattern="[0-9]{12}"
                placeholder="Card Number"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  required
                />
                <input
                  type="tel"
                  maxLength={3}
                  pattern="[0-9]{3}"
                  placeholder="CVV"
                  className="px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                  required
                />
              </div>
            </div>
          )}

          {method === "upi" && (
            <input
              className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              placeholder="Enter UPI ID"
              required
            />
          )}

          {method === "cod" && (
            <div className="bg-[#F3F0FF] p-4 rounded-xl">
              Pay $ {total} at delivery.
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            // onClick={handlePayment}
            disabled={loading}
            className="w-full mt-8 bg-[#F59E0B] hover:bg-[#7C3AED] text-white py-3 rounded-xl font-semibold transition flex items-center justify-center cursor-pointer"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : method === "cod" ? (
              "Place Order"
            ) : (
              `Pay $ ${total}`
            )}
          </button>
          </form>

        </div>

        {/* RIGHT SUMMARY */}
        <div className="w-full lg:w-[35%] bg-white rounded-2xl shadow-xl p-6 h-fit lg:sticky lg:top-10">

          <h2 className="text-xl font-semibold text-[#7C3AED] mb-6">
            Order Summary
          </h2>

          <div className="space-t-3">
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


            <div className="flex justify-between font-bold text-[#7C3AED] border-t pt-3">
              <span>Total</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;