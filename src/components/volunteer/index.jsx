import React from "react";
import HeaderCarousal from "../common/HeaderCarousal";
import PageTitle from "../common/PageTitle";
import "../../assets/style/volunteer.css";
import Cards from "./Cards";
import JoinUs from "./JoinUs";

const Volunteer = () => {
  return (
    <>
      <HeaderCarousal />
      <PageTitle
        title="VOLUNTEER"
        className="font-bold text-[100px] my-10 text-center text"
      />
      <Cards />
      <JoinUs />
    </>
  );
};

export default Volunteer;
