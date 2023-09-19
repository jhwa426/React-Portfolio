import { Container, Wrapper, Title, Date, Description, Image, Label, Skills, Skill, Members, Member, MemberImage, MemberName, ButtonGroup, Button } from './ProjectDetailsStyledComponent';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';


const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.img} />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Description>{project?.description}</Description>
                    <Skills>
                        {project?.skills.map((skill) => (
                            <Skill>{skill}</Skill>
                        ))}
                    </Skills>
                    <Description>{project?.description}</Description>

                    {/* optional */}
                    {project.members && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.members.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    {/* optional */}

                    <ButtonGroup>
                        <Button href={project?.github} target="_blank" rel="noopener noreferrer">View the code</Button>
                        <Button href={project?.website} target="_blank" rel="noopener noreferrer">View the project</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ProjectDetails;