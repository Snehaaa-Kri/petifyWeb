import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className="w-[250px] flex flex-col hover:scale-105 hover:duration-700">
      {/* Image with fixed size and consistent styling */}
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-[250px] h-[350px] object-cover rounded-md"
        />
      </Link>

      {/* Product name */}
      <p className="m-[6px 0px] text-start">{props.name}</p>

      {/* Price section */}
      <div className="flex gap-[20px]">
        {/* New price */}
        <div className="text-[#374151] text-[16px] font-semibold">
          ${props.new_price}
        </div>
        {/* Old price */}
        <div className="text-[#8c8c8c] text-[16px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
