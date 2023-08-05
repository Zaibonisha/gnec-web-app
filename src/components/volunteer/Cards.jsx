import React from "react";

const Cards = () => {
  return (
    <div className="p-10">
      <div className="grid-items">
        <div className="card-img-1">
          <h2>WE</h2>
        </div>
        <div className="card-img-2">
          <h2>CAN</h2>
          <p className="text-[#ffc107] text-[85px] text-center font-semibold mt-[100px]">
            Volunteer today
          </p>
          <div className="w-[25%] m-auto mt-[50px]">
            <button
              type="button"
              className="text-center bg-[#ffc107] text-[#000] py-[12px] px-[21px] rounded-[8px]"
            >
              Sign me up
            </button>
          </div>
        </div>
        <div className="card-img-3">
          <h2>UNITE</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
