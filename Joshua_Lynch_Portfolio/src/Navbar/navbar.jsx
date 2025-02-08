import { Logo } from "../assets/logo.png";
import "./navbar.css";
function Navbar () {
    return (
        <div className="full-nav">
            <div className="logo-container">
                <img src={Logo}></img>
            </div>
            <div className="link-container"></div>
            <div className="contact-container"></div>
        </div>
    )
}
export default Navbar;