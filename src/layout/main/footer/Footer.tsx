import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { Icon } from '../../../components/icon/Icon';

export function Footer() {
  return (
    <Container>
      <FooterSection>
        <Icon
          iconId="footer-svg"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
        />
        2021 All Rights Reserved.Ojjomedia
      </FooterSection>
    </Container>
  );
}

const FooterSection = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  background-color: #fff;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  color: #2b2b2b;

  svg {
    margin-right: 15px;
  }
`;
