import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const ThemeLogo = styled(LinkR)`
    background: ${({ theme }) => theme.card_light};
    width: 100%;
    padding: 0rem 14.13rem;

    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    


    @media (max-width: 640px) {

}
`;

export const Elements = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 9.75rem;
    background: ${({ theme }) => theme.card_light};
    width: 100%;

    ${'' /* flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    cursor: pointer; */}

    :hover {
        color: ${({ theme }) => theme.primary};     
        }

    @media (max-width: 640px) {
        padding: 0 0px;
}
`;