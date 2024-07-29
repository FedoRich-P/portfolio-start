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
import { Map } from './layout/main/map/Map';
import { Logos } from './layout/main/logos/Logos';
import { Footer } from './layout/main/footer/Footer';

function App() {
  return (
    <SectionWrapper>
      <MainSection>
        <Sitebar />
        <Header />
        <Services />
        <Plans />
        <Recom />
        <Education />
        <WorkHistory />
        <Portfolio />
        <Blog />
        <UserInfoAndContact />
        <Map />
        <Logos />
        <Nav />
      </MainSection>
      <Footer />
    </SectionWrapper>
  );
}

const MainSection = styled.main`
  /* position: relative; */
`;
const SectionWrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  padding-left: 335px;
  padding-right: 135px;

  max-width: 1470px;
  position: relative;
`;

export default App;
