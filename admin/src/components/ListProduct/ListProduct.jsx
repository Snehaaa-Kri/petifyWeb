import React, { useEffect, useState } from 'react';
import cross_icon from '../../assets/cross_icon.png';

function ListProduct() {
  const [allproducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/allproducts`);
      const data = await res.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/removeproduct`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });

      // Update the state to reflect the removal of the product
      setAllProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className='flex flex-col items-center w-[100%] h-[740px] lg:py-[10px] md:py-[8px] py-[6px] lg:px-[50px] md:px-[40px] px-[10px] m-[30px] rounded-[6px] bg-white'>
      <h1 className='text-[24px] font-semibold '>All Products list</h1>
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] md:gap-[10px] gap-[5px] w-[100%] lg:py-[20px] md:py-[15px] py[10px] text-[#454545] md:text-[15px] text-[13px] font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="w-[100%] overflow-y-auto">
        <hr className='border border-solid border-gray-300' />
        {allproducts.map((product, i) => (
          <div key={i} className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] md:gap-[10px] gap-[5px] w-[100%] md:py-[20px] py-[10px] text-[#454545] md:text-[15px] text-[13px] font-medium items-center ">
            <img className='h-[80px]' src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={() => {remove_product(product.id)}} className='cursor-pointer m-auto' src={cross_icon} alt="" />   
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
