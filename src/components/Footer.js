import React from 'react';
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((link) => {
                    const { id, href, text } = link
                    return (
                        <li key={id}>
                            <a href={href} className="footer-link">{text}</a>
                        </li>

                    )
                })}

            </ul>
            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const { id, href, icon } = link
                    return (
                        <li>
                            <a href={href} target="_blank" className="footer-icon">
                                rel='noreferrer'
                                <i className={icon}></i>
                            </a>
                        </li>

                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Discover The Details travel tours company
                <span id="date"></span> all rights reserved by Esra Elif Yeter
            </p>
        </footer>
    );
}

export default Footer;
