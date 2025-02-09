import Logo from "../assets/logo.png";
import "./navbar.css";
const Navbar = () => {
    return (
        <div className="full-nav">
            <div className="logo-container">
                <img src={Logo} className="logo"></img>
            </div>
            <div className="link-container">
                <a className="link-item">Home</a>
                <a className="link-item">About</a>
                <a className="link-item">Skills</a>
                <a className="link-item">Projects</a>
                
            </div>
            <div className="contact-container">
                <a className="button contact-btn">Contact</a>
            </div>
        </div>
    )
}
export default Navbar;