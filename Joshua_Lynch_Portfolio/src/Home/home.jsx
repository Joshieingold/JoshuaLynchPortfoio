import Josh from "../assets/JoshImage.png";
import "./home.css";

const Home = () => {
    return (

        <div className="full-home">
            <div className="intro-container">
                <h1 className="pop-title">I'm Josh, your full stack developer</h1>
                <p>I can code in a lot of languages and it is basiclaly all I do in my free time. But I do not have a formal education in any of it..</p>
                <button className="button">Down</button>
            </div>
            <div className="josh-container">
                <img src={Josh} className="josh-image"></img>
            </div>
            <div className="blurb-contianer">
                <div className="blurb">
                    <h3 className="blurb-title">About Me</h3>
                    <p className="blurb-description">I wanted to be a chess player, that didnt work, now I am here. Working at rogers warehouse and wasting my life.</p>
                    <a className="see-more-link">Learn More →</a>
                </div>
                <div className="blurb">
                    <h3 className="blurb-title">My Projects</h3>
                    <p className="blurb-description">I dont have a lot of work to show, but the work I do have is pretty okay.</p>
                    <a className="see-more-link">Learn More →</a>
                </div>
                <div className="social-media-container">
                    <h3 className="blurb-title">Social Media</h3>
                    <div className="icon-contianer">
                        <a className="icon-wrapper">
                            <img className="linked-in"></img>
                        </a>
                        <a className="icon-wrapper">
                            <img className="git-hub"></img>
                        </a>
                        <a className="icon-wrapper">
                            <img className="kattis"></img>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}
export default Home;