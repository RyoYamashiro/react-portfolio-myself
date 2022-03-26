import SecondTitle from './SecondTitle';
import TechniqueCard from './TechniqueCard';

import styled from 'styled-components';
import { media, font_color_default, font_size_xxl, font_size_3l, font_family_corp, space_l, space_xl, space_xxl, space_3l, green, font_size_xl } from '../utils/styledComponents';

const TechniqueContainer = styled.div`
  overflow: hidden;
  padding-top: 5px;
  box-sizing: border-box;
`;

const data = [
  {
    pageName: 'All Pages',
    techniques: [
      {
        usedTechnique: 'React',
        info: 'Create React Appにより環境構築して、全体的にReactの基本的な技術を使用しております。'
      },
      {
        usedTechnique: 'レスポンシブデザイン',
        info: '各ページにスマホ表示用のスタイルも適応しております。'
      },
      {
        usedTechnique: 'SASS',
        info: 'ライブラリの「Dart-Sass(?)」を使用して、変数やネスト化構成が組み込まれたSCSSファイルを作成し、CSSファイルにコンパイルしてを読み込みながら'
      }
    ]
  },
  {
    pageName: 'Skills',
    techniques: [
      {
        usedTechnique: 'GithubAPI',
        info: '使用言語の習得度を数値化して表示するために、Githubアカウントのリポジトリ内にアップロードされてるファイルの拡張子の数を拾っております。'
      },
      {
        usedTechnique: 'useEffect',
        info: 'GithubAPIが非同期処理なので、データ抽出後にレンダー処理などするために、useEffectを使用しております。'
      }
    ]
  },
  {
    pageName: 'Bio',
    techniques: [
      {
        usedTechnique: 'Material-ui',
        info: '未定、'
      }
    ]
  },
  {
    pageName: 'Contact',
    techniques: [
      {
        usedTechnique: 'React Hook form',
        info: '問い合わせフォームの入力内容をバリデーションするためにこちらのライブラリを使用しました。'
      },
      {
        usedTechnique: 'EmailJS',
        info: '問い合わせフォームに入力した内容をリョウヤマ本人が受け取るため同期しました。'
      }
    ]
  },

];


function TechniqueList(){
  return(
    <>
      <SecondTitle title="Techniques on This Site" subtitle="こちらのポートフォリオサイトの各ページ上で使用してる技術を紹介します。" />
      <TechniqueContainer>
        {
          data.map((page, index) => <TechniqueCard key={index} page={page} />)
        }
      </TechniqueContainer>
    </>
  )
}
export default TechniqueList;
