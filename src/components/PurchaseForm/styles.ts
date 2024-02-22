import styled from 'styled-components';
import { colors } from '../../styles';
import Button from '../Button';

type Props = {
  type: 'delivery' | 'payment';
};

export const FormContainer = styled.div<Props>`
  width: 100%;
  display: none;
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

  &.form-visible {
    display: flex;
  }
`;

export const OrderConfirmation = styled.div`
  width: 100%;
  color: ${colors.secondary};

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 32px;
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

    &.error {
      background-color: #fcc2bd;
      color: red;
    }
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
