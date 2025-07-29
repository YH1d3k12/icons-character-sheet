import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { options } from './options.tsx';
import UploadButton from '../UploadButton/index.tsx';
import DownloadButton from '../DownloadButton/index.tsx';
import './styles.css';

interface NavbarProps {
    onUploadCharacter: (file: File) => void;
    onDownload: () => void;
}

export default function Navbar({ onDownload, onUploadCharacter }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onUploadCharacter(file);
        e.target.value = '';
    };

    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="navbar-title">
                    Icons Character Sheet
                </Link>
                <div className="navbar-links">
                    {options.map(option => (
                        <Link
                            key={option.title}
                            to={option.path}
                            className="navbar-link"
                        >
                            {option.icon}
                            <span>{option.title}</span>
                        </Link>
                    ))}
                    <UploadButton onFileChange={onFileChange} />
                    <DownloadButton onDownload={onDownload} />
                </div>
                <div className="navbar-burguer-container">
                    <input
                        type="checkbox"
                        id="menuToggle"
                        onClick={handleToggle}
                    />
                    <label htmlFor="menuToggle" className="navbar-burguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <ul
                    className={`navbar-burguer-links ${
                        isMobileMenuOpen ? 'open' : ''
                    }`}
                >
                    {options.map(option => (
                        <li key={option.title}>
                            <Link
                                to={option.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {option.icon}
                                <span>{option.title}</span>
                            </Link>
                        </li>
                    ))}
                    <UploadButton onFileChange={onFileChange} />
                    <DownloadButton onDownload={onDownload} />
                </ul>
            </nav>
        </header>
    );
}
