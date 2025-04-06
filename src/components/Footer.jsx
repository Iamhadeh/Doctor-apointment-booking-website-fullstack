import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium unde eum perspiciatis sit facere consectetur ad animi a commodi modi veritatis nostrum quam, provident blanditiis quasi nulla asperiores! Nisi.</p>

            </div>


            {/* center section  */}
            <div className=''>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* right side  */}
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>0000</li>
                    <li>hello@prescripto</li>
                </ul>
            </div>

        </div>
        {/* copyright text */}
        <div>
            <hr />
            <p className='py-5 text-center'> Copyright 2025@prescripto </p>
        </div>

    </div>
  )
}

export default Footer