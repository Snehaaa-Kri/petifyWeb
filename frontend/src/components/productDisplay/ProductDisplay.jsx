import React, { useContext, useState } from 'react';
import start_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedNights, setSelectedNights] = useState(1);
  const [selectedRoomType, setSelectedRoomType] = useState("single");
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState({ visible: false, type: '', message: '' });

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const showToast = (type, message) => {
    setToast({ visible: true, type, message });
    setTimeout(() => {
      setToast({ visible: false, type: '', message: '' }); // Hide toast after 3 seconds
    }, 3000);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
    showToast('success', "Product added to cart!");
  };

  return (
    <div className='flex my-[0px] mx-[120px]'>
      {/* Left  */}
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[16px]">
          <img className='w-[290px]' src={product.image} alt="" />
          <img className='w-[290px]' src={product.image} alt="" />
          <img className='w-[290px]' src={product.image} alt="" />
          <img className='w-[290px]' src={product.image} alt="" />
        </div>

        <div className="">
          <img className='w-[1280px] ' src={product.image} alt="" />
        </div>
      </div>

      {/* Right  */}
      <div className="my-[0px] mx-[40px] flex flex-col ">
        <h1 className='font-bold text-[30px] text-[#3d3d3d]'>{product.name}</h1>
        <div className="flex items-center mt-[11px] gap-[4px] text-[#1c1c1c] text-[16px] ">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="flex mt-[40px] gap-[20px] text-[20px] font-bold">
          <div className="line-through text-[#818181]">${product.old_price}</div>
          <div className="text-[#ff4141] ">${product.new_price}</div>
        </div>

        {/* description  */}
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam eum quae a rerum qui reiciendis labore architecto possimus ut, officia, temporibus sunt dolore veritatis delectus voluptatem maxime nihil commodi? 
        </div>

        {/* Select Quantity */}
        {product.category === 'hotels' ? (
          <div className="">
            {/* Content for hotels */}
            <h1 className="text-[#656565] text-[18px] font-semibold mt-4">Select Your Stay Options</h1>

            {/* Number of Nights */}
            <div className="mt-4">
              <h2 className="text-[16px] font-semibold">Number of Nights</h2>
              <div className="flex mt-1 gap-2">
                {[1, 2, 3, "> 3"].map((nights) => (
                  <div
                    key={nights}
                    className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${selectedNights === nights ? 'bg-[#ebebeb]' : ''}`}
                    onClick={() => setSelectedNights(nights)}
                  >
                    {nights} {nights === 1 ? 'Night' : 'Nights'}
                  </div>
                ))}
              </div>
            </div>

            {/* Room Type */}
            <div className="mt-4">
              <h2 className="text-[16px] font-semibold">Room Type</h2>
              <select
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
                className="w-[157px] h-[35px] outline-none border-[1px] border-[#7a7a7a] rounded-md text-[#515151] text-[16px] font-medium bg-white active:bg-[#f3f3f3] mb-4"
              >
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            <button onClick={() => handleAddToCart(product.id)} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>BOOK NOW</button>
          </div>
        ) : product.category === 'dogs' ? (
          <div className="mt-[40px]">
            {/* Content for dogs */}
            <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity for Dogs</h1>
            <div className="flex mt-[10px] mb-[35px] gap-[10px]">
              {[1, 2, 3, 5].map((value) => (
                <div
                  key={value}
                  className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                  onClick={() => handleQuantityChange(value)}
                >
                  {value}
                </div>
              ))}
            </div>
            <button onClick={() => handleAddToCart(product.id)} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>BUY NOW</button>
          </div>
        ) : product.category === 'cats' ? (
          <div className="mt-[40px]">
            {/* Content for cats */}
            <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity for Cats</h1>
            <div className="flex mt-[10px] mb-[35px] gap-[10px]">
              {[1, 2, 3, 5].map((value) => (
                <div
                  key={value}
                  className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                  onClick={() => handleQuantityChange(value)}
                >
                  {value}
                </div>
              ))}
            </div>
            <button onClick={() => handleAddToCart(product.id)} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>BUY NOW</button>
          </div>
        ) : product.category === 'accessories' ? (
          <div className="mt-[40px]">
            {/* Content for accessories */}
            <h1 className="text-[#656565] text-[18px] font-semibold">Select Quantity for Accessories</h1>
            <div className="flex mt-[10px] mb-[35px] gap-[10px]">
              {[1, 2, 3, 5].map((value) => (
                <div
                  key={value}
                  className={`border px-3 py-1 rounded-sm cursor-pointer hover:bg-[#ebebeb] ${quantity === value ? 'bg-[#ebebeb]' : ''}`}
                  onClick={() => handleQuantityChange(value)}
                >
                  {value}
                </div>
              ))}
            </div>
            <button onClick={() => handleAddToCart(product.id)} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>ADD TO CART</button>
          </div>
        ) : product.category === 'adopt' ? (
          <div className="">
            {/* Adoption Details */}
            <div className="mt-4">
              <h2 className="text-[16px] font-semibold">Pet Details</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis.</p>
            </div>
            <button onClick={() => handleAddToCart(product.id)} className='py-[10px] px-[30px] w-[200px] text-[14px] font-semibold text-white bg-[#FF4141] mb-[10px] border-none outline-none cursor-pointer rounded-sm'>ADOPT NOW</button>
          </div>
        ) : null}
      </div>

      {/* Toast Message */}
      {toast.visible && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center max-w-[400px] w-full p-4 rounded-md shadow-lg ${
          toast.type === 'success' ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'
        }`}>
          <div className="mr-4">
            {toast.type === 'success' ? (
              <span className="text-green-500 text-xl font-bold">✔</span>
            ) : (
              <span className="text-red-500 text-xl font-bold">✖</span>
            )}
          </div>
          <div className="flex-1">
            <h4 className={`text-lg font-semibold ${
              toast.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {toast.type === 'success' ? 'Success' : 'Error'}
            </h4>
            <p className="text-sm text-[#555]">{toast.message}</p>
          </div>
          <button
            onClick={() => setToast({ visible: false, type: '', message: '' })}
            className="text-[#555] ml-4 text-xl font-bold cursor-pointer"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDisplay;
