import styled from 'styled-components';
import { colors } from '../../styles';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.button`
  display: block;
  width: 100%;
  padding: 4px 0;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-weight: bold;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 4px 6px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  font-weight: bold;
  font-size: 14px;
`;
