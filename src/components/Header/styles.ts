import styled from 'styled-components';
import bgPattern from '../../assets/images/fundo.png';
import { Props } from '.';
import { colors } from '../../styles';

export const HeaderContainer = styled.header<Props>`
    background-image: url(${bgPattern});

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        height: ${props => (props.type === 'home' ? '360px' : '162px')};
    }

    p {
        width: 540px;
        font-weight: 900;
        font-size: 36px;
        text-align: center;
    }
`;

export const Logo = styled.img`
    width: 124px;
`;

export const TopContent = styled.div<Props>`
    display: ${props => (props.type === 'profile' ? 'grid' : 'block')};
    grid-template-columns: ${props => (props.type === 'profile' ? '410px 124px 410px' : '1fr')};
    gap: 0;
    align-items: center;
    width: 100%;
    text-align: center;

    > p {
        max-width: 410px;
        font-size: 18px;
        font-weight: 900;
    }

    :first-child {
        text-align: ${props => (props.type === 'home' ? 'center' : 'left')};
        text-decoration: none;
        color: ${colors.primary};
        font-size: 18px;
        font-weight: 900;
    }

    :last-child {
        text-align: ${props => (props.type === 'home' ? 'center' : 'right')};
    }
`;
