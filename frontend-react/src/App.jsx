import "./App.css";
import React, { useState, createContext } from "react";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Dash from "./page/Dash";
import Login from "./page/Login";

// import { ErrorBoundary } from "react-error-boundary";

// function MyFallbackComponent({ error }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//     </div>
//   );
// }

export const applicationContext = createContext();

const App = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const [theme, setTheme] = useState("dark");
  const [loggedIn, setLoggedIn] = useState(false);


  const toggleSideBar = (toggleVal) => {
    setSidebarClass(toggleVal === "open" ? "toggle-open" : null);
  };

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  

  return (
    
      <applicationContext.Provider value={theme}>
        <div
          className={`text-white app-wrapper ${
            theme === "dark" ? "dark-theme" : "light-theme"
          }`}
        >
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
