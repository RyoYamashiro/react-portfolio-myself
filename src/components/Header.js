import {Fade as Hamburger} from 'hamburger-react'
import ClassNames from 'classnames';
import {useState} from 'react';



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
      <h1 className="title"><a className="menu-link" href="#">RyoYama</a></h1>
      <div className="menu-trigger">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ff8af2" rounded />
      </div>
      <nav className={ClassNameHamburger}>

        <ul className="menu">
          <li className="menu-item"><a className="menu-link" href="#skills" onClick={handleClickCloseMenu} >Skills</a></li>
          <li className="menu-item"><a className="menu-link" href="#bio" onClick={handleClickCloseMenu} >Bio</a></li>
          <li className="menu-item"><a className="menu-link" href="#contact" onClick={handleClickCloseMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
