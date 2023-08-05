import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#4C2689]">
      <div className="p-10">
        <div className="text-center">
          <h3 className="text-[#FFC107] text-[35px]">The change starts now!</h3>
          <p className="text-[#FFf]">Land a helping hand to those in need!</p>
        </div>
        <div className="flex flex-row justify-between mt-10">
          <div>
            <img src={Logo} alt="Logo" className="w-[100px] h-[40px] my-10" />
            <div className="flex flex-row gap-5">
              <p className="text-[#ffc107] text-[20px]">Follow us for more causes</p>
              <a href="https://facebook.com/"><img src={Facebook} alt="Facebook icon" /></a>
              <a href="https://instagram.com/"><img src={Instagram} alt="Instagram icon" /></a>
            </div>
            <form className="flex flex-row gap-0 subscribe">
              <input type="email" placeholder="*Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div>
            <nav>
              <div className="flex flex-row gap-10">
              <ul>
                <li className="text-[#FFC107] mb-2 font-semibold">For Donators</li>
                <li className="flex flex-col text-[#fff]">
                  <Link to="/">About Us</Link>
                  <Link to="/">Donations</Link>
                  <Link to="/">Causes</Link>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              <ul>
                <li className="text-[#FFC107] mb-2 font-semibold">For Volunteers</li>
                <li className="flex flex-col text-[#fff]">
                  <Link to="/">About Us</Link>
                  <Link to="/">Causes</Link>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              <ul>
                <li className="text-[#FFC107] mb-2 font-semibold">For Donations</li>
                <li className="flex flex-col text-[#fff]">
                  <Link to="/">About Us</Link>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer