import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 ">
          <div>
            <p className="text-sm text-center">&copy; {new Date().getFullYear()} <span className="font-bold">taalTune</span>. All rights reserved.</p>
          </div>
    </footer>
  );
};

export default Footer;
