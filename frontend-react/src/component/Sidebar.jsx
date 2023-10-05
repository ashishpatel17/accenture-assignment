import React, { useState } from "react";

const Sidebar = ({onThemeChange}) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    let newTheme = (theme==="dark")?"light":"dark" 
    setTheme(newTheme);
    onThemeChange(newTheme);
  }

  return (
    <ul className="text-sm">
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./dashboard.png" /> Dashboard</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./sales.png" /> Sales</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./products.png" /> Products</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./stores.png" /> Store</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./campaign.png" /> Campain</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./notification.png" /> Notification</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./settings.png" /> Setting</li>
      <li className="flex mt-8"> <img className="w-4 h-4 mt-1 ml-5 mr-5 lg:mr-2 sm:mr-2 lg:ml-2 sm:ml-2" src="./theme.png" />
        Theme
        <button className="ml-3 mt-1" onClick={changeTheme}>
          <img className="w-12" src={`${theme === "dark" ? "./toggle-light.png" : "./toggle-dark.png"}`} />
        </button>
      </li>



    </ul>
  );
};

export default Sidebar;
