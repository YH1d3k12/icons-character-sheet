import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { options } from '../../routes/routerOptions.tsx';
import UploadButton from '../UploadButton/index.tsx';
import DownloadButton from '../DownloadButton/index.tsx';
import './styles.css';

interface HeaderProps {
    onUploadCharacter: (file: File) => void;
    onDownload: () => void;
}

export default function Header({ onDownload, onUploadCharacter }: HeaderProps) {
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
            <nav className="header-navbar">
                <Link to="/" className="header-navbar-title">
                    Icons Character Sheet
                </Link>
                <div className="header-navbar-links">
                    <UploadButton onFileChange={onFileChange} />
                    <DownloadButton onDownload={onDownload} />
                </div>
                <div className="header-navbar-burguer-container">
                    <input
                        type="checkbox"
                        id="menuToggle"
                        onClick={handleToggle}
                    />
                    <label
                        htmlFor="menuToggle"
                        className="header-navbar-burguer"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <ul
                    className={`header-navbar-burguer-links ${
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
