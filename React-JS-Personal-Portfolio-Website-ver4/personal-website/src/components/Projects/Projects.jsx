import './Projects.css';
import { projects } from '../../data/index';

const Projects = () => {
    return (
        <div id="Projects">
            <h2 className="projects__title">Projects</h2>

            <div className="container projects__container">
                {
                    projects.map(({ id, title, description, img, github, website }) => {
                        return (
                            <article className="projects__item" key={id}>
                                <div className="projects__item__img">
                                    <img src={img} alt={title} />
                                </div>
                                <h4>{title}</h4>
                                <p>{description}</p>
                                <div className="projects__item__details">
                                    <a href={github} className="btn" target="new">Github</a>
                                    <a href={website} className="btn btn-primary" target="new">View the project</a>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Projects;