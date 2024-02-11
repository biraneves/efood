import styled from 'styled-components';

export const RestaurantContainer = styled.main`
    padding-top: 60px;
    padding-bottom: 120px;
`;

export const ListRestaurants = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
`;
