import styled from 'styled-components';
import bgPattern from '../../assets/images/fundo.png';

export const HeaderContainer = styled.header`
    background-image: url(${bgPattern});

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        height: 360px;
    }

    p {
        width: 540px;
        font-weight: 900;
        font-size: 36px;
        text-align: center;
    }
`;

export const Logo = styled.img`
    width: 125px;
`;
