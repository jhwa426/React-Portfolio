import './Education.css';
import data from '../../data/index.json';

// education

const Education = () => {
    return (
        <section className="education--section" id="Education">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Education</p>
                    <h2 className="sections--heading">Education</h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.education?.map((item, index) => (
                    <div key={index} className="education--section--card">
                        <div className="education--section--card--reviews">

                        </div>
                        <p className="coursework">Coursework:<p className="text-md">{item.description}</p></p>
                        <div className="education--section--card--description">
                            <img src={item.src} alt="Fix later" />
                            <div>
                                <p className="text-md education--degree">{item.degree}</p>
                                <br />
                                <p className="text-md education--name">{item.name}</p>
                                <br />
                                <p className="text-md education--name">{item.period}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Education;