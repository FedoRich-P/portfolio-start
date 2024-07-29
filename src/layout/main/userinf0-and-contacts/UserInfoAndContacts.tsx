import styled from 'styled-components';
import { MainBtn } from '../../../components/buttons/MainBtn';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { myTheme } from '../../../components/theme/Theme.staled';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';
import { link } from 'fs';

export function UserInfoAndContact() {
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <SectionTitle $mb="50px">Leave us your info</SectionTitle>
          <UserForm>
            <label htmlFor="input-name">Your Full Name ( Required)</label>
            <InputName id="input-name" type="text" />
            <label htmlFor="input-mail">Your Email ( Required)</label>
            <InputMail id="input-mail" type="email" />
            <label htmlFor="input-subject">Subject</label>
            <InputSubject id="input-subject" type="text" />
            <label htmlFor="textarea">Your Message</label>
            <AreaMessage id="textarea" />

            <FormButton as={MainBtn}>send message</FormButton>
          </UserForm>
        </LeftSection>
        <RightSection id="contact">
          <SectionTitle $mb="50px">Contact information</SectionTitle>
          <FlexWrapper $direction="column" $gap="18px">
            <Block>
              <BlockIcon>
                <Icon
                  iconId="contacts"
                  width="19px"
                  height="19px"
                  viewBox="0 0 19 19"
                />
              </BlockIcon>
              <FlexWrapper $justify="space-between" $mb="14px">
                <ContactsName>Country:</ContactsName>
                <ContactsValue>Bangladesh</ContactsValue>
              </FlexWrapper>
              <FlexWrapper $justify="space-between" $mb="14px">
                <ContactsName>City:</ContactsName>
                <ContactsValue>Dhaka</ContactsValue>
              </FlexWrapper>
              <FlexWrapper $justify="space-between">
                <ContactsName>Streat:</ContactsName>
                <ContactsValue>35 vhatara, Badda</ContactsValue>
              </FlexWrapper>
            </Block>
            <Block>
              <BlockIcon>
                <Icon
                  iconId="mail"
                  width="19px"
                  height="19px"
                  viewBox="0 0 19 19"
                />
              </BlockIcon>
              <FlexWrapper $justify="space-between" $mb="14px">
                <ContactsName>Email:</ContactsName>
                <ContactsValue as="a" href="mailto:youremail@gmail.com">
                  youremail@gmail.com
                </ContactsValue>
              </FlexWrapper>
              <FlexWrapper $justify="space-between" $mb="14px">
                <ContactsName>Skype:</ContactsName>
                <ContactsValue as="a">@yourusername</ContactsValue>
              </FlexWrapper>
              <FlexWrapper $justify="space-between">
                <ContactsName>Telegram:</ContactsName>
                <ContactsValue as="a">@yourusername</ContactsValue>
              </FlexWrapper>
            </Block>
            <Block>
              <BlockIcon>
                <Icon
                  iconId="mobile"
                  width="19px"
                  height="19px"
                  viewBox="0 0 19 19"
                />
              </BlockIcon>
              <FlexWrapper $justify="space-between" $mb="14px">
                <ContactsName>Support services:</ContactsName>
                <ContactsValue>15369</ContactsValue>
              </FlexWrapper>
              <FlexWrapper $justify="space-between" $mb="14px">
                <ContactsName>Office:</ContactsName>
                <ContactsValue as="a" href="tel:+58021356587235">
                  +58 (021)356 587 235
                </ContactsValue>
              </FlexWrapper>
              <FlexWrapper $justify="space-between">
                <ContactsName>Personal:</ContactsName>
                <ContactsValue as="a" href="tel:+58021356587235">
                  +58 (021)356 587 235
                </ContactsValue>
              </FlexWrapper>
            </Block>
          </FlexWrapper>
        </RightSection>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 570px 370px);
  grid-gap: 30px;
`;

const LeftSection = styled.section``;

const UserForm = styled.form`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;

  label {
    margin-bottom: 8px;
    text-align: left;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 124%;
    text-transform: capitalize;
    color: ${myTheme.colors.grey};
  }

  input,
  textarea {
    margin-bottom: 25px;
    padding: 12px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 124%;
    background-color: #f0f0f6;
    border-color: transparent;

    &::placeholder {
      color: ${myTheme.colors.black};
    }
  }

  textarea {
    margin-bottom: 26px;
    height: 210px;
    overflow-y: scroll;
    resize: none;
  }
`;
const InputName = styled.input``;
const InputMail = styled.input``;
const InputSubject = styled.input``;
const AreaMessage = styled.textarea``;
const FormButton = styled.textarea`
  padding: 9px 25px;
`;
const RightSection = styled.section``;
const BlockIcon = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${myTheme.colors.main};
`;

const Block = styled.div`
  padding: 25px 25px 16px 25px;
  width: 100%;
  background-color: #fff;
`;

const ContactsName = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${myTheme.colors.grey};
`;

const ContactsValue = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  text-transform: capitalize;
  text-align: right;
  color: ${myTheme.colors.grey};
`;
