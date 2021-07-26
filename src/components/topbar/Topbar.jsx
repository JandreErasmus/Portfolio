import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons";

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className ={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">Jandre Erasmus</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span> 071 947 2952</span>
                    </div>
                    <div className="itemContainer">
                        <a href="#contact"><Mail className="icon"/></a>
                        <span> jandreerasmus396@gmail.com</span>
                    </div>
                    
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
