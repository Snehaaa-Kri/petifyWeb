import React, { useState } from 'react';

function DescriptionBox(props) {
  const { product } = props;
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="my-[120px] mx-[120px]">
      {/* Tabs */}
      <div className="flex">
        <div
          className={`flex items-center justify-center text-[16px] font-semibold w-[141px] h-[55px] border border-solid border-[#d0d0d0] cursor-pointer ${
            activeTab === 'description' ? '' : 'text-[#555] bg-[#FBFBFB]'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`flex items-center justify-center text-[16px] font-semibold w-[141px] h-[55px] border border-solid border-[#d0d0d0] cursor-pointer ${
            activeTab === 'reviews' ? '' : 'text-[#555] bg-[#FBFBFB]'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[25px] border border-solid border-[#D0D0D0] p-[48px] pb-[70px]">
        {activeTab === 'description' ? (
          <div>
            {product.description ? (
              product.description
            ) : (
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, asperiores amet! Minus odit tenetur amet velit neque iste quaerat, eum hic maxime quam, ducimus reiciendis animi sunt temporibus voluptas
                  repellendus. Dicta ipsa officiis deleniti laboriosam enim assumenda aspernatur a cupiditate harum porro accusantium facilis corporis id temporibus, unde esse dignissimos aliquid, nulla beatae pariatur non.
                  Quos ut aperiam pariatur iusto.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit distinctio delectus itaque pariatur unde, ea iste eos suscipit, sed repudiandae non dignissimos quis quidem facilis doloremque iusto.
                  Dolore, dignissimos repellat!
                </p>
              </>
            )}
          </div>
        ) : (
          <div>
            {/* Reviews Content */}
            {product.review ? (
              product.review
            ) : (
              <p>
              Reviews section content goes here. Replace this with dynamic data from your backend or state when implementing.
            </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DescriptionBox;
