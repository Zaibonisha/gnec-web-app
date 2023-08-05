import React from 'react'
import FormImg from '../../assets/images/volunteer-img-4.png'

const Form = () => {
  return (
    <div className="p-10">
      <form>
        <div className="flex flex-row gap-0">
        <div className="flex flex-col gap-10 w-[100%]">
          <input required type="text" placeholder="*Enter your name" />
          <input required type="text" placeholder="*Enter your location" />
          <input required type="number" placeholder="*Enter your age" />
          <input required type="email" placeholder="*Enter your email" />
          <textarea required placeholder="*Enter your message" />
        </div>
        <div className="">
          <img src={FormImg} alt="Form-bg-imag" className="h-[580px] w-[553px]" />
        </div>
        </div>
        <div className="my-10">
          <button type="submit" className="rounded-[8px] bg-[#FFC107] text-[#4C2689] py-[12px] px-[21px]">Send Application</button>
        </div>
      </form>
    </div>
  )
}

export default Form