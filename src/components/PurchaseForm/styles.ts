import styled from 'styled-components';
import { colors } from '../../styles';

type Props = {
  type: 'delivery' | 'payment';
};

export const FormContainer = styled.form<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: bold;

  h4 {
    font-size: 16px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.secondary};
    border: none;
    outline: none;
    color: ${colors.black};
    font-size: 14px;
    font-weight: bold;
  }
`;

export const HorizontalGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 32px;

  .cvv {
    max-width: 88px;
  }
`;
