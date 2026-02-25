import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../features/cartSlice";

const Success = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(emptyCart());

    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F0FF]">

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

        <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />

        <h1 className="text-2xl font-bold text-[#7C3AED]">
          Payment Successful!
        </h1>

        <p className="text-gray-500 mt-3">
          Redirecting to home page...
        </p>

      </div>

    </div>
  );
};

export default Success;