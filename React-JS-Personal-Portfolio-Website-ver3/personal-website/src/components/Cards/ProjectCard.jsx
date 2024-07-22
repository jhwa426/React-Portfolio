import { Button, Card, Image, Skill, Skills, Details, Title, Date, Description, Members, Member } from './ProjectCardStyledComponent';

const ProjectCard = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.img} />

            <Skills>
                {project.skills?.map((skill, index) => (
                    <Skill>{skill}</Skill>
                ))}
            </Skills>

            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>

            <Members>
                {project.members?.map((member) => (
                    <Member src={member.img} />
                ))}
            </Members>

            <Button>View Detail</Button>
        </Card>
    );
}

export default ProjectCard;