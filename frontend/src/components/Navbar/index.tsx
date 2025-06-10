import { Link } from 'react-router-dom';
import { options } from './options.tsx';
import './styles.css';

export default function Navbar() {
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
            </ul>
        </nav>
    );
}
