import './MySkills.css';
import data from "../../data/index.json";

const MySkills = () => {
    return (
        <div>
            <section className="skills--section" id="MySkills">
                <div className="portfolio--container">
                    <h2 className="section--title">Skills</h2>
                    <p className="skills--section--heading">Skills & Tools</p>
                </div>

                <div className="skills--section--container">
                    {data?.skills?.map((item, index) => (
                        <div key={index} className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={item.src} alt="Product Chain" />
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                                <p className="skills--section--description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
}

export default MySkills;