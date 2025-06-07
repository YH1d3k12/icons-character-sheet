import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import bg from '../../assets/bg.jpg';
import './styles.css';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="layout-content">
                <Navbar />
                <div className="layout-outlet">
                    <img
                        className="layout-background-image"
                        // src={bg}
                        alt="background image"
                    />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
