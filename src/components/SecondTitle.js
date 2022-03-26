import styled from 'styled-components';
import { media, font_family_corp, green, space_s, space_m, space_l, font_size_l, pink } from '../utils/styledComponents';


const SecondTitleContainer = styled.div`
  margin-bottom: ${space_m};
  overflow: hidden;
  display: flex;
  align-items: center;

  ${media.handheld`
    display: block;
  `}
  div{
    text-align: center;
    margin-bottom: ${space_s};
  }
  .second-title{
    color: ${pink};
    font-weight: bold;
    font-size: ${font_size_l};
    display: inline-block;
    padding: ${space_s};
    box-sizing: border-box;
    border-top: 5px solid ${green};
    border-bottom: 5px solid ${green};
    border-radius: 5px;
    float: left;
    margin-right: ${space_l};
    font-family: ${font_family_corp};
    ${media.handheld`
      float: none;
      margin-right: 0;
    `}

    &-wrapper{
      ${media.handheld`
        text-align: center;
        margin-bottom: ${space_s};
      `}
    }
  }
`;


function SecondTitle(props){
  return (
    <SecondTitleContainer>
      <div>
        <h2 className="second-title">{props.title}</h2>
      </div>
      <p className="second-subtitle">{props.subtitle}</p>
    </SecondTitleContainer>
  )
}
export default SecondTitle;
