import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';
import Brand from './components/Brand';
import './sass/App.scss';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <div className="header">
          <Brand/>
          <Navigation/>
        </div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
