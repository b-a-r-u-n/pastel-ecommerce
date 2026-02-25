import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    // // const navigate = useNavigate();

    // const onRetry = () => {
    //     // navigate(0);
    // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F0FF] px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-[#7C3AED] mb-4">
          Connection Error
        </h1>

        <p className="text-gray-500 mb-6">
          Unable to load data. Please check your internet connection.
        </p>

        <button
        //   onClick={onRetry}
          className="bg-[#F59E0B] hover:bg-[#7C3AED] text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Reload
        </button>

      </div>
    </div>
  )
}

export default Error
