import styled from 'styled-components';
import { colors } from '../../styles';

export const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: ${colors.secondary};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 10px;
    text-align: center;
    max-width: 480px;
  }
`;

export const Logo = styled.img`
  width: 124px;
`;

export const SocialLinks = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;

  :nth-child(2) {
    margin: 0 8px;
  }
`;
