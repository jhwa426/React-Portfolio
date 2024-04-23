import { Container, Wrapper, Title, TimelineSection } from './EducationStyledComponent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from "../Cards/EducationCard";
import { education } from '../../data/index';


const Education = () => {
    return (
        <Container id="Education">
            <Wrapper>
                <Title>EDUCATION</Title>
                {/* <Description>Education in New Zealand</Description> */}
                <TimelineSection>
                    <Timeline>
                        {education.map((information) => (
                            <TimelineItem key={information.id}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector style={{ background: '#854CE6' }} />
                                </TimelineSeparator>

                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={information} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
}

export default Education;