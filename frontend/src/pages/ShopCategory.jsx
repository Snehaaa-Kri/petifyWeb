import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/items/Item';
import HotelsCard from '../components/hotelsCard/HotelsCard';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items per page
  const [sortBy, setSortBy] = useState('default'); // Sorting option

  // Handle sorting of products based on selected option
  const sortedProducts = [...all_product].sort((a, b) => {
    if (sortBy === 'priceAsc') return a.new_price - b.new_price; // Sort by price ascending
    if (sortBy === 'priceDesc') return b.new_price - a.new_price; // Sort by price descending
    return 0; 
  });

  // Filter products by category
  const filteredProducts = sortedProducts.filter(item => props.category === item.category);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Define category-specific descriptions
  const categoryDescription = {
    dogs: "Browse through our wide selection of dogs, each one uniquely adorable and ready to become part of your family. Whether you're looking for playful puppies or loyal companions, we've got the perfect breed for you!",
    cats: "Discover our charming cats, from playful kittens to serene adult cats, all ready to bring love and joy into your home. Find the perfect feline friend to suit your lifestyle.",
    accessories: "Explore our premium pet accessories, designed to make your pet's life more comfortable and stylish. From collars to toys, we have everything you need to pamper your furry friend.",
    hotels: "Find the best pet-friendly hotels for your furry companion. Whether you're traveling for business or leisure, our carefully selected hotels offer the perfect amenities for both you and your pet.",
    adopt: "Looking to give a pet a forever home? Check out our adoption section where you can find pets in need of loving families. Start your adoption journey today!"
  };

  return (
    <div>
      <img src={props.banner} alt="" />

      {/* Category-specific paragraph */}
      <p className='text-[#626262] text-[18px] font-medium text-center w-[85%] mt-12 mb-20 mx-[120px]'>
        {categoryDescription[props.category] || "Explore our diverse collection of pets and products, and find the perfect match for you and your family!"}
      </p>

      {/* Shop category index and sort */}
      <div className="flex m-[0px 170px] px-[120px] justify-between items-center pt-4 pb-2">
        <p><span className='font-semibold'>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)}</span> out of {filteredProducts.length} products</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-[#888] p-2 rounded-md"
        >
          <option value="default">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      {/* Shop category products */}
      <div className="px-[140px] m-[20px 70px] grid grid-cols-4 justify-items-center lg:grid-cols-4 sm:grid-cols-1 gap-[80px]">
        {currentItems.length > 0 ? (
          currentItems.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              mainDes={item.mainDes}
              description={item.description}
              review={item.review}
              rating={item.rating}
            />
          ))
        ) : (
          <p>No products found for this category.</p> // Fallback if no products
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-12 mb-24">
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            className={`px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-gray-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
