import { Link, useLocation } from 'react-router-dom';
import { options } from '../../routes/routerOptions.tsx';
import './styles.css';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            {options.map(option => (
                <Link
                    key={option.path}
                    to={option.path}
                    className={`navbar-link ${
                        location.pathname === option.path ? 'active' : ''
                    }`}
                >
                    {option.icon}
                    <span className="navbar-link-title">{option.title}</span>
                </Link>
            ))}
        </nav>
    );
}
