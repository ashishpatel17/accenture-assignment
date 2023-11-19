import React, { useEffect, useState } from "react";

const Header = ({sideBarToggleHandler}) => {

  const [menu,setMenu] = useState("close");


  const toggleSidebar = () => {
    setMenu(menu==="close"?"open":"close");
  }

  useEffect(() => {
    sideBarToggleHandler(menu);
  },[menu])

  return (
    <header className="fixed top-0 w-full header border-bottom">
      <div className="flex items-center h-12">
        <div className="w-1/2">
          <button onClick={toggleSidebar}>
            <svg
              className="block w-3 h-3 ml-4 mr-4 fill-current md:hidden lg:hidden"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <span className="ml-2 text-l md:ml-5 lg:ml-5">LOOP</span>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end">
            <span className="mt-1 text-l">will smith</span>
            <img className="w-8 h-8 ml-5 mr-5" src="./profile-pic-icon.png" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
