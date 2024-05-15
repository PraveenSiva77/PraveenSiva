import React from 'react';
import "./footer.css";
import logo1 from "../../assets/icon.svg";
import { myLinks } from '../myLinks';
import { adData } from '../myLinks';

const Footer = () => {
    const instagramLink = myLinks.find(link => link.title === 'Instagram')?.link;
    const whatsappLink = myLinks.find(link => link.title === 'Whatsapp')?.link;
    const linkedinLink = myLinks.find(link => link.title === 'Linkedin')?.link; 
    const name = adData.find(link => link.title === 'Nick Name')?.data;
    const copyright = adData.find(link => link.title === 'Copyright')?.data;

  return (
    <footer className="footer">
        <div className="footer__container container">
            <img src={logo1} alt="" className="footer__img" />
            <h1 className="footer__title">
                {name}
            </h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonial" className="footer__link">Testimonial</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href={instagramLink} className="footer__social-icon" target='_blank'>
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href={whatsappLink} className="footer__social-icon" target='_blank'>
                    <i class="bx bxl-whatsapp"></i>
                </a>

                <a href={linkedinLink} className="footer__social-icon" target='_blank'>
                    <i class="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169;{copyright}
            </span>

        </div>
    </footer>
  )
}

export default Footer