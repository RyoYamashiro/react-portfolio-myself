import Circle from 'react-circle';
import {requestStates} from '../constants';
import {useSkills} from '../customHooks/useSkills';
import SecondTitle from './SecondTitle';

import styled from 'styled-components';
import { media, space_xl, space_l } from '../utils/styledComponents';


const LanguageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: ${space_xl};
  min-height: 130px;
   .language-item {
    margin: 0 ${space_l};
    ${media.handheld`
      width: 100%;
      margin-bottom: ${space_l};
      &:last-child{
        margin-bottom: 0;
      }
   `}
 }
`;

function LanguageList(){
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
  return(
    <>
      <SecondTitle title="Languages" subtitle="私が使用可能な言語を一覧にしております。(パーセンテージはgithubAPIにより、リポジトリ内に格納されているファイルの拡張子の数×10%で算出しておりますので、熟練度とは異なります。)" />
      <LanguageListContainer>
         {
           fetchRequestState === requestStates.loading && (
             <p className="description">取得中...</p>
           )
         }
         {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="language-item" key={index}>
                  <p className="description">{item.language}</p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                    progressColor="#ff8af2"
                    lineWidth="25px"
                  />
                </div>
              ))
            )
          }
         {
           fetchRequestState === requestStates.error && (
             <p className="description">エラーが発生しました</p>
           )
         }
      </LanguageListContainer>
    </>
  );
}
export default LanguageList;
