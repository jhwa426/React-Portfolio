import './MySkills.css';
import data from "../../data/index.json";

const MySkills = () => {
    return (
        <div>
            <section className="skills--section" id="mySkills">
                <div className="portfolio--container">
                    <p className="section--title">My Skills</p>
                    <h2 className="skills--section--heading">My Expertise</h2>
                </div>

                <div className="skills--section--container">
                    {data?.skills?.map((item, index) => (
                        <div key={index} className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={item.src} alt="Product Chain" />
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
}

export default MySkills;