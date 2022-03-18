import Circle from 'react-circle';
import {requestStates} from '../constants';
import {useSkills} from '../customHooks/useSkills';

function LanguageList(){
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
  return(
    <div class="language-list-wrapper">
    <div className="language-list-container">
      <div className="language-heading">
        <h2 className="second-title">Languages</h2>
        <p className="second-subtitle">私が使用可能な言語を一覧にしております。(パーセンテージはgithubAPIにより、リポジトリ内に格納されているファイルの拡張子により算出しております。)</p>
      </div>
      <div className="language-container">
       {
         fetchRequestState === requestStates.loading && (
           <p className="description">取得中...</p>
         )
       }
       {
          fetchRequestState === requestStates.success && (
            sortedLanguageList().map((item, index) => (
              <div className="language-item" key={index}>
                <p className="description"><strong>{item.language}</strong></p>
                <Circle
                  animate
                  progress={converseCountToPercentage(item.count)}
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
      </div>
    </div>
    </div>
  );
}
export default LanguageList;
