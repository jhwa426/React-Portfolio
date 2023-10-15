import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const ThemeContainer = styled.div`
    background: ${({ theme }) => theme.card_light};
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: flex-end;
    position: relative;
    padding-right: 26.5rem;
    z-index: 1;

    @media (max-width: 1440px) {
        display: flex;
        justify-content: flex-end;
        padding-right: 11.5rem;
        padding-left: 0px;
    }

    @media (max-width: 1366px) {
        display: flex;
        justify-content: flex-end;
        padding-right: 9.5rem;
        padding-left: 0px;
    }

    @media (max-width: 1024px) {
        display: flex;
        justify-content: flex-end;
        padding-right: 4rem;
        padding-left: 0px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        padding-left: 0px;
        padding-right: 1.5rem;
    }

    @media (max-width: 640px) {
        display: flex;
        justify-content: flex-end;
        padding-left: 0px;
        padding-right: 1.5rem;
    }

`;

export const ThemeLogo = styled(LinkR)`
    color: ${({ theme }) => theme.text_secondary};
;
`;

export const Elements = styled.div`
    :hover {
        color: ${({ theme }) => theme.primary};
        }
`;