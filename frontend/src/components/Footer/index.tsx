import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    IoMail,
} from 'react-icons/io5';
import './styles.css';

export default function Footer() {
    return (
        <footer className="footer">
            <h4>Made by Djalma Hideki Yamamoto</h4>
            <div className="footer-icons">
                <a
                    href="https://github.com/YH1d3k12"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <IoLogoGithub size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/yamamoto-hideki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <IoLogoLinkedin size={20} />
                </a>
                <a href="mailto:djalmahy@hotmail.com" aria-label="Email">
                    <IoMail size={20} />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5547996700158"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                >
                    <IoLogoWhatsapp size={20} />
                </a>
            </div>
        </footer>
    );
}
