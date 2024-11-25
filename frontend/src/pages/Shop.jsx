import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newCollections/NewCollections'
import NewsLetter from '../components/newsLetter/NewsLetter'
// Import images
// import carousel1 from '../components/assets/carousel/carousel1.jpg';
// import carousel2 from '../components/assets/carousel/carousel2.jpg';
// import carousel3 from '../components/assets/carousel/carousel3.jpg';
// import carousel4 from '../components/assets/carousel/carousel4.jpg';
// import carousel5 from '../components/assets/carousel/carousel5.jpg';
// import carousel6 from '../components/assets/carousel/carousel6.jpg';

import heroResized from '../components/assets/carousel/heroResized.jpg'
import hero22 from '../components/assets/carousel/hero22.jpg'
import hero33 from '../components/assets/carousel/hero33.jpg'
import hero34 from '../components/assets/carousel/hero34.jpg'
import hero4 from '../components/assets/carousel/hero4.jpg'
import hero6 from '../components/assets/carousel/hero6.png'


import playful from '../components/assets/playful.mp4'


function Shop() {
  // Images arr 
  let slidesArr = [

    hero4, hero6, heroResized,hero22, hero33, hero34
    
  ]




  return (
    <div>
      <Hero slides={slidesArr} />
      <img src="../components/assets/carousel/carousel6.jpg" alt="" loading="lazy"/>
      <Popular/>
      {/* <Offers/> */}

        <div className="w-full">
          <video className="w-[100%]" autoPlay loop muted loading="lazy">
            <source src={playful} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      <NewCollections />
      <NewsLetter/>
    </div>
  )
}

export default Shop