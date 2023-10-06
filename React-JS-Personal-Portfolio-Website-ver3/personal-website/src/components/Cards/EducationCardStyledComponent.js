import styled from 'styled-components';

export const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Description = styled.div`
    padding-top: 5px;
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;


export const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

export const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #854CE6;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }  
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;

export const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;


export const Name = styled.div`
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

export const Degree = styled.div`
padding-bottom: 5px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

export const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;
