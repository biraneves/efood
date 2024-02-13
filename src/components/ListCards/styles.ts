import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles';

export const ListCardsContainer = styled.div<Props>`
    padding: ${props => (props.type === 'home' ? '80px' : '56px')} 0 120px;
`;

export const List = styled.ul<Props>`
    display: grid;
    grid-template-columns: repeat(${props => (props.type === 'home' ? 2 : 3)}, 1fr);
    column-gap: ${props => (props.type === 'home' ? '80px' : '32px')};
    row-gap: ${props => (props.type === 'home' ? '48px' : '32px')};
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    justify-content: center;
    align-items: center;

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const ModalContent = styled.div`
    padding: 32px;
    background-color: ${colors.primary};
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #fff;

    > div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        img {
            width: 280px;
            height: 280px;
            object-fit: cover;
        }

        div {
            margin-left: 24px;

            h3 {
                font-weight: 900;
                font-size: 18px;
                margin-bottom: 16px;
            }

            p {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                margin-bottom: 16px;
            }
        }
    }
`;

export const CloseIcon = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
`;

export const AddCart = styled.button`
    padding: 4px 8px;
    background-color: ${colors.secondary};
    border: none;
    outline: none;
    color: ${colors.primary};
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`;
