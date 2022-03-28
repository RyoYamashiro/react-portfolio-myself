import styled from 'styled-components';
import { media, pink, font_size_default, font_size_xl } from '../utils/styledComponents';

const TopContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: 100vw;
  .greeting-title{
    letter-spacing: -0.05em;
    color: ${pink};
    font-size: px;
    display: inline-block;
    font-weight: bold;
    font-size: 54px;
    text-shadow: 2px 2px 4px #ddd;
    ${media.handheld`
      font-size: 34px;
    `}
    br{
      display: none;
      ${media.handheld`
        display: inline-block;
      `}
    }
    strong{
      font-size: 96px;
      ${media.handheld`
        font-size: 52px;
      `}
    }
  }
  .greeting-text{
    font-size: ${font_size_xl};
    ${media.handheld`
      font-size: ${font_size_default};
    `}
  }
`;
function Top() {
  return (
    <TopContainer>
      <p className="greeting-title"><strong>リョウヤマ</strong>の<br />ポートフォリオ</p>
      <p className="greeting-text">ご閲覧いただきありがとうございます。</p>
    </TopContainer>
  );
}

export default Top;
