import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F3F0FF] px-4 sm:px-8 lg:px-12 py-10">

      <h1 className="text-2xl sm:text-3xl font-bold text-[#7C3AED] mb-10 text-center">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT - Contact Form */}
        <div className="w-full lg:w-[60%] bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          <h2 className="text-xl font-semibold text-[#1F2937] mb-6">
            Send us a message
          </h2>

          <div className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-[#F3F0FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            ></textarea>

          </div>

          <button className="w-full mt-8 bg-[#F59E0B] hover:bg-[#7C3AED] text-white py-3 rounded-xl font-semibold transition cursor-pointer">
            Send Message
          </button>

        </div>

        {/* RIGHT - Contact Info */}
        <div className="w-full lg:w-[40%] space-y-6">

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold text-[#7C3AED] mb-5">
              Get in Touch
            </h2>

            <div className="space-y-4 text-[#1F2937]">

              <div className="flex items-center gap-4">
                <Phone className="text-[#7C3AED]" />
                <span>+91 1234567890</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#7C3AED]" />
                <span>support@pastelshop.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#7C3AED]" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>

            </div>
          </div>

          {/* Optional Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-48 flex items-center justify-center text-gray-400">
            Google Map Placeholder
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;