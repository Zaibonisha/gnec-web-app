import React from "react";

const PageTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <header>{title}</header>
    </div>
  );
};

export default PageTitle;
