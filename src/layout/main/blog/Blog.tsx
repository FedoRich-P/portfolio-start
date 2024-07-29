import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { MainText } from '../../../components/text/MainText';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { SectionSubTitle } from '../../../components/titles/SectionSubTitle';
import { myTheme } from '../../../components/theme/Theme.staled';

import firsImg from '../../../assets/images/blog/Image1.jpg';
import secondImg from '../../../assets/images/blog/Image2.jpg';
import thirdImg from '../../../assets/images/blog/Image3.jpg';
import arrayIcon from '../../../assets/icons/icons-svg/blog-button-array.svg';

export function Blog() {
  return (
    <BlogSection>
      <Container>
        <SectionTitle>Blog</SectionTitle>
        <MainText $maxwidth="438px">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </MainText>
        <BlogList>
          <BlogItem>
            <BlogDescr>
              <SectionSubTitle $mb="8px">
                How to make web tempates
              </SectionSubTitle>
              <MainText $maxwidth="268px" $mb="9px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna
              </MainText>
              <BlogLink href="#">Learn more</BlogLink>
            </BlogDescr>
          </BlogItem>
          <BlogItem>
            <BlogDescr>
              <SectionSubTitle $mb="8px">make Business card</SectionSubTitle>
              <MainText $maxwidth="268px" $mb="9px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna
              </MainText>
              <BlogLink href="#">Learn more</BlogLink>
            </BlogDescr>
          </BlogItem>
          <BlogItem>
            <BlogDescr>
              <SectionSubTitle $mb="8px">
                How to make Flyer Design
              </SectionSubTitle>
              <MainText $maxwidth="268px" $mb="9px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna
              </MainText>
              <BlogLink href="#">Learn more</BlogLink>
            </BlogDescr>
          </BlogItem>
        </BlogList>
      </Container>
    </BlogSection>
  );
}

const BlogSection = styled.section``;
const BlogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, minmax(auto, 474px));
  grid-gap: 20px;
  align-items: end;
  justify-items: left;
`;
const BlogItem = styled.li`
  display: flex;
  align-items: flex-end;
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 310px 300px;
  background-color: #fff;
  &:first-child {
    background-image: url(${firsImg});
  }
  &:nth-child(2) {
    background-image: url(${secondImg});
  }
  &:nth-child(3) {
    background-image: url(${thirdImg});
  }
`;

const BlogDescr = styled.div`
  padding: 0 17px 17px 25px;
  text-align: start;
`;
const BlogLink = styled.a`
  position: relative;
  padding-right: 21px;
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  color: ${myTheme.colors.main};
  transition: transform 0.4 ease-in-out;

  &:hover {
    transform: scale(1.1);
    ${BlogItem} {
      opacity: 0.5;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-image: url(${arrayIcon});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

// const BlogDescr = styled.div``;
// const BlogDescr = styled.div``;
