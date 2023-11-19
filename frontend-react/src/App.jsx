import "./App.css";
import React, { useState, createContext, useRef } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Dash from "./page/Dash";
import Login from "./page/Login";


export const applicationContext = createContext();

const App = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const [theme, setTheme] = useState("dark");

  const myElementRef = useRef(null);

  const toggleSideBar = (toggleVal) => {
    setSidebarClass(toggleVal === "open" ? "toggle-open" : null);
  };

  const changeTheme = (theme) => {
    let classes = myElementRef.current.className.split(" ");
    if(classes.includes("dark-theme")){
      classes.splice(classes.indexOf("dark-theme"),1);
      classes.push("light-theme");
      classes = classes.join(" ");
    }else if(classes.includes("light-theme")){
      classes.splice(classes.indexOf("light-theme"),1);
      classes.push("dark-theme");
      classes = classes.join(" ");
    }
    myElementRef.current.className = classes;
    setTheme(theme);
  };

  

  return (
    <applicationContext.Provider value={theme}>
      {/* <div
        ref={myElementRef}
        className={`text-white app-wrapper ${
          theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      > */}
      <div ref={myElementRef} className="text-white app-wrapper dark-theme">
        <Header sideBarToggleHandler={toggleSideBar}></Header>
        <div className="flex pt-12">
          <div
            className={`${sidebarClass} sidebar hidden w-48 md:w-50 lg:w-50 md:block lg:block border-right`}
          >
            <Sidebar onThemeChange={changeTheme}></Sidebar>
            <a href="/dash/ashish">dash</a>
          </div>
          <div className="w-full">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dash/:user" component={Dash} />
                {/* <Route exact path="/dash/:user" render={()=> loggedIn?Dash:<Redirect to="/login"></Redirect> } /> */}
              </Switch>
            </BrowserRouter>
          </div>
        </div>
        <footer></footer>
      </div>
    </applicationContext.Provider>
  );
};

export default App;
