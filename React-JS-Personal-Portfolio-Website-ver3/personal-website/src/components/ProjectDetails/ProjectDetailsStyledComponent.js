import styled from 'styled-components'
import CloseRounded from '@mui/icons-material/CloseRounded';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000a7;
    display: flex;
    align-items: top;
    justify-content: center;
    overflow-y: scroll;
    transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
    max-width: 800px;
    width: 100%;
    border-radius: 16px;
    margin: 50px 12px;
    height: min-content;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyledCloseIcon = styled(CloseRounded)`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    font-size: 25px;
`;

export const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px 0px 6px;
    
    @media only screen and (max-width: 600px) {
        font-size: 24px;
        margin: 6px 6px 0px 6px;
    }
`;

export const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

export const Description = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

export const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

export const Skill = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

export const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

export const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export const MemberDetails = styled.a`
    text-decoration: none;
    color: inherit;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

export const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }

    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;