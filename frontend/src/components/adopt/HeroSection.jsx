import React, { useState } from "react";
import adoptHero from '../assets/adoptHero.jpg'

function HeroSection() {
    const [location, setLocation] = useState("Jakarta Selatan, Indonesia");
    const [petType, setPetType] = useState("Dog");
    const [breed, setBreed] = useState("All");
    const [gender, setGender] = useState("Female");
    const [age, setAge] = useState("1-3 Years Old");
  
    const handleSearch = () => {
      console.log({ location, petType, breed, gender, age });
    };
  
    return (
      <div className="flex flex-col md:flex-row bg-green-900 text-white h-[100vh] ">
        <div className="md:w-1/2 flex flex-col justify-start pt-28 pl-12">
          <h1 className="text-6xl font-bold mb-2">
            <p className="pb-4">Embrace Endless Love</p> 
            <p className="pb-4">with Your New Furry</p>
            <p className="pb-4">Best Friend.</p>
             
          </h1>
          <p className="text-md mb-2 pr-48">
            Embrace endless love with your new furry best friend. Adopt now and
            start creating unforgettable memories together.
          </p>
        </div>

        {/* right image  */}
        <div className="w-[55%] h-[100vh] flex items-center justify-center">
            <img
            src={adoptHero}
            alt="Woman with dog"
            className="shadow-lg w-full h-full object-cover"
            />
        </div>

  

        {/* search bar  */}
        <div className="bg-white text-gray-900 mt-6 md:mt-0 p-6 rounded-lg shadow-lg w-[93%] md:absolute bottom-[-60px] mx-12">
          <h2 className="text-2xl font-semibold mb-4">Find Your New Best Friend</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Location</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pet Type</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
              >
                <option>Dog</option>
                <option>Cat</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Breed</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              >
                <option>All</option>
                <option>Golden Retriever</option>
                <option>Bulldog</option>
                <option>Poodle</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Gender</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Age</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option>1-3 Years Old</option>
                <option>4-6 Years Old</option>
                <option>7+ Years Old</option>
              </select>
            </div>
          <div className="mt-6 flex justify-end items-end w-[93vw] pr-[68px]">
            <button
              className="bg-green-900 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  

export default HeroSection