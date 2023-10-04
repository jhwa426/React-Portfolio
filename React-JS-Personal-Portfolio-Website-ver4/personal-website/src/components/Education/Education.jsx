import './Education.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Education = () => {
    return (
        <div id="Education">
            <h2 className="education__title">Education</h2>

            <div className="container education__container">
                <article className="education">
                    <div className="education__detail">
                        <img className="education__img" src="../../img/uoa.jpg" alt="uoa_img" />
                        <div>
                            <p className="education__name">The University of Auckland, New Zealand</p>
                            <p className="education__name__degree">Bachelor of Science Major in Information and Technology Management</p>
                            <p className="education__name__duration">Mar 2020 – Nov 2023 (Expected)</p>
                        </div>
                    </div>
                    <ul className="education__description">
                        <li>
                            <AiFillCheckCircle className="education__icon" />
                            <p>Big Data and Machine Learning, Database Systems, Data Analysis, Management, and Visualisation, Exploratory data Analysis, Capstone Project</p>
                        </li>
                    </ul>
                </article>

                <article className="education">
                    <div className="education__detail">
                        <img className="education__img" src="../../img/uoa.jpg" alt="uoa_img" />
                        <div>
                            <p className="education__name">The University of Auckland, New Zealand</p>
                            <p className="education__name__degree">Bachelor of Science Software Development Module [COMPSCI 101, 130, 230, 235]</p>
                            <p className="education__name__duration">Mar 2020 – Nov 2023 (Expected)</p>
                        </div>
                    </div>
                    <ul className="education__description">
                        <li>
                            <AiFillCheckCircle className="education__icon" />
                            <p>Object Oriented Software Development, Agile Methodology, Computer Systems, Data Structures & Algorithms</p>
                        </li>
                    </ul>
                </article>

                <article className="education">
                    <div className="education__detail">
                        <img className="education__img" src="../../img/acg-logo.jpeg" alt="acg_img" />
                        <div>
                            <p className="education__name">ACG International College, Auckland, New Zealand</p>
                            <p className="education__name__degree">The University of Auckland Certificate in Foundation Studies</p>
                            <p className="education__name__duration">Jan 2019 – Dec 2019</p>
                        </div>
                    </div>
                    <ul className="education__description">
                        <li>
                            <AiFillCheckCircle className="education__icon" />
                            <p>Statistics, Accounting, Geography, Photography and English for Academic Purpose (EAP)</p>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    );
}

export default Education;