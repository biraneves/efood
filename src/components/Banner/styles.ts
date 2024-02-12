import styled from 'styled-components';
import Restaurant from '../../models/Restaurant';
import { colors } from '../../styles';

type Props = {
    restaurant: Restaurant;
};

export const BannerContainer = styled.div<Props>`
    background-image: url(${props => props.restaurant.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 280px;
    padding: 24px 0;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`;

export const Tag = styled.span`
    display: inline-block;
    color: ${colors.white};
    font-weight: 100;
    font-size: 32px;
    margin-right: 32px;
`;

export const RestaurantName = styled.h2`
    font-weight: 900;
    font-size: 32px;
    color: ${colors.white};
`;
