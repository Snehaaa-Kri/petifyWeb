import React, { useEffect, useState } from 'react'
import Item from '../items/Item'

function Popular() {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() =>{
    fetch(`https://petifyweb.onrender.com/popularinpets`)
    .then((response) => response.json())
    .then((data) => setPopularProducts(data))
  }, [])


  return (
    //Popular
    <div className='flex flex-col items-center gap-[10px] h-[90vh] mt-[70px]'> 
        <h1 className='text-[#171717] text-[50px] font-semibold'>POPULAR IN PETS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]'/>
        <p className='text-[#626262] text-[18px] font-medium text-center w-[70%]'>
        Explore our handpicked collection of the most loved pets and accessories, carefully chosen for their quality and charm.  
        From adorable companions to stylish essentials, these popular picks are a favorite among pet lovers.  
        Find the perfect addition to your family or the ideal gift for your furry friend!
        </p>



    {/* popular item */}
        <div className="mt-[50px] flex justify-center gap-[30px] flex-wrap">
   
        {popularProducts.map((item, idx) => {return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />} )}
        </div>

    </div>
  )
}

export default Popular