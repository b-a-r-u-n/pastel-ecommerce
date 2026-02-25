import React from "react";
import { Truck, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import image1 from '../images/avatar1.jpg'
import image2 from '../images/avatar2.jpg'
import image3 from '../images/avatar3.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-[#F3F0FF]">

      {/* HERO SECTION */}
      <div className="px-4 sm:px-8 lg:px-12 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7C3AED] mb-4">
          About PastelShop
        </h1>
        <p className="text-[#1F2937] max-w-2xl mx-auto">
          We bring you trendy, premium-quality fashion and lifestyle
          products designed for modern creators and dreamers.
        </p>
      </div>

      {/* OUR STORY */}
      <div className="bg-white py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#7C3AED] mb-6">
            Our Story
          </h2>
          <p className="text-[#1F2937] leading-relaxed">
            Founded with a passion for style and simplicity, PastelShop
            started as a small idea to deliver premium fashion at
            affordable prices. Today, we serve customers across India
            with a focus on quality, comfort, and trust.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-16 px-4 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold text-center text-[#7C3AED] mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Truck className="mx-auto text-[#7C3AED] mb-4" size={40} />
            <h3 className="font-semibold text-[#1F2937] mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-500 text-sm">
              Quick and reliable shipping across the country.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <ShieldCheck className="mx-auto text-[#7C3AED] mb-4" size={40} />
            <h3 className="font-semibold text-[#1F2937] mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-500 text-sm">
              100% secure and encrypted transactions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Sparkles className="mx-auto text-[#7C3AED] mb-4" size={40} />
            <h3 className="font-semibold text-[#1F2937] mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-500 text-sm">
              Carefully curated products with high standards.
            </p>
          </div>

        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="bg-white py-16 px-4 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold text-center text-[#7C3AED] mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="text-center">
            <div 
              style={{backgroundImage: `url(${image1})`}}
              className="w-32 h-32 rounded-full mx-auto mb-4 bg-cover bg-center"></div>
            <h4 className="font-semibold text-[#1F2937]">Barun</h4>
            <p className="text-gray-500 text-sm">Founder & Developer</p>
          </div>

          <div className="text-center">
            <div 
              style={{backgroundImage: `url(${image2})`}}
              className="w-32 h-32 rounded-full mx-auto mb-4 bg-cover bg-center"></div>
            <h4 className="font-semibold text-[#1F2937]">Team Member</h4>
            <p className="text-gray-500 text-sm">Marketing Lead</p>
          </div>

          <div className="text-center">
            <div 
              style={{backgroundImage: `url(${image3})`}}
              className="w-32 h-32 rounded-full mx-auto mb-4 bg-cover bg-center"></div>
            <h4 className="font-semibold text-[#1F2937]">Team Member</h4>
            <p className="text-gray-500 text-sm">Operations Head</p>
          </div>

        </div>
      </div>

      {/* CTA SECTION */}
      <div className="py-16 text-center px-4 sm:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold text-[#7C3AED] mb-4">
          Join Our Journey
        </h2>
        <p className="text-[#1F2937] mb-6">
          Discover products that match your vibe.
        </p>
        <Link
          to="/"
        >
          <button className="bg-[#F59E0B] hover:bg-[#7C3AED] text-white px-8 py-3 rounded-xl font-semibold transition cursor-pointer">
          Shop Now
        </button>
        </Link>
      </div>

    </div>
  );
};

export default About;