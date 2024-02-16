import styled from 'styled-components';
import { colors } from '../../styles';

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 280px;
  padding: 24px 0;
  position: relative;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
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
