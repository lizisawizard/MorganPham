import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';
import Brand from './components/Brand';
import './sass/App.scss';
import Footer from "./components/Footer";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <div className={`page-content ${openMenu ? 'fixed' : ''}`}>
        <div className="header">
          <Brand openMenu={openMenu}/>
          <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </div>
        <Outlet/>
      </div>
      <footer className={`footer ${openMenu ? 'hidden' : ''}`}/>
    </div>
  );
}

export default App;
