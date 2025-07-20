import { Link } from 'react-router-dom';
import { options } from './options.tsx';
import './styles.css';

interface NavbarProps {
    onDownloadCharacter: () => void;
    onUploadCharacter: (file: File) => void;
}

export default function Navbar({
    onDownloadCharacter,
    onUploadCharacter,
}: NavbarProps) {
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onUploadCharacter(file);
        e.target.value = '';
    };

    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                {options.map(option => (
                    <li>
                        <Link
                            key={option.title}
                            to={option.path}
                            className="navbar-item"
                        >
                            {option.icon}
                            <span>{option.title}</span>
                        </Link>
                    </li>
                ))}
                <button
                    className="navbar-download"
                    onClick={onDownloadCharacter}
                >
                    Download Character
                </button>
                <input
                    className="navbar-upload"
                    type="file"
                    accept="application/json"
                    onChange={onFileChange}
                />
            </ul>
        </nav>
    );
}
