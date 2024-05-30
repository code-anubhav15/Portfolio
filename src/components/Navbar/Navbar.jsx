import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/mail_icon.svg';
import navIcon3 from '../../assets/img/github.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/img/menu_open.svg';
import menu_close from '../../assets/img/menu_close.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState('home');

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.left = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.left = "-350px";
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setMenu(value);
    closeMenu();
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-close" />
        <li
          className={`navbar-link ${menu === 'home' ? 'active-menu' : ''}`}
          onClick={() => onUpdateActiveLink('home')}
        >
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li
          className={`navbar-link ${menu === 'skills' ? 'active-menu' : ''}`}
          onClick={() => onUpdateActiveLink('skills')}
        >
          <AnchorLink className="anchor-link" href="#skill">
            Skills
          </AnchorLink>
        </li>
        <li
          className={`navbar-link ${menu === 'projects' ? 'active-menu' : ''}`}
          onClick={() => onUpdateActiveLink('projects')}
        >
          <AnchorLink className="anchor-link" href="#project">
            Projects
          </AnchorLink>
        </li>
      </ul>
      <span className="nav-icons">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/anubhav-chaudhary-41a055256/">
            <img src={navIcon1} className="icon" alt="Social Icon 1" />
          </a>
          <a href="mailto:anubhavch15@gmail.com">
            <img src={navIcon2} className="icon" alt="Social Icon 2" />
          </a>
          <a href="https://github.com/code-anubhav15">
            <img src={navIcon3} className="icon" alt="Social Icon 3" />
          </a>
        </div>
        <div>
          <AnchorLink href="#contact">
            <button className="nav-btn">
              <span>Let’s Connect</span>
            </button>
          </AnchorLink>
        </div>
      </span>
    </div>
  );
};

export default Navbar;
