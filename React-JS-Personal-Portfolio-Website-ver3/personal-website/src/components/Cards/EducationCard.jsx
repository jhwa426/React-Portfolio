import { Description, Span, Card, Top, Image, Body, Name, Degree, Date } from './EducationCardStyledComponent';


const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>

            <Description>
                <Span>{education.desc}</Span>
            </Description>

        </Card>
    );
}

export default EducationCard;