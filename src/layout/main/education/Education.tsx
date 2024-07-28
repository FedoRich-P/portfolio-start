import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { MainText } from '../../../components/text/MainText';
import { EducationWorkItem } from '../../../components/education.work.item/Education-Work.Item';

export function Education() {
  return (
    <EducationSection>
      <Container>
        <SectionTitle>Education</SectionTitle>
        <MainText $maxwidth="438px" $mb="50px">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </MainText>
        <EducationList>
          <EducationWorkItem
            firsttitle="University of Toronto"
            field="Student"
            data="Jan 1016 - Dec 2021"
            secondtitle="Certificate of web training"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          />
          <EducationWorkItem
            firsttitle="Programming Course"
            field="Student"
            data="Jan 1016 - Dec 2021"
            secondtitle="Certificate of web training"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          />
          <EducationWorkItem
            firsttitle="Web developer courses"
            field="Student"
            data="Jan 1016 - Dec 2021"
            secondtitle="Certificate of web training"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          />
        </EducationList>
      </Container>
    </EducationSection>
  );
}

const EducationSection = styled.section``;
const EducationList = styled.ul`
  padding: 0 30px;

  background-color: #fff;
`;
