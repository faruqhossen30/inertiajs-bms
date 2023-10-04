import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee';

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <Marquee/>
            {children}
            <Footer />
        </>
    );
}
