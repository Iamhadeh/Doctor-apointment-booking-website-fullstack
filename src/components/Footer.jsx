import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side */}
            <div>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusantium unde eum perspiciatis sit facere consectetur ad animi a commodi modi veritatis nostrum quam, provident blanditiis quasi nulla asperiores! Nisi.</p>

            </div>


            {/* center section  */}
            <div>
                <p>Company</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* right side  */}
            <div>
                <p>Get In Touch</p>
                <ul>
                    <li>0000</li>
                    <li>hello@prescripto</li>
                </ul>
            </div>

        </div>
        {/* copyright text */}
        <div>
            <hr />
            <p></p>
        </div>

    </div>
  )
}

export default Footer