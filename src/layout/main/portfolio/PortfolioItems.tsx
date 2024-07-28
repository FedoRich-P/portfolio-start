import styled from 'styled-components';
import { myTheme } from '../../../components/theme/Theme.staled';

import firstImg from '../../../assets/images/portfolio/Image1.jpg';
import secondImg from '../../../assets/images/portfolio/Image2.jpg';
import thirdImg from '../../../assets/images/portfolio/Image3.jpg';
import fourthImg from '../../../assets/images/portfolio/Image4.jpg';
import fiftImg from '../../../assets/images/portfolio/Image5.jpg';
import sixthImg from '../../../assets/images/portfolio/Image6.jpg';
import seventhImg from '../../../assets/images/portfolio/Image7.jpg';
import eighthImg from '../../../assets/images/portfolio/Image8.jpg';
import ninthImg from '../../../assets/images/portfolio/Image9.jpg';
import plus from '../../../assets/icons/icons-svg/portfolio-plus.svg';

export function PortfolioItemsts() {
  return (
    <PortfolioList>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={firstImg} alt="First Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={secondImg} alt="Second Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={thirdImg} alt="Third Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={fourthImg} alt="FourthImg Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={fiftImg} alt="Fift Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={sixthImg} alt="Sixth Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={seventhImg} alt="Seventh Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={eighthImg} alt="Eighth Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
      <PortfolioItem>
        <PortfolioLink href="#">
          <img src={ninthImg} alt="Ninth Portfolio" />
        </PortfolioLink>
      </PortfolioItem>
    </PortfolioList>
  );
}

const PortfolioList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(auto 300px));
  grid-gap: 20px;
`;
const PortfolioItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.95;
    background-color: ${myTheme.colors.main};
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    cursor: pointer;
  }
  &:hover {
    &::after {
      opacity: 0.95;
    }
  }
`;
const PortfolioLink = styled.a``;
