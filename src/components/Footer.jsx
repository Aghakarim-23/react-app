import React from "react";

const Footer = () => {

  const currentDate = new Date().getFullYear()

  return (
    <div className="flex justify-center items-center font-bold tracking-widest bg-red-400 h-18">
      <p>All rights reserved &#169;</p>
      <p>{currentDate}</p>
    </div>
  );
};

export default Footer;
