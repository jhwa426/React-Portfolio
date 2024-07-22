import { Container, StyledCloseIcon, Wrapper, Title, Date, Description, Image, Label, Skills, Skill, Members, Member, MemberImage, MemberName, MemberDetails, ButtonGroup, Button } from './ProjectDetailsStyledComponent';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';


const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    const closeHandler = () => {
        setOpenModal({ state: false, project: null });
    };

    return (
        <Modal open={true} onClose={closeHandler}>
            <Container
                onClick={closeHandler}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -30 }}
            >
                <Wrapper>
                    <StyledCloseIcon onClick={closeHandler} />
                    <Image src={project?.img} />
                    <Title>{project?.title}</Title>
                    <Date>{project?.date}</Date>
                    <Description>{project?.description}</Description>
                    <Skills>
                        {project?.skills.map((skill) => (
                            <Skill>{skill}</Skill>
                        ))}
                    </Skills>

                    {project.descriptionDetails?.map((detail, index) => (
                        <Description>{detail}</Description>
                    ))}

                    {project.members && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.members.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <MemberDetails href={member.github} target="_blank" rel="noopener noreferrer">
                                            <GitHub />
                                        </MemberDetails>
                                        <MemberDetails href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <LinkedIn />
                                        </MemberDetails>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}

                    <ButtonGroup>
                        <Button href={project?.website} target="_blank" rel="noopener noreferrer">View the project</Button>
                        <Button href={project?.github} target="_blank" rel="noopener noreferrer">View the code</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ProjectDetails;