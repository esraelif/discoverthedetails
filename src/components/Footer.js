import React from 'react';
import { socialLinks } from '../data'
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer - links' itemClass='footer - link' />
            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const { id, href, icon } = link
                    return (

                        <SocialLink key={link.id}{...link} itemClass='footer-icon' />

                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Discover The Details travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved by Esra Elif Yeter
            </p>
        </footer>
    );
}

export default Footer;
