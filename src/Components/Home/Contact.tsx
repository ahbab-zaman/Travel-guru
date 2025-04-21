"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-[#fc5056] rounded-full mb-4 hover:scale-110 hover:duration-300 hover:transition-all">
                <FaMapMarkerAlt className="text-[#fc5056] text-2xl " />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Our Office:
              </h4>
              <p className="text-gray-600">Jurain, Dhaka Bangladesh</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-[#fc5056] rounded-full mb-4 hover:scale-110 hover:duration-300 hover:transition-all">
                <FaPhoneAlt className="text-[#fc5056]  text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Contact Number:
              </h4>
              <p className="text-gray-600">+1234321321</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-[#fc5056] rounded-full mb-4 hover:scale-110 hover:duration-300 hover:transition-all">
                <FaEnvelope className="text-[#fc5056]  text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Email Us:
              </h4>
              <p className="text-gray-600">websitename@mail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-4 rounded-md bg-white shadow-sm col-span-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-md bg-white shadow-sm col-span-1"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-md bg-white shadow-sm col-span-1"
            />

            <textarea
              placeholder="Your Message"
              className="p-4 resize-none rounded-md bg-white shadow-sm col-span-full"
            ></textarea>

            <div className="col-span-full text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#fc5056] border-[1px] font-extrabold font-2xl text-white hover:text-[#fc5056] hover:border-[#fc5056] hover:transition-all hover:duration-500 hover:bg-transparent"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
