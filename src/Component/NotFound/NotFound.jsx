import React from 'react'

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));


export default function 
() {
  return (
    <div className='container text-center py-5'>
        <h1>Not Found <br />
            Page does not exist
        </h1>
        <img src={images['404.jpg']} alt="" className='w-50'/>

    </div>
  )
}
