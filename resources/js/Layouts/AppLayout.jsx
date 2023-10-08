import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee';
import LogoutModal from '@/Components/Modal/LogoutModal';

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <LogoutModal/>
            {children}
            <Footer />
        </>
    );
}
