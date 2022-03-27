import {Fade as Hamburger} from 'hamburger-react'
import ClassNames from 'classnames';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import styled from 'styled-components';
import { media, font_color_default, font_size_xxl, font_size_3l, font_family_corp, space_m, space_l, space_xl, space_xxl, space_3l, green, font_size_xl } from '../utils/styledComponents';


const HeaderContainer = styled.header`
  box-sizing: border-box;
  height: 68px;
  width: 100%;
  color: ${font_color_default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${space_3l};
  padding-right: ${space_3l};
  position: fixed;
  top: 0;
  transition: .3s;
  z-index: 2;
  background: ${green};
  ${media.handheld`
    height: 60px;
    padding-right: ${space_xl};
    padding-left: ${space_l};
    width: 100%;
  `}
`;
const HeaderLogo = styled.h1`
  font-size: ${font_size_3l};
  font-family: ${font_family_corp};
  font-weight: bold;
  .menu-link{
    padding: 0;
  }
`;
const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  font-size: ${font_size_xl};
  font-family: ${font_family_corp};
  li.menu-item {
    margin-right: ${space_xxl};
    &:last-child{
      margin-right: 0;
    }
  }
  a.menu-link {
    -webkit-font-smoothing: initial;
  }
  ${media.handheld`
    display: block;
    font-size: ${font_size_xxl};
    li.menu-item {
      margin-right: initial;
    }
    a.menu-link {
      -webkit-font-smoothing: initial;
      display: block;
      padding: ${space_l};
      text-align: center;
    }
  `}
`;
const MenuTrigger = styled.div`
  display: none;
  ${media.handheld`
    display: inline-block;
  `}
  transition: all .4s;
  box-sizing: border-box;
  position: relative;
  z-index: 3;
`;

const NavMenu = styled.nav`
  ${media.handheld`
    display: block;
    position: absolute;
    top: 0;
    right: -100%;
    background: ${green};
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    transition: .5s;
    &.active {
      transition: .5s;
      transform: translateX(-100%);
      z-index: 2;
    }
  `}
`;

const SNSIconWrapper = styled.li`
  display: flex;
  position: relative;
  top: 6px;
  justify-content: space-between;
  width: 74px;
  .twitter-icon{
    color: #00acee;
  }
  .github-icon{
    color: #211F1F;
  }
  ${media.handheld`
    width: 100%;
    justify-content: center;
    .sns-link{
      padding: ${space_m};
    }
  `}
`;




function Header(){

  const [hamburger, setHamburger] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const handleClickCloseMenu = (e) => {
      setOpen(!isOpen);

  }

  const ClassNameHamburger = ClassNames({
    'active': isOpen
  });

  return (
    <HeaderContainer>
      <HeaderLogo><Link className="menu-link" to="/">RyoYama</Link></HeaderLogo>
      <MenuTrigger>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ff8af2" rounded />
      </MenuTrigger>
      <NavMenu className={ClassNameHamburger}>

        <MenuContainer>
          <li className="menu-item"><Link className="menu-link" to="/skills" onClick={handleClickCloseMenu} >Skills</Link></li>
          <li className="menu-item"><Link className="menu-link" to="/bio" onClick={handleClickCloseMenu} >Bio</Link></li>
          <li className="menu-item"><Link className="menu-link" to="/contact" onClick={handleClickCloseMenu}>Contact</Link></li>
          <SNSIconWrapper className="menu-item">
            <a className="sns-link twitter-icon" href="https://twitter.com/ClwhcvWupnizvXv"><TwitterIcon fontSize="large" /></a>
            <a className="sns-link github-icon" href="https://github.com/RyoYamashiro"><GitHubIcon fontSize="large" /></a>
          </SNSIconWrapper>
        </MenuContainer>
      </NavMenu>
    </HeaderContainer>
  );
}


export default Header;
