import Header from './Header';
import Footer from './Footer';
import LogoutModal from '@/Components/Modal/LogoutModal';
import BetLockModal from '@/Components/Modal/BetLockModal';

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <LogoutModal/>
            <BetLockModal/>
            <div className="mb-12 md:mb-0 dark:bg-gray-900 min-h-screen">
            {children}
            </div>
            <Footer />
        </>
    );
}
