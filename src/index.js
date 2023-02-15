import React from "react";
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter, 
  useNavigate, 
  Route,
  Routes,
} from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Team from "./pages/Team";
import Support from "./pages/Support";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="/home"/>}> */}
        <Route exact path="/" element={<App/>}>
          <Route to="home"/>
          <Route path="home" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="goals" element={<Goals/>}></Route>
          <Route path="team" element={<Team/>}></Route>
          <Route path="support" element={<Support/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
