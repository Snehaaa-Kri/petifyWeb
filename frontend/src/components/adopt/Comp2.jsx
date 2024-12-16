import React from 'react'

function Comp2() {
  return (
    <>
        {/* How to Adopt Section */}
      <div className="flex flex-col md:flex-row bg-white px-12 gap-12 mt-10 items-center">
        <div className="md:w-1/2">
          <h2 className="text-6xl leading-snug font-bold mb-4">How to Adopt Your New Friend</h2>
          <p className="text-gray-700 mb-6">
            Ready to bring home your new best friend? Explore, meet, adopt, and start your journey of love and joy today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Find Your Match</h3>
              <p className="text-gray-600">Explore our website and find the perfect pet that steals your heart.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Contact and Meet</h3>
              <p className="text-gray-600">Contact the shelter to meet the pet and see if it's a match.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Complete Paperwork</h3>
              <p className="text-gray-600">Complete the application and fee to bring your pet home.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Take Them Home</h3>
              <p className="text-gray-600">Bring your new furry friend home and enjoy your life together.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/pets-morning-comfort-rest-people-concept_158595-7404.jpg?t=st=1733891831~exp=1733895431~hmac=c13c28f173c5b27cc2e96417fb755da1f2cb6860984b441d2e7ec06742f2203c&w=360"
            alt="Adopting a pet"
            className="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
    </>
  )
}

export default Comp2