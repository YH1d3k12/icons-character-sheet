import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './styles.css';

export default function Layout() {
    return (
        <div className="layout">
            <img className="layout-background-image" alt="background image" />
            <Header />
            <div className="layout-content">
                <Navbar />
                <div className="layout-outlet">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
