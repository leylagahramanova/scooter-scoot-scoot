import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const Footer: React.FC = () => {
    const iconStyle: React.CSSProperties = {
        display: 'inline-block',
        width: '48px',
        height: '48px',
        cursor: 'pointer',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '8rem',
    };

    return (
        <div className="footer">
            <div className="grid-container">
                <div className="footer-info">
                    <h3>Sign up and Scoot off today</h3>
                </div>
                <div className="container-footer">

                    <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn apple-btn" role="button">
                        <span className="market-button-subtitle">Download on the</span>
                        <span className="market-button-title">App Store</span>
                    </a>

                    <a href="https://www.kobinet.com.tr/" target="_blank" className="market-btn google-btn" role="button">
                        <span className="market-button-subtitle">Download on the</span>
                        <span className="market-button-title">Google Play</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
