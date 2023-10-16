import styled from "styled-components";

export const AboutMeContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    
    @media (max-width: 640) {
        padding: 32px 16px;
    }
`;

export const AboutMeBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    padding-top: 100px;

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
        padding-top: 20px;
    }
`;

export const AboutMeInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const AboutMeLeftContainer = styled.div`
    width: 100%;
    order: 1;
    
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const AboutMeRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

export const Img = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
        margin-top: 15px
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;

export const Title = styled.div`
    padding-top: 50px;
    padding-bottom: 30px;
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const Description = styled.div`
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

export const LineBreak = styled.br`
    display: block;
    margin: 10px 0;
`;

export const CVButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 60%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634;
        filter: brightness(1);
    }    

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;
