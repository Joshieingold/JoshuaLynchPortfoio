import Josh from "../assets/JoshImage.png";
import "./home.css";

const Home = () => {
    return (

        <div className="full-home">
            <div className="intro-container">
                <h1 className="pop-title">I'm Josh, your full stack developer</h1>
                <p>I can code in a lot of languages and it is basiclaly all I do in my free time. But I do not have a formal education in any of it..</p>
                <div className="button downbtn">Down</div>
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
                    <div className="icon-container">
                        <a className="icon-wrapper" href="https://www.linkedin.com/in/josh-lynch-8b36242b3/">
                            <img className="linked-in icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"></img>
                        </a>
                        <a className="icon-wrapper" href="https://github.com/joshieingold">
                            <img className="git-hub icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"></img>
                        </a>
                        <a className="icon-wrapper" href="https://open.kattis.com/users/josh-lynch">
                            <img className="kattis icon" src="https://cdn-b.saashub.com/images/app/service_logos/22/31099382e4b5/large.png?1545403232"></img>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}
export default Home;