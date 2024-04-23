import { Container, Wrapper, Title, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillsStyledComponent";
import { skills } from '../../data/index';


const Skills = () => {
    return (
        <Container id="Skills">
            <Wrapper>
                <Title>TECHNICAL SKILLS</Title>
                {/* <Description>What I have skills</Description> */}
                <SkillsContainer>
                    {skills.map((skill) => (
                        <Skill>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item) => (
                                    <SkillItem>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
}


export default Skills;