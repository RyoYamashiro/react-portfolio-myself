import {Fade as Hamburger} from 'hamburger-react'
import ClassNames from 'classnames';
import {useState} from 'react';
import { Link } from 'react-router-dom';



function Header(){

  const [hamburger, setHamburger] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const handleClickCloseMenu = (e) => {
      setOpen(!isOpen);

  }

  const ClassNameHamburger = ClassNames({
    'nav-menu': true,
    'active': isOpen
  });

  return (
    <header className="header">
      <h1 className="title"><Link className="menu-link" to="/">RyoYama</Link></h1>
      <div className="menu-trigger">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ff8af2" rounded />
      </div>
      <nav className={ClassNameHamburger}>

        <ul className="menu">
          <li className="menu-item"><Link className="menu-link" to="/skills" onClick={handleClickCloseMenu} >Skills</Link></li>
          <li className="menu-item"><Link className="menu-link" to="/bio" onClick={handleClickCloseMenu} >Bio</Link></li>
          <li className="menu-item"><Link className="menu-link" to="/contact" onClick={handleClickCloseMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
