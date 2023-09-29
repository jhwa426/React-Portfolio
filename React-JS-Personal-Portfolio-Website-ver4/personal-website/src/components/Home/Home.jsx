import './Home.css';
import CTA from "./CTA";
import HomeIcons from "./HomeIcons";

const Home = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Jeff Hwang</h1>
                <h5 className="text-light">Software Developer</h5>

                <CTA />
                <HomeIcons />

                <div className="home-img">
                    <img src="../../img/home_img2.JPG" alt="profile" />
                </div>

                <a href="#ContactMe" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Home;