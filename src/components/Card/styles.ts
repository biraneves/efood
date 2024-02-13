import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles';

export const CardContainer = styled.li<Omit<Props, 'item'>>`
    background-color: ${props => (props.type === 'home' ? colors.white : colors.primary)};
    position: relative;
    padding: ${props => (props.type === 'home' ? '0' : '8px')};

    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;

export const CardInfos = styled.div<Omit<Props, 'item'>>`
    color: ${props => (props.type === 'home' ? colors.primary : colors.secondary)};
    border: ${props => (props.type === 'home' ? `solid 1px ${colors.primary}` : 'none')};
    margin-top: ${props => (props.type === 'home' ? '-5px' : '0')};
    padding: ${props => (props.type === 'home' ? '8px' : '0')};

    div {
        display: flex;
        justify-content: space-between;
        margin-top: ${props => (props.type === 'home' ? '0' : '8px')};
        margin-bottom: ${props => (props.type === 'home' ? '16px' : '8px')};
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: ${props => (props.type === 'home' ? '16px' : '8px')};
    }
`;

export const CardTitle = styled.h3<Omit<Props, 'item'>>`
    font-weight: ${props => (props.type === 'home' ? 'bold' : '900')};
    font-size: ${props => (props.type === 'home' ? '18px' : '16px')};
`;

export const TagsList = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 6px 4px;
    margin-left: 8px;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 12px;
`;
