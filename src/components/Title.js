import styled from 'styled-components';
import { space_m } from '../utils/styledComponents';


function Title(props){
  return(
    <TitleWrapper>
      <MainTitle>{props.title}</MainTitle>
      <SubTitle>{props.subtitle}</SubTitle>
    </TitleWrapper>
  );
}
export default Title;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: ${space_m};
`;

const MainTitle = styled.h2`
  font-size: 30px;
  font-family: 'Hubballi', cursive;
  color: #ff8af2;
  background: #c7ffea;
  display: inline-block;
  box-sizing: border-box;
  padding: 0px 8px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

const SubTitle = styled.p`
  text-align: center;
  margin-bottom: $space_m;
`;
