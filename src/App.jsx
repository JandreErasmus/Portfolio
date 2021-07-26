import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/portfolio";
//import Testimonials from "./components/Testimonials/Testimonials";
import Work from "./components/work/Work";
import "./app.scss";
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {




  const [menuOpen,setMenuOpen] = useState(false);



  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Work/>
        <Portfolio/>
        <Contact/>
        
      </div>
    </div>
  );
}

export default App;
