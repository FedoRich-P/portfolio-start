import React from 'react';
import { FlexWrapper } from '../flex/FlexWrapper';
import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';
import { SectionSubTitle } from '../titles/SectionSubTitle';
import { MainText } from '../text/MainText';

type EducationWorkItemPropsType = {
  firsttitle: string;
  secondtitle: string;
  field: string;
  data: string;
  text: string;
};

export function EducationWorkItem(props: EducationWorkItemPropsType) {
  return (
    <Wrapper>
      <LeftSection>
        <SectionSubTitle $mb="28px">{props.firsttitle}</SectionSubTitle>
        <Field as={MainText}>{props.field}</Field>
        <Date>{props.data}</Date>
      </LeftSection>
      <RightSection>
        <SectionSubTitle $mb="28px">{props.secondtitle}</SectionSubTitle>
        <MainText>{props.text}</MainText>
      </RightSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 0;
  /* padding-top: 28px;
  padding-bottom: 10px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f6;
  }
`;
const LeftSection = styled.div`
  max-width: 208px;
  text-align: justify;
`;
const Field = styled.h4`
  margin-right: 21px;
`;
const Date = styled.span`
  padding: 4px 7px;

  font-size: 10px;
  line-height: 100%;
  color: #fff;
  background-color: ${myTheme.colors.main};
`;

const RightSection = styled.div`
  max-width: 536px;
  text-align: justify;
`;
