import React, { useState } from "react";
import product1 from '../assets/popularPets/product_1.jpg'
import product2 from '../assets/popularPets/product_2.jpg'
import product3 from '../assets/popularPets/product_3.jpg'
import product4 from '../assets/popularPets/product_4.jpg'

function Comp1() {
    const [location, setLocation] = useState("Jakarta Selatan, Indonesia");
    const [petType, setPetType] = useState("Dog");
    const [breed, setBreed] = useState("All");
    const [gender, setGender] = useState("Female");
    const [age, setAge] = useState("1-3 Years Old");
  
    const handleSearch = () => {
      // Logic for searching pets based on criteria
      console.log({ location, petType, breed, gender, age });
    };
  
    return (
      <div className="flex flex-col">
        
        {/* Gallery Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white py-8 px-12 mt-10 gap-12">
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
            <img
              src={product1}
              alt="Dog"
              className="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
            />
            <img
              src={product2}
              alt="Rabbit"
              className="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
            />
            <img
              src={product3}
              alt="Hamster"
              className="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
            />
            <img
              src={product4}
              alt="Cat"
              className="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
            />
        </div>

          <div className="md:w-[52%] mt-6 md:mt-0">
            <h2 className="text-6xl leading-normal font-bold mb-4">Find Out Which Furry Friend Fits You Best!</h2>
            <p className="text-gray-500 leading-normal mb-6">
              Take a stroll through our furry family and uncover the ideal companion that perfectly matches your lifestyle and personality. Whether you’re seeking a playful pal for outdoor adventures or a cuddly companion for cozy nights in, our diverse selection of pets awaits your discovery.
            </p>
            <button className="mt-12 bg-green-900 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700">
              Explore More
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default Comp1