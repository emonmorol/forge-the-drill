import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className=" w-full flex justify-center">
      <h1 className="section-title">{children}</h1>
    </div>
  );
};

export default SectionTitle;
