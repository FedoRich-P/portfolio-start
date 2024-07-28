import styled from 'styled-components';
import { myTheme } from '../../../components/theme/Theme.staled';
import { PortfolioItemsts } from './PortfolioItems';

type TabsPropsType = {
  btnsarray: Array<string>;
};

export function Tabs(props: TabsPropsType) {
  return (
    <>
      <TabsList>
        {props.btnsarray.map((el, i) => {
          return (
            <TabsItem key={i}>
              <TabsBtn>{el}</TabsBtn>
            </TabsItem>
          );
        })}
      </TabsList>
      <PortfolioItemsts></PortfolioItemsts>
    </>
  );
}

const TabsList = styled.ul`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 38px;
`;
const TabsItem = styled.li``;
const TabsBtn = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 124%;
  text-transform: capitalize;
  color: ${myTheme.colors.black};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${myTheme.colors.main};
  }
`;
