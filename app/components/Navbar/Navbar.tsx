import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    const mobileMenu = () => {
      const menu = document.querySelector('#mobile-menu');
      const menuLinks = document.querySelector('.navbar__sidebar');
      if (!menu || !menuLinks) return;
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
      document.body.style.overflowY = menu.classList.contains('is-active') ? 'hidden' : 'auto';
    };

    const menu = document.querySelector('#mobile-menu');
    if (menu) {
      menu.addEventListener('click', mobileMenu);
    }

    return () => {
      if (menu) {
        menu.removeEventListener('click', mobileMenu);
      }
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div id="navbar__logo">
          <div className=" logo-7">
            <h3>
              <Link href="/" className='navbar__links'>scoot</Link>
            </h3>
          </div>
        </div>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar__sidebar">
          <ul className="navbar__menu">
            <li className='navbar__item'>
              <Link href="/about" className={`navbar__links ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            </li>
            <li className="navbar__item">
              <Link href="/location" className={`navbar__links ${pathname === '/location' ? 'active' : ''}`}>Location</Link>
            </li>
            <li className='navbar__item'>
              <Link href="/careers" className={`navbar__links ${pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
            </li>
          </ul>
          <div className="button-container">
            <Link href="/store" className="navbar__links">
              <button className={`navbar__button ${pathname === '/store'}`}>Get Scootin</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
