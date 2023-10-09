import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    ${'' /* background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%); */}
`;

export const FooterWrapper = styled.footer`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`;

export const Logo = styled.a`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    
    &:hover {
        color: ${({ theme }) => theme.text_primary};
    }
`;

export const NavItems = styled.nav`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    
    @media (max-width: 768px) {
        ${'' /* flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px; */}

        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        font-size: 12px;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const Copyright = styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.soft2};
    text-align: center;
`;