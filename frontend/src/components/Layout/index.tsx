import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

export default function Layout() {
    return (
        <div className="layout">
            <img className="layout-background-image" alt="background image" />
            <main className="layout-content">
                <Header />
                <div className="layout-outlet">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    );
}
