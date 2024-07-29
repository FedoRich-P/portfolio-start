import './App.css';
import styled from 'styled-components';
import { FlexWrapper } from './components/flex/FlexWrapper';
import { Sitebar } from './layout/sitebar/Sitebar';
import { Header } from './layout/main/header/Header';
import { Services } from './layout/main/services/Services';
import { Plans } from './layout/main/plans/Plans';
import { Recom } from './layout/main/recommindation/RecomWrapper';
import { Education } from './layout/main/education/Education';
import { Nav } from './layout/nav/Nav';
import { WorkHistory } from './layout/main/workhistory/WorkHistory';
import { Portfolio } from './layout/main/portfolio/Portfolio';
import { Blog } from './layout/main/blog/Blog';
import { UserInfoAndContact } from './layout/main/userinf0-and-contacts/UserInfoAndContacts';

function App() {
  return (
    <FlexWrapper $align="flex-start" $wrap="wrap">
      <Sitebar />
      <MainSection>
        <Header />
        <Services />
        <Plans />
        <Recom />
        <Education />
        <WorkHistory />
        <Portfolio />
        <Blog />
        <UserInfoAndContact />
      </MainSection>
      <Nav />
    </FlexWrapper>
  );
}

const MainSection = styled.main``;

export default App;
