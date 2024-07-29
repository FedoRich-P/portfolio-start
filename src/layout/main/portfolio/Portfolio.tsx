import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { MainText } from '../../../components/text/MainText';
import { Tabs } from './Tabs';

const btnsArray = [
  'All categories',
  'UI Design',
  'Web Templates',
  'Logo',
  'Branding',
];

export function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <MainText $maxwidth="438px" $mb="50px">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </MainText>
        <Tabs btnsarray={btnsArray}></Tabs>
      </Container>
    </PortfolioSection>
  );
}

const PortfolioSection = styled.section``;
