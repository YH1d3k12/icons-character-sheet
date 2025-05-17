import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './styles.css';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="layout-content">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
