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
      <SecondTitle title="Languages" subtitle="Here’s a list of programming languages I’ve used.(The percentages come from GitHub API and are based on file extensions in my repos — they don’t necessarily reflect how skilled I am with each one.)" />
      <LanguageListContainer>
         {
           fetchRequestState === requestStates.loading && (
             <p className="description">Loading...</p>
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
             <p className="description">Something went wrong. Please try again later.</p>
           )
         }
      </LanguageListContainer>
    </>
  );
}
export default LanguageList;
