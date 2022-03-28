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
      <SecondTitle title="Techniques on This Site" subtitle="こちらのポートフォリオサイトの各ページ上で使用してる技術を紹介します。" />
      <TechniqueContainer>
        {
          techniqueData.map((page, index) => <TechniqueCard key={index} page={page} />)
        }
      </TechniqueContainer>
    </>
  )
}
export default TechniqueList;
