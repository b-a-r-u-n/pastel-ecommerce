import React from 'react'

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F3F0FF]">
      <div className="text-center">

        <div className="w-14 h-14 border-4 border-[#7C3AED] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

        <h1 className="text-2xl font-bold text-[#7C3AED]">
          PastelShop
        </h1>

        <p className="text-gray-500 mt-2">
          Loading your experience...
        </p>

      </div>
    </div>
  )
}

export default Loading
