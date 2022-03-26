import styled from 'styled-components';
import { media, font_size_m, green, pink } from '../utils/styledComponents';






function Footer(){
  return (
    <FooterContainer>
      <p>Copyright RyoYama. All Rights Reserved</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${green};
  color: ${pink};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  ${media.handheld`
    font-size: ${font_size_m};
    height: 45px;
  `}
`;

export default Footer;
