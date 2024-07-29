import { Container } from '../../../components/container/Container';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

export function Logos() {
  return (
    <Container>
      <FlexWrapper $justify="space-between" $mb="70px">
        <Icon
          iconId="first-logo"
          height="140px"
          width="140px"
          viewBox="0 0 140 140"
        />
        <Icon
          iconId="second-logo"
          height="140px"
          width="140px"
          viewBox="0 0 140 140"
        />
        <Icon
          iconId="third-logo"
          height="140px"
          width="140px"
          viewBox="0 0 140 140"
        />
        <Icon
          iconId="fourth-logo"
          height="140px"
          width="140px"
          viewBox="0 0 140 140"
        />
      </FlexWrapper>
    </Container>
  );
}
