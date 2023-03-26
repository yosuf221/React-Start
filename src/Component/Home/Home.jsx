import React, { useState } from 'react'


function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));


export default function Home() {

  // .bg-success


  return (
    <div className='bg-success text-center py-5'>
      <div className="img">
      <img src={images['1.png']} alt="" className='mb-5'/>

      </div>
      <div className="det">
        <h1 className='mb-4'>START REACT</h1>
        <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
