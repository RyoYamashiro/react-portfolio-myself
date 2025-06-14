import SecondTitle from './SecondTitle';
import TechniqueCard from './TechniqueCard';

import techniqueData from '../data/techniqueData';

import styled from 'styled-components';

const TechniqueContainer = styled.div`
  overflow: hidden;
  padding-top: 5px;
  box-sizing: border-box;
`;


function TechniqueList(){
  return(
    <>
      <SecondTitle title="Techniques on This Site" subtitle="Here are the technologies I used to build each part of this portfolio website." />
      <TechniqueContainer>
        {
          techniqueData.map((page, index) => <TechniqueCard key={index} page={page} />)
        }
      </TechniqueContainer>
    </>
  )
}
export default TechniqueList;
