import styled from "styled-components";
import { Container, Wrapper, Title, Description, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillsStyledComponent";
import { skills } from '../../data/constants';


const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Description>This is description section for skills</Description>
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