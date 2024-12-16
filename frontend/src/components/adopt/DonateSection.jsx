import React from 'react'
import { MdPets } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BiSolidDonateHeart } from "react-icons/bi";

function DonateSection() {
    return (
        <div className="flex flex-col items-center bg-white p-8 px-12 my-12 ">
          <h2 className="text-6xl leading-normal font-bold mb-4">Donate and Save Lives</h2>
          <p className="text-gray-700 mb-6 text-center">
          Your support helps provide shelter, medical care, and nourishment to abandoned and injured pets. Every contribution brings us closer to giving them a second chance at life. Together, we can create a world where every pet finds a loving home. Donate now and be a part of this life-changing journey!
          </p>
          <div className="flex flex-col md:flex-row gap-6 w-[85%] justify-center">
            {/* first  */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-1/3 text-center">
                <p className='flex justify-center items-center text-6xl my-2 mb-4'><BiSolidDonateHeart /></p>

              <h3 className="text-lg font-semibold mb-2">One-Time Donation</h3>
              <p className="text-gray-600 mb-4">
                Make a single donation to support our ongoing efforts in rescuing and
                caring for pets in need.
              </p>
              <button className="bg-green-900 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700">
                Donate Now
              </button>
            </div>

            {/* second  */}
            <div className="bg-green-900 text-white p-4 rounded-lg shadow-lg w-full md:w-1/3 text-center">
                <p className='flex justify-center items-center text-6xl my-2 mb-4' ><SlCalender /></p>
              <h3 className="text-lg font-semibold mb-2">Monthly Pledge</h3>
              <p className="text-gray-100 mb-4">
                Become a monthly donor and provide consistent support to help us
                save more lives every month.
              </p>
              <button className="bg-white text-green-900 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100">
                Donate Now
              </button>
            </div>

            {/* third  */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-1/3 text-center">
                <p className='flex justify-center items-center text-6xl my-2 mb-4' ><MdPets /></p>
              <h3 className="text-lg font-semibold mb-2">Sponsor a Pet</h3>
              <p className="text-gray-600 mb-4">
                Sponsor a pet in our care and directly contribute to their needs
                until they find their forever home.
              </p>
              <button className="bg-green-900 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      );
    };

export default DonateSection