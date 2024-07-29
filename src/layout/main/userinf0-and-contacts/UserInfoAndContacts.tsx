import styled from 'styled-components';
import { MainBtn } from '../../../components/buttons/MainBtn';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { myTheme } from '../../../components/theme/Theme.staled';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';

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
        <RightSection>
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
              <Description></Description>
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
              <Description></Description>
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
              <Description></Description>
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

    &::placeholder {
      color: ${myTheme.colors.black};
    }
  }

  textarea {
    height: 210px;
    overflow-y: scroll;
    resize: none;
  }
`;
const InputName = styled.input``;
const InputMail = styled.input``;
const InputSubject = styled.input``;
const AreaMessage = styled.textarea``;
const FormButton = styled.textarea``;
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

const Description = styled.div``;
