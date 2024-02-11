import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
    background-color: ${colors.white};
    position: relative;
`;

export const CardInfos = styled.div`
    border-top: solid 0px transparent;
    border-right: solid 1px ${colors.primary};
    border-bottom: solid 1px ${colors.primary};
    border-left: solid 1px ${colors.primary};
    padding: 8px;

    div {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const StarIcon = styled.span`
    font-size: 20px;
    color: ${colors.yellow};
`;

export const RestaurantDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    padding: 16px 0;
`;

export const Tags = styled.div`
    display: flex;
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const Tag = styled.span`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    font-weight: bold;
    font-size: 12px;
    padding: 6px 4px;
    margin-left: 8px;
`;
