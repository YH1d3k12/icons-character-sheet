import { Link } from 'react-router-dom';
import { options } from './options.tsx';
import './styles.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            {options.map(option => (
                <Link
                    key={option.title}
                    to={option.path}
                    className="navbar-item"
                >
                    {option.icon}
                    <span>{option.title}</span>
                </Link>
            ))}
        </nav>
    );
}
