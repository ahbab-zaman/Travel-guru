import { kaushan } from "@/app/lib/font";
import {
  FaFacebook,
  FaLinkedinIn,
  FaRegCopyright,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <section className="bg-[#222] text-white">
        <footer className="w-11/12 mx-auto py-14 px-8 flex justify-between lg:flex-row flex-col lg:gap-0 gap-8">
          <div className="space-y-6 lg:w-[30%] w-11/12  lg:border-r border-r-0 lg:pr-6 pr-0 text-left">
            <h3 className="text-xl font-bold">TravelGuru</h3>
            <div>
              <p className={`${kaushan.className}`}>Need Any Help</p>
              <h4 className="text-xl font-bold">
                Call Us: <span>01739241324</span>
              </h4>
            </div>
            <div>
              <p className="text-lg font-light text-gray-400">
                Subid Bazar-sylhet
              </p>
              <p className="text-lg font-light text-gray-400">
                example@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebook className="text-gray-300 text-xl" />
              <FaXTwitter className="text-gray-300 text-xl" />
              <FaLinkedinIn className="text-gray-300 text-xl" />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-6 lg:w-[40%] w-11/12 lg:mx-[4rem] mx-auto">
            <div>
              <h4 className={`${kaushan.className} mb-2`}>Company</h4>
              <ul className="list-none space-y-2">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Travel Guide</li>
                <li>Data Policy</li>
              </ul>
            </div>
            <div>
              <h4 className={`${kaushan.className} mb-2`}>Top Destination</h4>
              <ul className="list-none space-y-2">
                <li>Las Vegas</li>
                <li>New York</li>
                <li>San Fransisco</li>
                <li>Hawaii</li>
              </ul>
            </div>
            <div>
              <h4 className={`${kaushan.className} mb-2`}></h4>
              <ul className="list-none space-y-2">
                <li>Las Vegas</li>
                <li>New York</li>
                <li>San Fransisco</li>
                <li>Hawaii</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-[30%] w-11/12 lg:border-l border-l-0 lg:pl-6 pl-0 space-y-4">
            <h4 className={`${kaushan.className} mb-2`}>
              Sign Up to Newsletter
            </h4>
            <form className="flex flex-col items-start space-y-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <FaTelegramPlane />
                </span>
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="pl-10 pr-4 py-2 rounded-md focus:outline-none text-gray-700 placeholder-gray-400 bg-white lg:w-80 w-52"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
              >
                Submit
              </button>
            </form>
            <p className="flex items-center gap-2 text-gray-400">
              <FaRegCopyright /> TravelGuru All Rights Reserved
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
