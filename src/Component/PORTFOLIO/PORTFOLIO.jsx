import React from 'react'


function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));


export default function PORTFOLIO() {
  return (
    
    <div className="container  text-center py-5">
        <h1 className='mb-5'>PORTFOLIO</h1>
        <div className="row">
            <div className="col-md-4 mb-5">
            <img src={images['2.png']} alt="" className='w-100 rounded-3'/>
            </div>
            <div className="col-md-4">
            <img src={images['3.png']} alt="" className='w-100 rounded-3'/>
            </div>
            <div className="col-md-4">
            <img src={images['4.png']} alt="" className='w-100 rounded-3'/>
            </div>
            <div className="col-md-4">
            <img src={images['5.png']} alt="" className='w-100 rounded-3'/>
            </div>
            <div className="col-md-4">
            <img src={images['6.png']} alt="" className='w-100 rounded-3'/>
            </div>
            <div className="col-md-4">
            <img src={images['7.png']} alt="" className='w-100 rounded-3'/>
            </div>
        </div>
    </div>
  )
}
