const techniqueData = [
  {
    pageName: 'All Pages',
    techniques: [
      {
        usedTechnique: 'React',
        info: 'Create React Appにより環境構築して、全体的にReactの基本的な技術を使用しております。'
      },
      {
        usedTechnique: 'react-dom-router',
        info: 'SPAサイトにするため基本的な操作を使用しております。'
      },
      {
        usedTechnique: 'レスポンシブデザイン',
        info: '各ページにスマホ表示用のスタイルも適応しております。'
      },
      {
        usedTechnique: 'MUI',
        info: 'ボタン・モーダルなどのパーツはMUIライブラリを使用しております。'
      },
      {
        usedTechnique: 'styled-components',
        info: '各コンポーネントでスタイルを指定するため使用しております。'
      }
    ]
  },
  {
    pageName: 'Skills',
    techniques: [
      {
        usedTechnique: 'GithubAPI',
        info: '使用可能言語の習得度を数値化して表示するために、Githubアカウントのリポジトリ内にアップロードされてるファイルの拡張子の数を拾っております。'
      },
      {
        usedTechnique: 'useEffect',
        info: 'GithubAPIが非同期処理なので、データ抽出後にレンダー処理などするために使用しております。'
      }
    ]
  },
  {
    pageName: 'Bio',
    techniques: [
      {
        usedTechnique: 'ページ独自での使用技術無し',
        info: '全ページで使用しているMUIを主に使用しております。'
      }
    ]
  },
  {
    pageName: 'Contact',
    techniques: [
      {
        usedTechnique: 'React Hook form',
        info: '問い合わせフォームの入力内容をバリデーションするため使用しております。'
      },
      {
        usedTechnique: 'EmailJS',
        info: '問い合わせフォームに入力した内容をリョウヤマ本人に通知が来るように同期しております。'
      }
    ]
  },

];

export default techniqueData;
