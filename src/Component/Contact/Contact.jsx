import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container py-5  text-center d-flex flex-column align-items-center">
                <h1 className='text-center mb-5'>Contact</h1>
                <input type="text" name="" id="" placeholder='Name' className='p-3  border-2 border-dark border-bottom border-0 w-50 mb-3'/>
                <input type="email" name="" id="" placeholder='Email Address' className='p-3  border-2 border-dark border-bottom border-0 w-50 mb-3'/>
                <input type="number" name="" id="" placeholder='Phone Number' className='p-3  border-2 border-dark border-bottom border-0 w-50 mb-3'/>
                <button className='btn btn-primary btn-xl'>SEND</button>
            </div>

        </div>

    )
}
