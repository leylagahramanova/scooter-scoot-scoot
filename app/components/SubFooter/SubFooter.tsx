import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import './SubFooter.css';

const SubFooter: React.FC = () => {
  const pathname = usePathname();

  const iconStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '24px',
    color: '#FCB72B', // Default color
    height: '24px',
    cursor: 'pointer',
    fontSize: '20px',
    textAlign: 'left',
    lineHeight: '48px', // Adjusted line height for vertical centering
    transition: 'color 0.3s ease', // Smooth transition for color change
  };

  const hoverStyle: React.CSSProperties = {
    color: '#FFFFFF', // Color on hover
  };

  return (
    <div className="subfooter">
      <div className="subfooter-container">
        <div id="subfooter-logo">
          <div className="subfooter-logo">
            <h3>SCOOT</h3>
          </div>
        </div>
        <div className='menuicons'>
          <ul className="subfooter-menu">
            <li className="subfooter-item">
              <Link href="/about" className={`subfooter-links ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            </li>
            <li className="subfooter-item">
              <Link href="/location" className={`subfooter-links ${pathname === '/location' ? 'active' : ''}`}>Location</Link>
            </li>
            <li className="subfooter-item">
              <Link href="/careers" className={`subfooter-links ${pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
            </li>
          </ul>
          <div className="footer-iconss">
            <Link href="#"><FaFacebookSquare className="footer-iconss2" style={{ ...iconStyle }} /></Link>
            <Link href="#"><FaTwitter className="footer-iconss2" style={{ ...iconStyle }} /></Link>
            <Link href="#"><FaInstagram className="footer-iconss2" style={{ ...iconStyle }}  /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
