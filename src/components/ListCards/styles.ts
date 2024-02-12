import styled from 'styled-components';
import { Props } from '.';

export const ListCardsContainer = styled.div<Props>`
    padding: ${props => (props.type === 'home' ? '80px' : '56px')} 0 120px;
`;

export const List = styled.ul<Props>`
    display: grid;
    grid-template-columns: repeat(${props => (props.type === 'home' ? 2 : 3)}, 1fr);
    column-gap: ${props => (props.type === 'home' ? '80px' : '32px')};
    row-gap: ${props => (props.type === 'home' ? '48px' : '32px')};
`;
