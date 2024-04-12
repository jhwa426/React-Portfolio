import styled from 'styled-components';

export const Nav = styled.nav`    
    background-color: ${({ theme }) => theme.bg};
    width: max-content;
    display: block;
    padding: 1.5rem 1.5rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translate(-800%, -80%); /* transform: translateX(-50%); */
    bottom:  2rem;
    gap: 0.4rem;
    border: 1px solid #854CE6;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
    

    @media screen and (max-width: 1440px) {
        display: flex;
        transform: translateX(-50%);
        padding: 0.5rem 1.7rem;
    }
    @media screen and (max-width: 640px) {
        padding: 0.3rem 1.5rem;
    }
`;

export const NavLink = styled.a`
    background: transparent;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    color: ${({ theme }) => theme.text_primary};
    font-size: 1.1rem;

    :hover {
        color: ${({ theme }) => theme.primary};
    }

    ${'' /* &.active {
        color: ${({ theme }) => theme.primary};
    } */}
`;

