import styled from 'styled-components';
import { colors } from '../../styles';

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const CartContent = styled.div`
  display: none;

  &.cart-content-visible {
    display: block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  z-index: 1;
  background-color: ${colors.primary};
  padding: 32px 8px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 14px;
    background-color: ${colors.secondary};
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px grey;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: solid 2px ${colors.secondary};
    background-color: ${colors.primary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a71e01;
  }

  .empty-cart {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: ${colors.secondary};
  }
`;

export const CardItem = styled.li`
  width: 100%;
  background-color: ${colors.secondary};
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  position: relative;

  img:first-child {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h4 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ButtonBin = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const SaleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.secondary};
  margin-top: 40px;
  margin-bottom: 16px;

  p {
    font-weight: bold;
    font-size: 14px;
  }
`;
